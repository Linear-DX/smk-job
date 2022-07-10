import { useContext } from "react";
import { BeasiswaContext } from "./beasiswaContext";
import BeasiswaArticle from "./beasiswaArticle";
import { Heading, Flex } from "@chakra-ui/react";

function DataBeasiswa() {
  const { data } = useContext(BeasiswaContext);
  console.log(data);

  return (
    <div>
        <Flex justifyContent="space-betweet" alignItems="center" pb="50px"></Flex>
      <Heading fontSize={30} textAlign="center" color="white" textTransform={'uppercase'}>Informasi mengenai beasiswa</Heading>
      <Flex />
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <BeasiswaArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default DataBeasiswa;