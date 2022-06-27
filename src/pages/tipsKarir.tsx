import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { PostCard } from "../components/tipsSections/component/scroll-menu/cards";
// import React from "react";
// @ts-ignore
import Intro from "../components/tipsSections/section/HeroLanding.tsx";
// @ts-ignore
// import Arrow from "../components/tipsSections/section/ScrollMenu";
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
      <PostCard />
      <Footer />
      {/* <Services /> */}
      {/* <Commitments /> */}
      {/* <HowWeWork /> */}
      {/* <Testimonials /> */}
    </Box>
  );
}
