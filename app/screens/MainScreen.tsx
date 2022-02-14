import React from 'react';
import { Flex, Heading, HStack, Text, VStack } from 'native-base';

export default function MainScreen() {
  return (
    <Flex>
      <VStack alignItems="center">
        <Heading size="sm" fontFamily="heading">
          Main
        </Heading>
        <HStack alignItems="center">
          <Text>me info</Text>
          <Text>trails (map)</Text>
        </HStack>
      </VStack>
    </Flex>
  );
}
