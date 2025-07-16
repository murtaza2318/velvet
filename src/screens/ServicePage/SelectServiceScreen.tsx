import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  Text,
} from 'react-native';
import { COLORS, SHADOW, FONT_POPPINS } from '../../utils/theme';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomText } from '../../components/CustomText';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const SelectServiceScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  const services = [
    {
      id: '1',
      name: 'Boarding',
      description: "in the sitter's home",
      icon: require('../../../assets/icons/drop_in_visits.png'),
      screen: 'Boarding',
    },
    {
      id: '2',
      name: 'House Sitting',
      description: 'in your home',
      icon: require('../../../assets/icons/house_sitting.png'),
    },
    {
      id: '3',
      name: 'Drop-in Visits',
      description: 'visits in your home',
      icon: require('../../../assets/icons/dog_walking.png'),
    },
    {
      id: '4',
      name: 'Doggy Day Care',
      description: "in the sitter's home",
      icon: require('../../../assets/icons/Sun.png'),
    },
    {
      id: '5',
      name: 'Dog Walking',
      description: 'in your neighborhood',
      icon: require('../../../assets/icons/doggy_day_care.png'),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            Cancel
          </CustomText>
        </TouchableOpacity>

        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} textStyle={styles.headerTitle}>
          Select a Service
        </CustomText>

        <ScrollView
          contentContainerStyle={styles.servicesContainer}
          showsVerticalScrollIndicator={false}
        >
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() =>
                service.screen && navigation.navigate(service.screen as keyof AuthStackNavigationType)
              }
              activeOpacity={0.8}
            >
              <Image source={service.icon} style={styles.serviceIcon} />
              <View>
                <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary}>
                  {service.name}
                </CustomText>
                <CustomText textType="CaptionRegular" color={COLORS.TextPrimary}>
                  {service.description}
                </CustomText>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>

      <Image
        source={require('../../../assets/icons/boarding.png')}
        style={styles.heroimage}
      />

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Inbox')}>
          <CustomIcon icon="inbox" type="Feather" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <CustomIcon icon="search" type="Feather" size={RFValue(20)} color={'#8F9E73'} />
          <Text style={[styles.navText, styles.activeNavText]}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('YourPet')}>
          <CustomIcon icon="heart" type="Feather" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <Text style={styles.navText}>Your Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
          <CustomIcon icon="more-horizontal" type="Feather" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
  },
  headerTitle: {
    textAlign: 'center',
    marginBottom: hp('3%'),
    marginTop: hp('2%'),
  },
  servicesContainer: {
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('20%'),
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.StaticWhite,
    borderRadius: wp('2.5%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    ...SHADOW.medium,
  },
  serviceIcon: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
    marginRight: wp('4%'),
  },
  cancelButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? hp('7%') : hp('5%'),
    left: wp('5%'),
    zIndex: 2,
  },
  heroimage: {
    position: 'absolute',
    bottom: hp('0%'),
    width: wp('100%'),
    height: hp('50%'),
    resizeMode: 'contain',
    zIndex: -1,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLORS.NeutralGrey20,
    paddingVertical: hp('2%'),
    backgroundColor: COLORS.StaticWhite,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: COLORS.NeutralGrey60,
    marginTop: hp('0.5%'),
  },
  activeNavText: {
    color: '#8F9E73',
  },
});

export default SelectServiceScreen;
