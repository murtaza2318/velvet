import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS, FONT_POPPINS } from '../../utils/theme';

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.tabButton, isActive && styles.activeTabButton]}
    onPress={onPress}
  >
    <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const InboxScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Primary');

  const handleMessagePress = () => {
    // Navigate to message detail
    console.log('Navigate to message detail');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <CustomIcon
            icon="bell"
            type="Feather"
            size={RFValue(20)}
            color={COLORS.TextPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TabButton
          title="Primary"
          isActive={activeTab === 'Primary'}
          onPress={() => setActiveTab('Primary')}
        />
        <TabButton
          title="Unread"
          isActive={activeTab === 'Unread'}
          onPress={() => setActiveTab('Unread')}
        />
        <TabButton
          title="pending"
          isActive={activeTab === 'pending'}
          onPress={() => setActiveTab('pending')}
        />
      </View>

      {/* Sort Option */}
      <View style={styles.sortContainer}>
        <CustomIcon
          icon="arrow-down"
          type="Feather"
          size={RFValue(16)}
          color={COLORS.TextPrimary}
        />
        <Text style={styles.sortText}>Sorted by recent activity</Text>
      </View>

      {/* Tab Content */}
      {activeTab === 'Primary' && (
        <View style={styles.emptyStateContainer}>
          <CustomIcon icon="calendar" type="Feather" size={RFValue(120)} color={COLORS.NeutralGrey60} style={{ marginVertical: 32 }} />
          <Text style={styles.emptyTitle}>No conversation</Text>
          <Text style={styles.emptySubtitle}>to help keep you safe always communicate on velvet leash co</Text>
          <TouchableOpacity style={styles.findSitterButton}>
            <Text style={styles.findSitterButtonText}>Find sitter</Text>
          </TouchableOpacity>
        </View>
      )}
      {activeTab === 'Unread' && (
        <View style={styles.emptyStateContainer}>
          <CustomIcon icon="hourglass" type="Feather" size={RFValue(120)} color={COLORS.NeutralGrey60} style={{ marginVertical: 32 }} />
          <Text style={styles.emptyTitle}>No unread conversations</Text>
          <Text style={styles.emptySubtitle}>you have read all the unread conversations{"\n"}in this folder</Text>
        </View>
      )}
      {activeTab === 'pending' && (
        <View style={styles.emptyStateContainer}>
          <CustomIcon icon="hourglass" type="Feather" size={RFValue(120)} color={COLORS.NeutralGrey60} style={{ marginVertical: 32 }} />
          <Text style={styles.emptyTitle}>No pending conversations</Text>
          <Text style={styles.emptySubtitle}>you will find message from request you{"\n"}have not booked yet here.{"\n\n"}To help keep you safe, always{"\n"}communication on rover.</Text>
          <TouchableOpacity style={styles.findSitterButton}>
            <Text style={styles.findSitterButtonText}>Find sitter</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <CustomIcon
            icon="inbox"
            type="Feather"
            size={RFValue(20)}
            color="#8F9E73"
          />
          <Text style={[styles.navText, styles.activeNavText]}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SelectService' as never)}>
          <CustomIcon
            icon="search"
            type="Feather"
            size={RFValue(20)}
            color={COLORS.NeutralGrey60}
          />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('YourPet' as never)}>
          <CustomIcon
            icon="heart"
            type="Feather"
            size={RFValue(20)}
            color={COLORS.NeutralGrey60}
          />
          <Text style={styles.navText}>Your Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More' as never)}>
          <CustomIcon
            icon="more-horizontal"
            type="Feather"
            size={RFValue(20)}
            color={COLORS.NeutralGrey60}
          />
          <Text style={styles.navText}>More</Text>
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
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
  },
  headerTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(24),
    color: COLORS.TextPrimary,
  },
  notificationButton: {
    padding: wp('2%'),
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
  },
  tabButton: {
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1%'),
    borderRadius: RFValue(20),
    marginRight: wp('3%'),
    borderWidth: 1,
    borderColor: COLORS.NeutralGrey40,
  },
  activeTabButton: {
    backgroundColor: '#8F9E73',
    borderColor: '#8F9E73',
  },
  tabButtonText: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(14),
    color: COLORS.NeutralGrey60,
  },
  activeTabButtonText: {
    color: COLORS.StaticWhite,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
  },
  sortText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginLeft: wp('2%'),
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),
  },
  emptyTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  emptySubtitle: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.NeutralGrey60,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  findSitterButton: {
    borderWidth: 2,
    borderColor: '#8F9E73',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: hp('2%'),
  },
  findSitterButtonText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),
    borderTopWidth: 1,
    borderTopColor: COLORS.NeutralGrey20,
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

export default InboxScreen;