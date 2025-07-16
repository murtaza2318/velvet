import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomText } from '../../../components/CustomText';
import { COLORS } from '../../../utils/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WalletSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: hp(2.5) }}>
      <View style={styles.walletRow}>
        <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary} style={styles.walletLabel}>Wallet</CustomText>
        <TouchableOpacity onPress={() => navigation.navigate('Promo' as never)}>
          <CustomText style={styles.walletAmount} textType="BodyLargeSemiBold" color="#223344">$0.00</CustomText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.promoBtn} onPress={() => navigation.navigate('Promo' as never)}>
        <CustomText style={styles.promoCode} textType="CaptionRegular" color="#8CA08C">Apply Promo Code</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addPaymentBtn}>
        <CustomText textType="BodyLargeRegular" color={COLORS.TextPrimary} center>
          Add or Modify a Payment Method
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  walletLabel: {
    fontWeight: '700',
  },
  walletAmount: {
    color: '#223344',
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: '#223344',
    fontSize: 18,
  },
  promoBtn: {
    alignSelf: 'flex-start',
    marginBottom: hp(1.2),
  },
  promoCode: {
    color: '#8CA08C',
    textDecorationLine: 'underline',
    textDecorationColor: '#8CA08C',
    fontWeight: '400',
    fontSize: 14,
  },
  addPaymentBtn: {
    borderWidth: 2,
    borderColor: '#D6D2C4',
    borderRadius: 20,
    paddingVertical: hp(0.1),
    alignItems: 'center',
    marginTop:hp(2),
    marginBottom: hp(2.5),
    backgroundColor: '#fff',
  },
});

export default WalletSection; 