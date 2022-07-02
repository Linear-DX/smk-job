import { Select } from "@chakra-ui/select";

const Sort = () => {
  return (
    <Select placeholder="Sort by.." bg="white" w="25%">
      <option value="higher">Gaji Terbesar</option>
      <option value="higher">Fresh Graduates</option>
      <option value="lower">Lokasi Terdekat</option>
      <option value="lower">Pengalaman 1 tahun</option>
      <option value="lower">Pengalaman 3 tahun</option>
    </Select>
  );
};

export default Sort;
