import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeDetails = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Home</Text>
    {[
      'Lives in a house',
      'Has a fenced yard',
      'Non-smoking household',
      'Has no pets',
      'Children 0–5 years old',
      'Dogs over 1 year old',
    ].map((item, index) => (
      <Text key={index} style={styles.item}>{item}</Text>
    ))}
    <Text style={styles.viewAll}>View all</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  heading: { 
    fontWeight: 'normal', 
    fontSize: 25, 
    marginBottom: 8, 
    marginLeft: 15,
    fontFamily: 'Poppins-SemiBold' 
  },
  item: { 
    marginBottom: 4, 
    color: '#555',
    fontSize: 20, 
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Poppins-Regular'
  },
  viewAll: { color: 'green', marginTop: 4 },
});

export default HomeDetails; 