import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS, FONT_POPPINS } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';

const AccountInfoScreen = () => {
  const navigation = useNavigation();
  const handleUpdatesPress = () => {
    navigation.navigate('AccountUpdates' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <CustomIcon icon="idcard" type="AntDesign" size={RFValue(22)} color={COLORS.TextPrimary} style={{ marginRight: 8 }} />
          <Text style={styles.cardHeaderText}>Account info</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cardBody}>
          <View style={styles.avatarCircle}>
            <CustomIcon icon="paw" type="FontAwesome5" size={RFValue(60)} color="#b3b3b3" />
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.nameText}>John Doe</Text>
            <TouchableOpacity onPress={handleUpdatesPress}>
              <Text style={styles.updatesText}>updates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp('6%'),
  },
  card: {
    width: '92%',
    backgroundColor: '#f6f6f7',
    borderRadius: 20,
    marginTop: hp('2%'),
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingBottom: hp('3%'),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    paddingBottom: 10,
  },
  cardHeaderText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: '#dedede',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  avatarCircle: {
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: RFValue(50),
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  infoCol: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
    marginBottom: 6,
  },
  updatesText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(16),
    color: '#6b7fd7',
    textDecorationLine: 'underline',
  },
});

export default AccountInfoScreen; 