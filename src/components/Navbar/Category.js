import { Select } from "@chakra-ui/select";

const Category = () => {
  return (
    <Select placeholder="All Category" bg="white" w="40%">
      <option value="fashion">IT</option>
      <option value="fashion">Marketing</option>
      <option value="fashion">Finance</option>
      <option value="fashion">Bank</option>
      <option value="fashion">Other</option>
    </Select>
  );
};

export default Category;
