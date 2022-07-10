import { Box, Heading, Text, Flex } from "@chakra-ui/react";
// @ts-ignore
import CardsLink from "./cardslink.tsx";

export default function Intro() {
  return (
    <Box w="full" bg="blue.700" px="180px" py="50px" mb="100px">
      <Flex justifyContent="space-betweet" alignItems="center" pb="50px">
        <Heading fontSize={55} letterSpacing="3px" color="whiteAlpha.900">
          Lulusan SMK <br /> takut masuk dunia kerja?
        </Heading>
        <Box maxW="40%">
          <Text fontSize={20} color="whiteAlpha.900" pb="20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatem deserunt
            quibusdam libero soluta voluptates maiores impedit, facere eaque nesciunt earum nobis
            architecto ducimus tempore saepe, ea distinctio necessitatibus a.
          </Text>
        </Box>
      </Flex>

      <Flex px="-20px" mb="-250px">
        <Box p="2">
          <CardsLink />
        </Box>
        <Box p="2">
          <CardsLink />
        </Box>
        <Box p="2">
          <CardsLink />
        </Box>
      </Flex>
    </Box>
  );
}
