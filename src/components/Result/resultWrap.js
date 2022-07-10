import { Container, Flex } from "@chakra-ui/layout";
import Count from "./count";
import Sort from "./sort";

const ResultWrap = () => {
  return (
    <Container maxW="container.xl" mx="auto" my="8">
      <Flex justify="space-between" align="center">
        {/* result count */}
        <Count />
        {/* sorting */}
        <Sort />
      </Flex>
    </Container>
  );
};

export default ResultWrap;
