import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from '../../../components/CustomText';
import { COLORS } from '../../../utils/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TABS = [
  { key: 'earning', label: 'Earning', empty: 'No transaction found' },
  { key: 'pending', label: 'Pending Earnings', empty: 'No pending earnings' },
  { key: 'withdrawals', label: 'Withdrawals', empty: 'No withdrawals' },
  { key: 'payment', label: 'Payment', empty: 'No payments' },
  { key: 'issues', label: 'Payment issues', empty: 'No payment issues' },
  { key: 'other', label: 'Other', empty: 'No other transactions' },
];

const PaymentHistoryTabs = () => {
  const [activeTab, setActiveTab] = useState('earning');
  const activeTabObj = TABS.find(tab => tab.key === activeTab) || TABS[0];

  return (
    <View style={styles.section}>
      <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} style={styles.paymentHistoryTitle}>
        Payment History
      </CustomText>
      <View style={styles.tabsRow}>
        {TABS.slice(0, 4).map(tab => (
          <TouchableOpacity key={tab.key} onPress={() => setActiveTab(tab.key)}>
            <CustomText
              style={[styles.tab, activeTab === tab.key && styles.activeTab]}
              textType="CaptionRegular"
              color={activeTab === tab.key ? COLORS.TextPrimary : COLORS.NeutralGrey40}
            >
              {tab.label}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabsRow2}>
        {TABS.slice(4).map(tab => (
          <TouchableOpacity key={tab.key} onPress={() => setActiveTab(tab.key)}>
            <CustomText
              style={[styles.tab, activeTab === tab.key && styles.activeTab]}
              textType="CaptionRegular"
              color={activeTab === tab.key ? COLORS.TextPrimary : COLORS.NeutralGrey40}
            >
              {tab.label}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.emptyBox}>
        <CustomText textType="CaptionRegular" color={COLORS.NeutralGrey40}>
          {activeTabObj.empty}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: hp(2.5),
  },
  paymentHistoryTitle: {
    marginBottom: hp(1.5),
    fontWeight: '700',
  },
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 2,
    alignItems: 'flex-end',
  },
  tabsRow2: {
    flexDirection: 'row',
    marginBottom: hp(1.5),
    alignItems: 'flex-end',
  },
  tab: {
    marginRight: wp(3),
    color: COLORS.NeutralGrey40,
    fontWeight: '500',
    fontSize: 15,
    paddingBottom: 2,
  },
  activeTab: {
    color: COLORS.TextPrimary,
    fontWeight: '700',
    borderBottomWidth: 3,
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

export default PaymentHistoryTabs; 