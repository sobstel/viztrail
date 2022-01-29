import React from 'react';
import { Flex, Heading, HStack, Text, VStack } from 'native-base';

export default function HomeScreen() {
  return (
    <Flex>
      <VStack alignItems="center">
        <Heading size="sm" fontFamily="heading">
          Trails
        </Heading>
        <HStack alignItems="center">
          <Text>under construction</Text>
        </HStack>
      </VStack>
    </Flex>
  );
}
