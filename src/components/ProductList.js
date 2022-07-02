import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Product from "./ProductList/Product";
import Product2 from "./ProductList/Product2";

const ProductList = () => {
  return (
    <Container maxW="container.xl" mx="auto" my="4" mb="20">
      <SimpleGrid columns={4} spacing={4}>
        <Product />
        <Product2 />
        <Product />
        <Product2 />
        <Product />
        <Product2 />
        <Product />
      </SimpleGrid>
    </Container>
  );
};

export default ProductList;
