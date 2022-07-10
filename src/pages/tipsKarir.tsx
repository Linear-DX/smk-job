import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { PostCard } from "../components/tipsSections/component/scroll-menu/cards";
// import React from "react";
// @ts-ignore
import Intro from "../components/tipsSections/section/heroLanding.tsx";

// @ts-ignore
// import Arrow from "../components/tipsSections/section/ScrollMenu";
// @ts-ignore
import { Services } from "../components/tipsSections/section/services";

export default function Landing() {
  return (
    <Box>
      <Navbar />
      <Intro />
      <Services />
      <PostCard />

      <Footer />
    </Box>
  );
}
