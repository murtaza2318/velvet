import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomText } from '../../components/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import { useMoreScreen } from './hooks/useMoreScreen';
import AccountInfoScreen from '../AccountInfo/AccountInfoScreen'; // (for type only, not needed for navigation)
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

const MoreScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();
  const {
    isLoading,
    handleSignIn,
    handleSettings,
    handleBecomeSitter,
    handleHelpCenter,
    handleContactSitter,
    handlePetDetails,
    handleBackPress,
    handleNextPress,
  } = useMoreScreen();

  const MenuButton = ({
    icon,
    title,
    onPress,
  }: {
    icon: string;
    title: React.ReactNode;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <View style={styles.menuButtonContent}>
        <CustomIcon
          icon={icon}
          type="Ionicons"
          size={RFValue(20)}
          color={COLORS.TextPrimary}
          style={styles.menuIcon}
        />
        {typeof title === 'string' ? (
          <CustomText
            textType="BodyLargeRegular"
            color={COLORS.TextPrimary}
            style={styles.menuText}>
            {title}
          </CustomText>
        ) : (
          <View style={styles.menuText}>{title}</View>
        )}
      </View>
      <CustomIcon
        icon="chevron-forward"
        type="Ionicons"
        size={RFValue(15)}
        color={COLORS.NeutralGrey60}
      />
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.StaticWhite} />

      {/* Header */}
      <View style={styles.header}>
        <CustomText
          textType="H5SemiBold"
          color={COLORS.TextPrimary}
          style={styles.headerText}>
          More
        </CustomText>
        <TouchableOpacity onPress={handleNextPress} style={styles.rightIcon}>
          <CustomIcon
            icon="arrow-forward"
            type="Ionicons"
            size={RFValue(20)}
            color={COLORS.TextPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.headerDivider} />

      {/* Content */}
      <View style={styles.content}>
        {/* You Section */}
        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} style={styles.sectionTitle}>
          You
        </CustomText>
        <View style={styles.menuContainer}>
          <MenuButton
            icon="person"
            title="Profile"
            onPress={() => navigation.navigate('AccountInfo' as never)}
          />
          <MenuButton
            icon="heart"
            title="Your pets"
            onPress={handlePetDetails}
          />
          <MenuButton
            icon="card"
            title="Payment"
            onPress={() => navigation.navigate('PaymentScreen' as never)}
          />
          <MenuButton
            icon="settings"
            title="Settings"
            onPress={handleSettings}
          />
          <MenuButton
            icon="heart-outline"
            title="Become a sitter"
            onPress={() => navigation.navigate('BecomeSitter')}
          />
          <MenuButton
            icon="help-circle"
            title="Help Center & Velvet Support"
            onPress={() => navigation.navigate('VelvetSupport')}
          />
        </View>

        {/* Referrals and promos Section */}
        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} style={[styles.sectionTitle, { marginTop: hp(4) }]}>
          Referrals and promos
        </CustomText>
        <View style={styles.menuContainer}>
          <MenuButton
            icon="person-add"
            title={[
              <CustomText key="invite" textType="BodyLargeRegular" color={COLORS.TextPrimary}>Invite a friend</CustomText>,
              <CustomText key="subtitle" textType="CaptionRegular" color={COLORS.NeutralGrey60} style={{ marginTop: 2 }}>
                Earn $20 when they book
              </CustomText>
            ]}
              onPress={() => navigation.navigate('InviteFriend' as never)}
          />
          <MenuButton
            icon="pricetag"
            title="Apply promo codes"
             onPress={() => navigation.navigate('PromoGiftCodesScreen' as never)}
          />
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Inbox' as never)}>
          <CustomIcon icon="chatbubble-outline" type="Ionicons" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <CustomText style={styles.navText}>Inbox</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SelectService' as never)}>
          <CustomIcon icon="search" type="Ionicons" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <CustomText style={styles.navText}>Services</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('YourPet' as never)}>
          <CustomIcon icon="heart-outline" type="Ionicons" size={RFValue(20)} color={COLORS.NeutralGrey60} />
          <CustomText style={styles.navText}>Your Pet</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <CustomIcon icon="ellipsis-horizontal" type="Ionicons" size={RFValue(20)} color={'#8F9E73'} />
          <CustomText style={styles.navTextActive}>More</CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.StaticWhite,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingTop: hp(3), // <-- increase this
    paddingBottom: hp(1.5),
    marginTop: hp(1),  // <-- add this to push it down slightly
  },
  
  headerText: {
    fontFamily: 'Pacifico-Regular',
    fontSize: RFValue(28),
  },
  rightIcon: {
    padding: wp(1.5),
  },
  headerDivider: {
    height: 1,
    backgroundColor: COLORS.NeutralGrey20,
    marginHorizontal: wp(4),
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
  },
  sectionTitle: {
    marginBottom: hp(2.5),
    marginLeft: wp(1),
  },
  menuContainer: {
    gap: hp(0.5),
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.StaticWhite,
    borderRadius: RFValue(8),
  },
  menuButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: wp(4),
  },
  menuText: {
    flex: 1,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(2),
    borderTopWidth: 1,
    borderTopColor: COLORS.NeutralGrey20,
    backgroundColor: COLORS.StaticWhite,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    alignItems: 'center',
  },
  navText: {
    fontSize: RFValue(13),
    color: COLORS.NeutralGrey60,
    marginTop: hp(0.5),
  },
  navTextActive: {
    fontSize: RFValue(13),
    color: '#8F9E73',
    fontWeight: 'bold',
    marginTop: hp(0.5),
  },
});

export default MoreScreen;