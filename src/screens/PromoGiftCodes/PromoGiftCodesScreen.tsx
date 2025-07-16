import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const PromoGiftCodesScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <CustomIcon icon="arrow-left" type="Feather" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Promo/Gift Codes</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        {/* Replace with your illustration asset if available */}
        <CustomIcon icon="gift" type="Feather" size={RFValue(80)} color={COLORS.Primary} />
      </View>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <CustomIcon icon="gift" type="Feather" size={RFValue(20)} color={COLORS.NeutralGrey60} />
        <TextInput
          style={styles.input}
          placeholder="Add promo or gift code"
          placeholderTextColor={COLORS.NeutralGrey60}
          value={code}
          onChangeText={setCode}
        />
        <TouchableOpacity style={styles.applyBtn} disabled={!code.trim()}>
          <Text style={[styles.applyText, { color: code.trim() ? COLORS.Primary : COLORS.NeutralGrey60 }]}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: {
    marginRight: 8,
    padding: 4,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(18),
    color: '#222',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: wp('6%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: RFValue(15),
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  applyBtn: {
    marginLeft: 8,
  },
  applyText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(14),
  },
});

export default PromoGiftCodesScreen; 