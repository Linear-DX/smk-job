import { Select } from "@chakra-ui/select";

const Category = () => {
  return (
      <Select placeholder="All Category" color={'darkBlue.100'} w="40%">
        <option value="fashion">IT</option>
        <option value="fashion">Marketing</option>
        <option value="fashion">Finance</option>
        <option value="fashion">Bank</option>
        <option value="fashion">Other</option>
      </Select>
  );
};

export default Category;
