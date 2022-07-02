import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Perusahaan1 from "./ListPerusahaan/Perusahaan1";
import Perusahaan2 from "./ListPerusahaan/Perusahaan2";

const ListPerusahaan= () => {
  return (
    <Container maxW="container.xl" mx="auto" my="4" mb="20">
      <SimpleGrid columns={4} spacing={4}>
        <Perusahaan1 />
        <Perusahaan2 />
        <Perusahaan1 />
        <Perusahaan2 />
        <Perusahaan1 />
        <Perusahaan2 />
        <Perusahaan1 />
      </SimpleGrid>
    </Container>
  );
};

export default ListPerusahaan;
