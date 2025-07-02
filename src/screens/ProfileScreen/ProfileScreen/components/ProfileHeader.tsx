// File: src/screens/ProfileScreen/components/ProfileHeader.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => (
  <View>
    <Image
      source={{ uri: 'https://via.placeholder.com/300x150' }}
      style={styles.coverImage}
    />
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/60' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>America C.</Text>
        <Text style={styles.price}>from $40 per night</Text>
        <Text style={styles.location}>Katy, TX</Text>
        <Text style={styles.rating}>★ 5.0 · 109 reviews</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 150,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: -30,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  location: {
    color: '#555',
  },
  rating: {
    color: '#999',
  },
});

export default ProfileHeader;

// ---