import { Input, InputGroup } from "@chakra-ui/input";

const Search = () => {
  return (
    <InputGroup w="100%">
      <Input type="text" variant="SolidBlue" placeholder="Search..." />
    </InputGroup>
  );
};

export default Search;
