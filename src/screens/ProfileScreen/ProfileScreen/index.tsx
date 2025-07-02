// src/screens/ProfileScreen/index.tsx

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import StarSitterStatus from './components/StarSitterStatus';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HomeDetails from './components/HomeDetails';
import LocationMap from './components/LocationMap';
import ContactButton from './components/ContactButton';
import { useProfileData } from './hooks';
import { ActivityIndicator, View, Text } from 'react-native';

const ProfileScreen = () => {
  const { data, loading } = useProfileData();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#73865C" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader />
      <StarSitterStatus />
      <AboutSection />
      <SkillsSection />
      <HomeDetails />
      <LocationMap />
      <ContactButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
});

export default ProfileScreen;
