import { Box } from "@chakra-ui/react";
import React from "react";

// @ts-ignore
import Intro from "./section/intro.tsx";
// @ts-ignore
import Arrow from "./scroll-menu/index.tsx";
// @ts-ignore
import { Services } from "./section/services.tsx";
// import { Services } from "./sections/services";
// import { Commitments } from "./sections/commitments";
// import { HowWeWork } from "./sections/how-we-work";
// import { Testimonials } from "./sections/testimonials";

export default function Landing() {
  return (
    <Box>
      <Intro />
      <Services />
      <Arrow />

      {/* <Services /> */}
      {/* <Commitments /> */}
      {/* <HowWeWork /> */}
      {/* <Testimonials /> */}
    </Box>
  );
}
