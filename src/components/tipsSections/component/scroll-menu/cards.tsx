import React from "react";
// import CardsLink from "./landing/sections/cardslink";
import { LinkBox, LinkOverlay, Box, Text, Heading, Img } from "@chakra-ui/react";

export function Card() {
  return (
    <div
      role="button"
      style={{
        // border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "300px",
        height: "460px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          bg="white"
          boxShadow="xl"
        >
          {/* <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
            13 days ago
          </Box> */}
          <Heading size="md" my="2">
            <Img
              src="https://img.freepik.com/free-photo/resumes-desk_144627-43374.jpg?t=st=1655034821~exp=1655035421~hmac=34cbbef2793581cac0de9e79f9be245289c1b983d94abb32cd5eee59d58ef8b1&w=740"
              alt=""
              borderRadius="5%"
              pb="10px"
            />
            <LinkOverlay href="#">
              Cari tahu Bagaimana caranya membuat CV yang baik dan benar
            </LinkOverlay>
          </Heading>
          <Text mb="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita corrupti
            voluptas, repellendus cupiditate explicabo.
          </Text>
          <Box as="a" color="teal.400" href="#" fontWeight="bold">
            Read More
          </Box>
        </LinkBox>
      </div>
    </div>
  );
}
