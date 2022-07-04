import React, { useContext } from "react";
import { BeasiswaContext } from "./BeasiswaContext";
import BeasiswaArticle from "./BeasiswaArticle";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

function Scholarship() {
  const { data } = useContext(BeasiswaContext);
  console.log(data);

  return (
    <div>
        <Flex justifyContent="space-betweet" alignItems="center" pb="50px"></Flex>
      <Heading fontSize={30} textAlign="center" color="black">Informasi mengenai beasiswa</Heading>
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

export default Scholarship;