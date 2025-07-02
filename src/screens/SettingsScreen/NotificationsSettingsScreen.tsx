import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Text,
  Linking,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomText } from '../../components/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';

const NotificationsSettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const [toggles, setToggles] = useState({
    email: false,
    marketingEmail: false,
    sms: false,
    smsNew: false,
    smsAll: false,
    smsBooking: false,
    smsDeclined: false,
    mms: false,
    quiet: false,
    marketingSms: false,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSectionPress = (section: string) => {
    if (section === 'notifications') {
      navigation.navigate('NotificationsSettings' as never);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <CustomIcon icon="arrow-back" type="Ionicons" size={RFValue(18)} color={COLORS.TextPrimary} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <CustomText textType="H6SemiBold" color={COLORS.TextPrimary} textStyle={styles.headerTitle}>
            Settings
          </CustomText>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Tabs Row for General/Notifications */}
        <View style={styles.tabsRow}>
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
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <CustomText textType="BodyMediumSemiBold" color={COLORS.TextPrimary} textStyle={styles.sectionHeaderText}>
            Settings
          </CustomText>
        </View>

        {/* Email Section */}
        <CustomText style={styles.sectionTitle}>Email</CustomText>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Send me an email when I get a new message or request</CustomText>
          <Switch value={toggles.email} onValueChange={() => handleToggle('email')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Receive marketing emails from Velvet Leash Co.</CustomText>
          <Switch value={toggles.marketingEmail} onValueChange={() => handleToggle('marketingEmail')} />
        </View>
        <View style={styles.divider} />

        {/* Text/SMS Section */}
        <CustomText style={styles.sectionTitle}>Text/SMS</CustomText>
        <CustomText style={styles.desc}>We recommend keeping these messages on so we can provide you the best service.</CustomText>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Send me a text message when I get a new message or request.</CustomText>
          <Switch value={toggles.sms} onValueChange={() => handleToggle('sms')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>New Inquiries{"\n"}<Text style={styles.subLabel}>Text me when I receive a new message or request.</Text></CustomText>
          <Switch value={toggles.smsNew} onValueChange={() => handleToggle('smsNew')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>New Messages{"\n"}<Text style={styles.subLabel}>Text me all my Velvet Leash Co messages after the initial request.</Text></CustomText>
          <Switch value={toggles.smsAll} onValueChange={() => handleToggle('smsAll')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>New Booking Request{"\n"}<Text style={styles.subLabel}>Text me when I have a new Velvet Leash Co booking request.</Text></CustomText>
          <Switch value={toggles.smsBooking} onValueChange={() => handleToggle('smsBooking')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Booking Declined{"\n"}<Text style={styles.subLabel}>Text me when a new Velvet Leash Co is confirmed.</Text></CustomText>
          <Switch value={toggles.smsDeclined} onValueChange={() => handleToggle('smsDeclined')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>MMS Message Support{"\n"}<Text style={styles.subLabel}>By enabling MMS support, text message can include sound, images, and video.</Text></CustomText>
          <Switch value={toggles.mms} onValueChange={() => handleToggle('mms')} />
        </View>
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Quiet Hours{"\n"}<Text style={styles.subLabel}>Would you like to delay delivery of nighttime text messages until the following morning?</Text></CustomText>
          <Switch value={toggles.quiet} onValueChange={() => handleToggle('quiet')} />
        </View>
        <View style={styles.divider} />
        <View style={styles.rowBetween}>
          <CustomText style={styles.label}>Receive marketing text message from Velvet Leash Co.</CustomText>
          <Switch value={toggles.marketingSms} onValueChange={() => handleToggle('marketingSms')} />
        </View>
        <CustomText style={styles.desc}>
          By enabling mobile notifications, you're saying it's okay for us to send you service-related and promotional text messages, include auto-dialed. You can adjust these settings on this page anytime. Receiving promotional messages is not a condition to use the Velvet Leash Co service. Reply HELP for help and STOP to unsubscribe. Message frequency varies. Message and data rates may apply. For more, see our <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>Terms of Service</Text> and <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>Privacy Statement</Text>.
        </CustomText>
        <TouchableOpacity onPress={() => {}}>
          <CustomText style={styles.deleteLink}>Delete or deactivate your account</CustomText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.StaticWhite },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BorderPrimary,
  },
  backButton: { padding: wp(1) },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerSpacer: { width: RFValue(18) + wp(2) },
  headerTitle: { fontFamily: 'Poppins-SemiBold' },
  scrollContainer: { flex: 1, paddingHorizontal: wp(4) },
  tabsRow: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  tab: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: RFValue(8),
    marginRight: wp(2),
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
  sectionHeader: {
    paddingVertical: hp(2),
    backgroundColor: COLORS.NeutralGrey0,
  },
  sectionHeaderText: {
    fontFamily: 'Poppins-SemiBold',
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
    marginTop: hp(2),
    marginBottom: hp(1),
    color: COLORS.TextPrimary,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(13),
    color: COLORS.TextPrimary,
    flex: 1,
    marginRight: wp(2),
  },
  subLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: COLORS.NeutralGrey60,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(12),
    color: COLORS.NeutralGrey60,
    marginBottom: hp(1),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NeutralGrey10,
    marginVertical: hp(1.5),
  },
  link: {
    color: COLORS.Primary,
    textDecorationLine: 'underline',
  },
  deleteLink: {
    color: COLORS.Primary,
    textDecorationLine: 'underline',
    marginTop: hp(2),
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(13),
  },
});

export default NotificationsSettingsScreen;
