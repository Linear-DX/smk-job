import { Box, Icon, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { FiBookmark } from "react-icons/fi"
import { IoMdBriefcase } from "react-icons/io"

const Perusahaan2 = () => {
  return (
    <Flex
      h="full"
      flexDir="column"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
    >
      <Flex justify="space-between" gridGap={1}>
      <Image src="https://i.pinimg.com/564x/c6/82/73/c68273edeb333a7f3765c02ed509b55d.jpg"
               alt="Card Image" boxSize="70px" borderTopLeftRadius="lg" borderBottomRightRadius="lg" cursor="pointer" />
      <Icon as={FiBookmark} color="gray.400" w={6} h={6} mt="3" mr="3"  _hover={{ fill: "gray.400" }} cursor="pointer" />
      </Flex>
      <Flex flexDir="column" align="start" m="4">
        <Box cursor="pointer">
          <Heading color="blue.800" fontSize="15" fontWeight="bold">
            PT. Pertamina 
          </Heading>
          <Heading fontSize="13" fontWeight="semibold" color="gray.400">
           Yogyakarta, Indonesia
          </Heading>
        </Box>

        <VStack alignItems="start" fontSize="12" spacing="0" mt="3">
        
          <Flex justify="space-between" gridGap={1} cursor="pointer">
            <Icon as={IoMdBriefcase} color="gray.400" w={6} h={5}  />
            <Text mt="0.3" fontSize="14" fontWeight="semibold" color="blue.500">9 Lowongan</Text>
          </Flex>
        </VStack>
        <VStack alignItems="right" fontSize="12" spacing="0" mt="3">
        <Text color="gray.500">Terakhir aktif 8 jam yang lalu</Text>
        </VStack>
      </Flex>
      
    </Flex>
    
  );
};

export default Perusahaan2;
