import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CustomIcon } from '../../../components/CustomIcon';
import type { IconType } from '../../../components/CustomIcon/interface';

const homeDetails: { icon: string; type: IconType; label: string }[] = [
  { icon: 'business', type: 'Ionicons', label: 'Lives in an apartment' },
  { icon: 'close-circle-outline', type: 'Ionicons', label: 'Does not have a yard' },
  { icon: 'smoking-off', type: 'MaterialCommunityIcons', label: 'Non-smoking household' },
  { icon: 'close-circle-outline', type: 'Ionicons', label: 'Has no pets' },
  { icon: 'close-circle-outline', type: 'Ionicons', label: 'No children present' },
  { icon: 'paw-outline', type: 'Ionicons', label: 'No females in heat' },
];

const preferences: { icon: string; type: IconType; label: string }[] = [
  { icon: 'paw-outline', type: 'Ionicons', label: 'Dogs over 1 year old' },
];

const HomeDetails = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Home</Text>
    {homeDetails.map((item, index) => (
      <View key={index} style={styles.itemRow}>
        <CustomIcon type={item.type} icon={item.icon} size={20} color="#222" />
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    ))}
    <Text style={styles.viewAll}>View all</Text>

    <Text style={[styles.heading, { marginTop: 20 }]}>Preferences in your home</Text>
    {preferences.map((item, index) => (
      <View key={index} style={styles.itemRow}>
        <CustomIcon type={item.type} icon={item.icon} size={20} color="#222" />
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    ))}

    <Text style={[styles.heading, { marginTop: 20 }]}>Location</Text>
    <Text style={styles.locationText}>Aspen, CO</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
    color: '#000',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  viewAll: {
    color: '#0057FF',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginTop: 4,
  },
});

export default HomeDetails;
