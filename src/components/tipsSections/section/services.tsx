import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export const Services = () => {
  return (
    <Box py="80px" pt="100px" px="200px" bg="#ffd335" mx="30px" mb="-30px">
      <Flex justifyContent="space-between" alignItems="center" mt="10px">
        <Heading fontSize="70" letterSpacing="4px" color="#121212" ml="-100px">
          Masa Depan Ada Ditanganmu
        </Heading>
        <Text maxW="350px" color="#121212" mr="-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sint quaerat voluptates
          eius dolorum nihil? Cupiditate doloribus nobis, quidem ex ipsa suscipit omnis non,
          recusandae nesciunt nam quisquam aspernatur natus.
        </Text>
      </Flex>
    </Box>
  );
};
