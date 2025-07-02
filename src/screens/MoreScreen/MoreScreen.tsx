import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
    icon: any;
    title: React.ReactNode;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <View style={styles.menuButtonContent}>
        <Image source={icon} style={styles.menuIcon} />
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
        icon="chevron-right"
        type="FontAwesome"
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
            icon="arrow-right"
            type="FontAwesome"
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
            icon={require('../../../assets/icons/personIcon.png')}
            title="Profile"
            onPress={() => navigation.navigate('AccountInfo' as never)}
          />
          <MenuButton
            icon={require('../../../assets/icons/heartpet.png')}
            title="Your pets"
            onPress={handlePetDetails}
          />
          <MenuButton
            icon={require('../../../assets/icons/Checkcircle.png')}
            title="Payment"
            onPress={() => {}}
          />
          <MenuButton
            icon={require('../../../assets/icons/settingIcon.png')}
            title="Settings"
            onPress={handleSettings}
          />
          <MenuButton
            icon={require('../../../assets/icons/heartIcon.png')}
            title="Become a sitter"
            onPress={() => navigation.navigate('BecomeSitter')}
          />
          <MenuButton
            icon={require('../../../assets/icons/helpicon.png')}
            title="Help Center & Velvet Support"
            onPress={() => navigation.navigate({ name: 'VelvetSupport' })}
          />
        </View>

        {/* Referrals and promos Section */}
        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} style={[styles.sectionTitle, { marginTop: hp(4) }]}>
          Referrals and promos
        </CustomText>
        <View style={styles.menuContainer}>
          <MenuButton
            icon={require('../../../assets/icons/personIcon.png')}
            title={[
              <CustomText key="invite" textType="BodyLargeRegular" color={COLORS.TextPrimary}>Invite a friend</CustomText>,
              <CustomText key="subtitle" textType="CaptionRegular" color={COLORS.NeutralGrey60} style={{ marginTop: 2 }}>
                Earn $20 when they book
              </CustomText>
            ]}
            onPress={() => navigation.navigate('InviteFriend')}
          />
          <MenuButton
            icon={require('../../../assets/icons/Checkcircle.png')}
            title="Apply promo codes"
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.contactButton, isLoading && styles.contactButtonDisabled]}
          onPress={handleContactSitter}
          disabled={isLoading}>
          <CustomText
            textType="BodyLargeSemiBold"
            color={COLORS.StaticWhite}
            center>
            {isLoading ? 'Loading...' : 'Contact this sitter'}
          </CustomText>
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
    width: RFValue(20),
    height: RFValue(20),
    marginRight: wp(4),
    tintColor: COLORS.TextPrimary,
  },
  menuText: {
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(1),
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: COLORS.Primary,
    paddingVertical: hp(2),
    paddingHorizontal: wp(8),
    borderRadius: RFValue(25),
    width: wp(85),
    marginBottom: hp(2),
  },
  contactButtonDisabled: {
    opacity: 0.6,
  },
});

export default MoreScreen;
