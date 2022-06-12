import { Box } from "@chakra-ui/react";
import React from "react";
// @ts-ignore
import Intro from "./section/intro.tsx";

// import { Services } from "./sections/services";
// import { Commitments } from "./sections/commitments";
// import { HowWeWork } from "./sections/how-we-work";
// import { Testimonials } from "./sections/testimonials";

export default function Landing() {
  return (
    <Box>
      <Intro />
      {/* <Services />
      <Commitments />
      <HowWeWork />
      <Testimonials /> */}
    </Box>
  );
}
