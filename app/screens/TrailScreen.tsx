import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from 'native-base';
import MapView, { Geojson } from 'react-native-maps';
import turf from 'turf';
import turfLength from '@turf/length';
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
  const distance = turfLength(
    turf.lineString(track.features[0].geometry.coordinates),
    {
      units: 'kilometers',
    },
  );

  console.log({ distance });

  // TODO: look for LineString in imported file
  // TODO: compile track

  return (
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
        // showsPointsOfInterest
        showsScale
        zoomEnabled
        zoomTapEnabled
      >
        <Geojson
          geojson={track as any}
          strokeColor="yellow"
          strokeWidth={4}
          onPress={event => console.log({ event })}
        />
      </MapView>
      <Box
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          bottom: 10,
          padding: 10,
          borderRadius: 10,
          alignSelf: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          {`Distance: ${Math.round(distance * 100) / 100} km`}
        </Text>
      </Box>
    </Box>
  );
}
