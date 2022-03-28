import type { NextPage } from "next";
import {
  Button,
  Heading,
  VStack,
  Text,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      spacing={6}
      padding={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button
            onClick={toggleColorMode}
            variant="link"
            colorScheme={secondaryTextColor}
          >
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/logo.png" alt="logo" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text>PNYCOMP27541</Text>
          </VStack>

          <Text as="b" size="sm" textAlign="end">
            $119.00
          </Text>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Text as="b" size="sm">
            $119.00
          </Text>
        </HStack>
      </VStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Text as="b" size="sm">
            $19.99
          </Text>
        </HStack>
      </VStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Text as="b" size="sm">
            $23.80
          </Text>
        </HStack>
      </VStack>
      <Divider />

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Text as="b" size="lg">
            $162.79
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
