import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomText } from '../../../components/CustomText';
import { COLORS } from '../../../utils/theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DocumentsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary} style={styles.underlinedHeading}>
          Documents
        </CustomText>
      </View>
      <CustomText textType="CaptionRegular" color={COLORS.TextPrimary}>
        No documents available
      </CustomText>
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
});

export default DocumentsSection; 