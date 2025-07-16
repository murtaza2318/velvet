import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomIcon } from '../../../components/CustomIcon';

const skills = [
  'Oral medication administration',
  'Injected medication administration',
  'Senior dog experience',
  'Special needs dog experience',
  'Can provide daily exercise',
];

const SkillsSection = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Skills</Text>
    {skills.map((skill, index) => (
      <View key={index} style={styles.skillItem}>
        <CustomIcon
          type="MaterialIcons"
          icon="check-circle-outline"
          size={20}
          color="#222"
        />
        <Text style={styles.skillText}>{skill}</Text>
      </View>
    ))}
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
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  skillText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
});

export default SkillsSection;
