import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../utils/theme';
import { CustomText } from '../../components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import WalletSection from './components/WalletSection';
import EarningSummarySection from './components/EarningSummarySection';
import ExternalWithdrawalSection from './components/ExternalWithdrawalSection';
import DocumentsSection from './components/DocumentsSection';
import PaymentHistoryTabs from './components/PaymentHistoryTabs';
import { CustomIcon } from '../../components/CustomIcon';

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <CustomIcon icon="arrow-left" type="Feather" size={22} color={COLORS.TextPrimary} />
        </TouchableOpacity>
        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} style={styles.headerTitle}>
          Payment History
        </CustomText>
        <View style={{ width: 40 }} />
      </View>
      <View style={styles.divider} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <WalletSection />
        <EarningSummarySection />
        <ExternalWithdrawalSection />
        <DocumentsSection />
        <PaymentHistoryTabs />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.StaticWhite,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(1.5),
    marginTop: hp(1),
    backgroundColor: COLORS.StaticWhite,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  headerTitle: {
    fontSize: RFValue(18),
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  divider: {
    height: 2,
    backgroundColor: COLORS.NeutralGrey20,
    marginBottom: hp(2),
  },
  scrollContent: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(4),
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  promoCode: {
    color: '#8CA08C',
    marginBottom: hp(1.5),
    textDecorationLine: 'underline',
  },
  addPaymentBtn: {
    borderWidth: 2,
    borderColor: COLORS.NeutralGrey40,
    borderRadius: 20,
    paddingVertical: hp(1),
    alignItems: 'center',
    marginBottom: hp(2.5),
  },
  section: {
    marginBottom: hp(2.5),
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 2,
  },
  moreInfo: {
    color: '#8CA08C',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  paymentHistoryTitle: {
    marginBottom: hp(1.5),
  },
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  tabsRow2: {
    flexDirection: 'row',
    marginBottom: hp(1.5),
  },
  tab: {
    marginRight: wp(3),
    color: COLORS.NeutralGrey40,
  },
  activeTab: {
    color: COLORS.TextPrimary,
    borderBottomWidth: 2,
    borderBottomColor: '#8CA08C',
    paddingBottom: 2,
  },
  emptyBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.NeutralGrey20,
    borderRadius: 8,
    paddingVertical: hp(4),
    alignItems: 'center',
    marginTop: hp(1),
  },
});

export default PaymentScreen; 