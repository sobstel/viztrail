import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';
import MapView, { Geojson } from 'react-native-maps';
import sampletrack from './_sampletrack.temp.geojson.json';

export default function TrailScreen() {
  return (
    <Box flex="1">
      <MapView
        region={{
          latitude: sampletrack.features[0].geometry.coordinates[0][1],
          longitude: sampletrack.features[0].geometry.coordinates[0][0],
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421,
        }}
        mapType="hybrid"
        scrollEnabled
        style={{ ...StyleSheet.absoluteFillObject }}
        showsBuildings
        showsCompass
        showsPointsOfInterest
        showsScale
        zoomEnabled
        zoomTapEnabled
      >
        <Geojson
          geojson={sampletrack as any}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
        />
      </MapView>
    </Box>
  );
}
