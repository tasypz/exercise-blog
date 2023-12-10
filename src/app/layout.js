import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import "./globals.css";
import { Providers } from "./provider";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
  title: "Cat Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="container.lg">
            <Box borderBottom={2} borderColor="gray.500" borderStyle="solid">
              <Flex
                py={3}
                gap={2}
                alignItems="center"
                flexDirection={{ sm: "row", base: "column" }}
              >
                <Box>
                  <Link href={"/"}>
                    <Image src="/logo.png" alt="logo" height={50} width={50} />
                  </Link>
                </Box>
                <Spacer />
                <Button
                  as="a"
                  href="https://github.com/tasypz"
                  target="_blank"
                  rel="no-referrer"
                  leftIcon={<FaGithub />}
                  colorScheme="pink"
                  px={5}
                >
                  Github
                </Button>
              </Flex>
              <HStack>
                <Image
                  src="/cat.jpg"
                  alt="Huh cat"
                  width={100}
                  height={100}
                  id="profilePicture"
                />
                <Box>
                  <Text>
                    Huh Cat blog captures the whimsical and unpredictable
                    adventures of a feline friend, offering a delightful blend
                    of humor, heartwarming moments, and insightful musings from
                    the perspective of a devoted cat owner.
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box mt={5}>{children}</Box>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
