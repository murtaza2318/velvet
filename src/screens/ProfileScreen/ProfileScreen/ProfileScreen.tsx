
// File: src/screens/ProfileScreen/ProfileScreen.tsx
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import StarSitterStatus from './components/StarSitterStatus';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HomeDetails from './components/HomeDetails';
import LocationMap from './components/LocationMap';
import ContactButton from './components/ContactButton';

const ProfileScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <ProfileHeader />
    <StarSitterStatus />
    <AboutSection />
    <SkillsSection />
    <HomeDetails />
    <LocationMap />
    <ContactButton />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
