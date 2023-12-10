import axiosInstance from "@/axios";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

async function getBlog(slug) {
  try {
    const res = await axiosInstance.get("/entries", {
      params: {
        "fields.slug": slug,
        limit: 1,
        content_type: "blogs",
      },
    });
    return {
      data: res.data.items[0],
      asset: res.data.includes.Asset[0],
    };
  } catch (error) {
    console.error(error);
    throw Error;
  }
}

export default async function Page({ params }) {
  const { data, asset } = await getBlog(params.slug);
  const { fields } = data;

  function renderContentBodyPart(content, index) {
    switch (content.nodeType) {
      case "paragraph":
        return (
          <Text key={`documentPart-${index}`} mb={3}>
            {content.content[0].value}
          </Text>
        );
      case "blockquote":
        return (
          <Text
            key={`documentPart-${index}`}
            mb={3}
            ml={2}
            pl={3}
            borderStyle="solid"
            borderLeftWidth={5}
            borderColor="gray.200"
          >
            {content.content[0].content[0].value}
          </Text>
        );
    }
  }

  return (
    <Box>
      <Heading mb={5}>{fields.title}</Heading>
      <Center maxH={400}>
        <Image
          style={{ maxHeight: "inherit", width: "auto" }}
          src={`https:${asset.fields.file.url}`}
          alt={asset.fields.title}
          height={asset.fields.file.details.image.height}
          width={asset.fields.file.details.image.width}
        />
      </Center>

      <Box mt={5}>
        {fields.body.content.map((contentPart, index) =>
          renderContentBodyPart(contentPart, index)
        )}
      </Box>
    </Box>
  );
}
