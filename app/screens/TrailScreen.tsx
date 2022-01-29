import React from 'react';
import { Box, Flex, Text } from 'native-base';
import MapView from 'react-native-maps';

export default function TrailScreen() {
  return (
    <Flex>
      <MapView
        style={{ width: '100%', height: '100%' }}
        showsUserLocation
        zoomEnabled
      />
    </Flex>
  );
}
