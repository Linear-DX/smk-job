import { Container, SimpleGrid } from "@chakra-ui/react";
import Loker1 from "./loker1";
import Loker2 from "./loker2";

const ContentLoker = () => {
  return (
    <Container maxW="container.xl" mx="auto" my="4" mb="20">
      <SimpleGrid columns={4} spacing={4}>
        <Loker1 />
        <Loker2 />
        <Loker1 />
        <Loker2 />
        <Loker1 />
        <Loker2 />
        <Loker1 />
      </SimpleGrid>
    </Container>
  );
};

export default ContentLoker;
