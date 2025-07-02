// File: src/screens/ProfileScreen/components/ContactButton.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ContactButton = () => (
  <View style={styles.container}>
    <Button title="Contact this sitter" color="#73865C" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
});

export default ContactButton;

// ---
