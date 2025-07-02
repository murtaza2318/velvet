import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const LocationMap = () => {
  const katyCoordinates = {
    latitude: 29.7858,
    longitude: -95.8245,
  };

  const openInMaps = () => {
    const url = `https://maps.google.com/?q=${katyCoordinates.latitude},${katyCoordinates.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.mapWrapper}>
      <Text style={styles.mapLabel}>Location: </Text>
      <Text style={styles.mapLabel2}> Katy, TX</Text>
      <TouchableOpacity style={styles.mapPlaceholder} onPress={openInMaps}>
        <View style={styles.mapContent}>
          <Text style={styles.mapTitle}>📍 Katy, TX</Text>
          <Text style={styles.mapSubtitle}>Sitter's location</Text>
          <Text style={styles.mapCoordinates}>
            {katyCoordinates.latitude.toFixed(4)}, {katyCoordinates.longitude.toFixed(4)}
          </Text>
          <Text style={styles.mapAction}>Tap to open in Maps</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  mapLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    backgroundColor: '#f9f9f9',
    color: '#333',
    marginLeft: 12
  },
  mapLabel2: {
    fontSize: 17,
    fontWeight: 'normal',
    padding: 12,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContent: {
    alignItems: 'center',
    padding: 20,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  mapSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  mapCoordinates: {
    fontSize: 12,
    color: '#888',
    marginBottom: 12,
    fontFamily: 'monospace',
  },
  mapAction: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default LocationMap;
