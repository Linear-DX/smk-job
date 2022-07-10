import { Box, Heading, Img, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export const MethodCard = ({
  id,
  imagePath,
  heading,
  description,
}: {
  id: any;
  imagePath: string;
  heading: string;
  description: string;
}) => {
  return (
    <LinkBox
      as="article"
      maxW="sm"
      p="4"
      borderWidth="1px"
      rounded="md"
      bg="white"
      boxShadow="xl"
      my="1.5em"
    >
      <Heading size="md" my="2">
        <Img
          src={imagePath}
          alt=""
          borderRadius="4%"
          //   pb="10px"
          objectFit="cover"
          mb="0.5em"
          maxH="200px"
          minW="350px"
        />
        <LinkOverlay href="">{heading}</LinkOverlay>
      </Heading>
      <Text mb="3">
        {description.length > 90 ? `${description.substring(0, 90)} ....` : description}
      </Text>
      <Box as="a" color="teal.400" href="" fontWeight="bold" ml="16em">
        Read More
      </Box>
    </LinkBox>
  );
};
