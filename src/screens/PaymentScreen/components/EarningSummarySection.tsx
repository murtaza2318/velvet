import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomText } from '../../../components/CustomText';
import { COLORS } from '../../../utils/theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const EarningSummarySection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary} style={styles.underlinedHeading}>
          Earning
        </CustomText>
        <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary} style={[styles.headingNormal,styles.summary]}>
          &nbsp;Summary
        </CustomText>
      </View>
      <CustomText textType="CaptionRegular" color={COLORS.TextPrimary}>
        you haven’t made any withdrawals yet
      </CustomText>
      <TouchableOpacity>
        <CustomText style={styles.moreInfo} textType="CaptionRegular" color="#8CA08C">More info......</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: hp(2.5),
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 2,
  },
  underlinedHeading: {
    fontWeight: '700',
    borderBottomWidth: 3,
    borderBottomColor: '#8CA08C',
    paddingBottom: 1,
  },
  headingNormal: {
    fontWeight: '700',
  },
  moreInfo: {
    color: '#8CA08C',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  summary:{
    paddingBottom:3
  }
});

export default EarningSummarySection; 