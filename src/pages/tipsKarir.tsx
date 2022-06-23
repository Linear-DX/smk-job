import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
// import React from "react";
// @ts-ignore
import Intro from "../components/tipsSections/section/HeroLanding.tsx";
// @ts-ignore
import Arrow from "../components/tipsSections/section/ScrollMenu";
// @ts-ignore
import { Services } from "../components/tipsSections/section/services";
// import { Services } from "./sections/services";
// import { Commitments } from "./sections/commitments";
// import { HowWeWork } from "./sections/how-we-work";
// import { Testimonials } from "./sections/testimonials";

export default function Landing() {
  return (
    <Box>
      <Navbar />
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
