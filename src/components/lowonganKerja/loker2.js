import { Box, Icon, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { FiBookmark } from "react-icons/fi"

const Loker2 = () => {
  return (
    <Flex
      h="full"
      flexDir="column"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
    >
    <Flex justify="space-between" gridGap={1}>
      <Image src="https://img.idxchannel.com/images/idx/2022/03/15/IPO_GoTo_Menerapkan_Skema_Greenshoe_dan_MVS.jpg"
               alt="Card Image" boxSize="70px" borderTopLeftRadius="lg" borderBottomRightRadius="lg" cursor="pointer" w="30" />
            <Icon as={FiBookmark} color="gray.400" w={6} h={6} mt="3" mr="3"  _hover={{ fill: "gray.400" }} cursor="pointer"/>
    </Flex>
      <Flex flexDir="column" align="start" m="4">
        <Box cursor="pointer" >
          <Heading color="blue.800" fontSize="15" fontWeight="bold">
            PT. GoTo Gojek Tokopedia
          </Heading>
          <Heading fontSize="13" fontWeight="semibold" color="gray.400">
           Junior Frontend Developer React
          </Heading>
        </Box>

        <VStack alignItems="start" fontSize="12" spacing="0" mt="3">
          <Text fontWeight="semibold" color="blue.500">IDR 6 jt - 10 jt per bulan</Text>
          <Text fontSize="11">Jakarta Selatan</Text>
        </VStack>
        <VStack alignItems="right" fontSize="12" spacing="0" mt="3">
        <Text>2 hari yang lalu</Text>
        </VStack>
      </Flex>
      
    </Flex>
    
  );
};

export default Loker2;
