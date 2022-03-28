import type { NextPage } from "next";

import { Container, Flex } from "@chakra-ui/react";

import Cart from "../components/cart";
import Details from "../components/details";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={["auto", "100vh"]}
        py={[0, 10, 20]}
        direction={["column-reverse", "row"]}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
