import type { NextPage } from "next";

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details: NextPage = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>

        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Select>
                <option value="usa">United States of America</option>
                <option value="bra">Brazil</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
          </GridItem>

          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full">
              Place order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Details;
