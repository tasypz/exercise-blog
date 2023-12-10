import axiosInstance from "@/axios";
import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description: "My personal blogging website",
};

async function fetchBlogs() {
  try {
    const res = await axiosInstance.get("/entries", { params: { include: 2 } });
    return { items: res.data.items, assets: res.data.includes.Asset };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Home() {
  const { items: blogsData, assets } = await fetchBlogs();
  const blogList = blogsData.map((blog) => blog.fields);
  console.log(assets);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {blogList.map((blog, index) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug}>
          <Box>
            <Center maxH={250} bg="gray.100">
              <Image
                style={{ maxHeight: "inherit", width: "auto" }}
                src={`https:${assets[index].fields.file.url}`}
                alt={assets[index].fields.title}
                width={assets[index].fields.file.details.image.width}
                height={assets[index].fields.file.details.image.height}
              />
            </Center>
            <Heading mt={3} as="h3" fontSize="2xl">
              {blog.title}
            </Heading>
          </Box>
        </Link>
      ))}
    </Grid>
  );
}
