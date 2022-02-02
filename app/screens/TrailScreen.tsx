import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from 'native-base';
import MapView, { Geojson } from 'react-native-maps';
import turf from 'turf';
import track from './_jurathlon21.json';

export default function TrailScreen() {
  const center = turf.center(track.features[0].geometry as any);
  const envelope = turf.envelope(track.features[0].geometry as any);
  const distX = turf.distance(
    turf.point(envelope.geometry.coordinates[0][0]),
    turf.point(envelope.geometry.coordinates[0][1]),
    'degrees',
  );
  const distY = turf.distance(
    turf.point(envelope.geometry.coordinates[0][2]),
    turf.point(envelope.geometry.coordinates[0][3]),
    'degrees',
  );

  return (
    <Box flex="1">
      <Box flex="1">
        <MapView
          initialRegion={{
            latitude: center.geometry.coordinates[1],
            longitude: center.geometry.coordinates[0],
            latitudeDelta: distY + 0.033,
            longitudeDelta: distX + 0.033,
          }}
          mapType="hybrid"
          scrollEnabled
          style={{ ...StyleSheet.absoluteFillObject }}
          showsBuildings={false}
          showsCompass
          showsPointsOfInterest
          showsScale
          zoomEnabled
          zoomTapEnabled
        >
          <Geojson
            geojson={track as any}
            strokeColor="red"
            fillColor="green"
            strokeWidth={4}
            onPress={event => console.log({ event })}
          />
        </MapView>
      </Box>
      <Box>
        <Text>text</Text>
      </Box>
    </Box>
  );
}
