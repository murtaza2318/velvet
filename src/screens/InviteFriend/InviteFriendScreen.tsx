import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InviteFriendScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite a friend</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Send & earn a $20 referral credit</Text>
        <Text style={styles.subtitle}>
          Invite your friends and family to book a pet sitter on Velvet Leash and you'll both receive $20 in Velvet Credit. There are 2 ways to share.
        </Text>

        <Text style={styles.sectionTitle}>Scan your QR Code in Person</Text>
        <View style={styles.qrCentered}>
          <View style={styles.qrBox}>
            <Text style={styles.qrText}>QR Code here</Text>
          </View>
          <MaterialCommunityIcons name="chevron-down" size={32} color="#b3b3b3" style={{ marginTop: 8 }} />
        </View>

        <Text style={styles.sectionTitle}>Send your referral link</Text>
        <View style={styles.linkRow}>
          <View style={styles.pawCircle}>
            <MaterialCommunityIcons name="paw" size={28} color="#b3b3b3" />
          </View>
          <Text style={styles.linkText}>Link here</Text>
          <MaterialCommunityIcons name="content-copy" size={24} color="#b3b3b3" style={{ marginLeft: 8 }} />
        </View>

        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendBtnText}>Send referral</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Your promo code is only for new Velvet members you recruit through your referral link. Rules and restrictions apply—read our Terms of Service to learn more.
        </Text>
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
    marginTop: 20,
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
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(18),
    color: '#222',
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(15),
    color: '#b3b3b3',
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(16),
    color: '#222',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 8,
  },
  qrCentered: {
    alignItems: 'center',
    marginBottom: 18,
  },
  qrBox: {
    width: 180,
    height: 170,
    backgroundColor: '#8F9E73',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(16),
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 8,
  },
  pawCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  linkText: {
    fontFamily: 'Poppins',
    fontSize: RFValue(14),
    color: '#444',
    flex: 1,
  },
  sendBtn: {
    backgroundColor: '#8F9E73',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(18),
    color: '#fff',
  },
  note: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(13),
    color: '#444',
    marginTop: 8,
  },
});

export default InviteFriendScreen;
