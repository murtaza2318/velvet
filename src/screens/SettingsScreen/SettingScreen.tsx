import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomText } from '../../components/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import useSettings from './hooks/useSettings';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

interface SettingItemProps {
  title: string;
  onPress: () => void;
}

interface SectionHeaderProps {
  title: string;
}

const SettingsScreen: React.FC = () => {
  const { handleSectionPress, handleBackPress } = useSettings();
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  const SettingItem: React.FC<SettingItemProps> = ({ title, onPress }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.settingItemContent}>
        <CustomText
          textType="BodyLargeRegular"
          color={COLORS.TextPrimary}
          textStyle={styles.settingItemText}>
          {title}
        </CustomText>

        <CustomIcon
          icon="chevron-right"
          type="FontAwesome"
          size={RFValue(16)}
          color={COLORS.NeutralGrey60}
        />
      </View>
    </TouchableOpacity>
  );

  const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <View style={styles.sectionHeader}>
      <CustomText
        textType="BodyMediumSemiBold"
        color={COLORS.TextPrimary}
        textStyle={styles.sectionHeaderText}>
        {title}
      </CustomText>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <CustomIcon
            icon="arrow-back"
            type="Ionicons"
            size={RFValue(18)}
            color={COLORS.TextPrimary}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <CustomText
            textType="H6SemiBold"
            color={COLORS.TextPrimary}
            textStyle={styles.headerTitle}>
            Settings
          </CustomText>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Tabs Row for General/Notifications */}
        {/* <View style={styles.tabsRow}>
          <View style={[styles.tab, styles.tabActive]}>
            <CustomText textType="BodyMediumSemiBold" color={COLORS.TextPrimary} textStyle={styles.tabTextActive}>
              General
            </CustomText>
          </View>
          <TouchableOpacity style={styles.tab} onPress={() => handleSectionPress('notifications')}>
            <CustomText textType="BodyMediumSemiBold" color={COLORS.NeutralGrey60} textStyle={styles.tabText}>
              Notifications
            </CustomText>
          </TouchableOpacity>
        </View> */}
         <CustomText 
              textType="H6SemiBold" 
              color={COLORS.TextPrimary} 
              textStyle={styles.sectionTitle}
            >
              General
            </CustomText>

        {/* General Section */}
        <SettingItem title="Account Settings" onPress={() => handleSectionPress('account')} />
        <SettingItem title="Notification Settings" onPress={() => handleSectionPress('notificationSettings')} />
        <SettingItem title="Your privacy choices" onPress={() => handleSectionPress('privacy')} />
        <SettingItem title="Log out" onPress={() => handleSectionPress('logout')} />

        {/* About Section */}
        <SectionHeader title="About" />
        <SettingItem title="Privacy Policy" onPress={() => handleSectionPress('privacyPolicy')} />
        <SettingItem title="Acknowledgments" onPress={() => handleSectionPress('acknowledgments')} />
        <SettingItem title="Terms of Service" onPress={() => handleSectionPress('terms')} />
        <SettingItem title="Digital Services Act" onPress={() => handleSectionPress('digitalServices')} />
      </ScrollView>
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
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BorderPrimary,
  },
  backButton: {
    padding: wp(1),

    
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerSpacer: {
    width: RFValue(18) + wp(2), // same width as backButton space
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('3%'),
  },
  scrollContainer: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: COLORS.NeutralGrey0,
  },
  sectionHeaderText: {
    fontFamily: 'Poppins-SemiBold',
  },
    sectionTitle: {
    fontSize: RFValue(16), 
    fontWeight: '600',
    marginBottom: hp('1.5%'), 
    marginTop: hp('2%'),
    marginLeft: wp('4%'),
  },
  settingItem: {
    backgroundColor: COLORS.StaticWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NeutralGrey10,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  settingItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingItemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(10),
  },
  tabsRow: {
    flexDirection: 'row',
    padding: wp(4),
  },
  tab: {
    padding: wp(2),
  },
  tabActive: {
    backgroundColor: COLORS.NeutralGrey10,
  },
  tabTextActive: {
    fontFamily: 'Poppins-SemiBold',
  },
  tabText: {
    fontFamily: 'Poppins-Regular',
  },
});

export default SettingsScreen;
