import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const VelvetSupportScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Velvet Support</Text>
      </View>
      {/* Main Content */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.iconCircle}>?</Text>
          <Text style={styles.cardTitle}>How can we help?</Text>
        </View>
        <Text style={styles.cardSubtitle}>Find answers to your questions and resources for common concerns.</Text>
        <TouchableOpacity style={styles.filledBtn}>
          <Text style={styles.filledBtnText}>Visit the Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineBtnText}>Chat with Velvet Support</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.iconCircle}>?</Text>
          <Text style={styles.cardTitle}>Is this a safety issue?</Text>
        </View>
        <Text style={styles.cardSubtitle}>If you're experiencing a safety issue?</Text>
        <Text style={styles.cardSubtitle2}>
          concerning the well-being of a person or a pet in your care —including a lost pet, pet injury or pet illness— please contact the Trust & Safety team.
        </Text>
        <TouchableOpacity style={styles.filledBtn}>
          <Text style={styles.filledBtnText}>Call Velvet Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp('2%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  backBtn: {
    marginRight: 8,
    padding: 4,
  },
  backArrow: {
    fontSize: RFValue(24),
    color: '#222',
    fontWeight: '400',
  },
  headerTitle: {
    marginTop: 10,
    fontFamily: 'Pacifico-Regular',
    fontSize: RFValue(32),
    color: '#222',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: wp('3%'),
    marginBottom: hp('2%'),
    padding: wp('5%'),
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#222',
    color: '#222',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: RFValue(18),
    fontWeight: '600',
    marginRight: 10,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(15),
    color: '#222',
    fontWeight: '700',
  },
  cardSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: '#b3b3b3',
    marginBottom: 12,
    marginLeft: 38,
  },
  cardSubtitle2: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: '#b3b3b3',
    marginBottom: 12,
    marginLeft: 38,
  },
  filledBtn: {
    backgroundColor: '#8F9E73',
    borderRadius: 30,
    paddingVertical: 9,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 4,
  },
  filledBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(13),
    color: '#fff',
  },
  outlineBtn: {
    borderWidth: 2,
    borderColor: '#8F9E73',
    borderRadius: 30,
    paddingVertical: 9,
    alignItems: 'center',
    marginBottom: 4,
  },
  outlineBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(12.5),
    color: '#8F9E73',
  },
});

export default VelvetSupportScreen; 