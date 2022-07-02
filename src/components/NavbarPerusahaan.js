import { Box, Container, Flex } from "@chakra-ui/layout";
import Category from "./Navbar/Category";

import PrintButton from "./Navbar/PrintButton";
import Search from "./Navbar/Search";

const NavbarPerusahaan = () => {
  return (
    <Box w="full" zIndex="9" position="sticky" top="0" mt="7" mb="1">
      <Container maxW="container.xl" mx="auto">
        <Box p="2" bg="gray.200" borderRadius="md" shadow="sm">
          <Flex justify="space-between" gridGap={1}>
          
            <Search />
            <Category />
            <PrintButton />
            
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default NavbarPerusahaan;
