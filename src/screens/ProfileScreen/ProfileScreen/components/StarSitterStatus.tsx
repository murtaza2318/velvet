// File: src/screens/ProfileScreen/components/StarSitterStatus.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarSitterStatus = () => (
  <View style={styles.container}>
    <Text style={styles.title}>America C. has Star Sitter status</Text>
    <Text style={styles.description}>
      The Star Sitter program highlights responsive sitters who make it easier for pet parents to find the best care for their pets.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  title: { fontWeight: 'bold', fontSize: 16 },
  description: { marginTop: 8, color: '#555' },
});

export default StarSitterStatus;

// ---