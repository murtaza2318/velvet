
// File: src/screens/ProfileScreen/components/LocationMap.tsx
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LocationMap = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Location</Text>
    <Text style={styles.text}>Katy, TX</Text>
    <Image
      source={{ uri: 'https://via.placeholder.com/300x100?text=Map' }}
      style={styles.map}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  heading: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  text: { marginBottom: 8, color: '#555' },
  map: { width: '100%', height: 100 },
});

export default LocationMap;

// ---