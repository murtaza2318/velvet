// Exact visual replica of Figma design for YourPetScreen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS, FONT_POPPINS } from '../../utils/theme';

import HeartImage from '../../../assets/icons/heartpet.png';

const YourPetScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>Your Pets</Text></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.insuranceBox}>
          <View style={styles.insuranceTitleRow}>
            <Image
              source={HeartImage}
              style={styles.heartImage}
              resizeMode="contain"
            />
            <Text style={styles.insuranceTitle}>Shop for pet insurance</Text>
          </View>
          <Text style={styles.insuranceDesc}>
            Pet insurance can help reduce vet bills. Compare plans today.
          </Text>
          <TouchableOpacity style={styles.quoteBtn}><Text style={styles.quoteText}>Get a quote</Text></TouchableOpacity>
        </View>

        <View style={styles.petsSection}>
          <Text style={styles.petsTitle}>Pets</Text>
          <TouchableOpacity style={styles.petCard} onPress={() => navigation.navigate('PetDetails' as never)}>
            <View style={styles.petInfo}>
              <View style={styles.petIcon}><CustomIcon icon="paw" type="FontAwesome5" size={RFValue(20)} color="#B3B3A6" /></View>
              <View>
                <Text style={styles.petName}>Kali</Text>
                <Text style={styles.petBreed}>Persian</Text>
                <Text style={styles.petMeta}>12 pounds, 1 years, 2 months old</Text>
              </View>
            </View>
            <CustomIcon icon="chevron-right" type="Feather" size={RFValue(18)} color="#8E8E8E" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.addPetRow} onPress={() => navigation.navigate('PetDetails' as never)}>
            <Text style={styles.addPetText}>Add a Pet</Text>
            <CustomIcon icon="arrow-right" type="Feather" size={RFValue(16)} color="#B3B3A6" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Inbox' as never)}>
          <CustomIcon icon="inbox" type="Feather" size={RFValue(20)} color="#B3B3A6" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SelectService' as never)}>
          <CustomIcon icon="search" type="Feather" size={RFValue(20)} color="#B3B3A6" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <CustomIcon icon="paw" type="FontAwesome5" size={RFValue(20)} color="#8F9E73" />
          <Text style={styles.navTextActive}>Your Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More' as never)}>
          <CustomIcon icon="more-horizontal" type="Feather" size={RFValue(20)} color="#B3B3A6" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAF7' },
  header: { alignItems: 'center', paddingVertical: hp('3%') },
  headerText: {
    fontFamily: FONT_POPPINS.extraBoldFont,
    fontSize: RFValue(22),
    color: '#3C3C3B',
  },
  insuranceBox: {
    margin: wp('5%'),
    padding: wp('5%'),
    backgroundColor: '#EAEAE5',
    borderRadius: RFValue(16),
    alignItems: 'center',
  },
  insuranceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  heartImage: {
    width: wp('6%'),
    height: wp('6%'),
    marginRight: wp('2%'),
  },
  insuranceTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(18),
    color: '#3C3C3B',
  },
  insuranceDesc: {
    fontSize: RFValue(14),
    color: '#B3B3A6',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  quoteBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(25),
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderWidth: 2,
    borderColor: '#D6D2C7',
  },
  quoteText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: '#000000',
  },
  petsSection: { paddingHorizontal: wp('5%'), marginTop: hp('2%') },
  petsTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(17),
    color: '#3C3C3B',
    marginBottom: hp('1.5%'),
  },
  petCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
  },
  petInfo: { flexDirection: 'row', alignItems: 'center' },
  petIcon: {
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: '#E0DED7',
    borderRadius: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
  },
  petName: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: '#3C3C3B',
  },
  petBreed: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#8F9E73',
  },
  petMeta: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(13),
    color: '#8F9E73',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0DED7',
  },
  addPetRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
  },
  addPetText: {
    fontSize: RFValue(15),
    color: '#B3B3A6',
    marginRight: wp('2%'),
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),
    borderTopWidth: 2,
    borderTopColor: '#D6D2C7',
    backgroundColor: '#FAFAF7',
  },
  navItem: { alignItems: 'center' },
  navItemActive: { alignItems: 'center' },
  navText: {
    fontSize: RFValue(13),
    color: '#B3B3A6',
    marginTop: hp('0.5%'),
  },
  navTextActive: {
    fontSize: RFValue(13),
    color: '#8F9E73',
    fontWeight: 'bold',
    marginTop: hp('0.5%'),
  },
});

export default YourPetScreen;
