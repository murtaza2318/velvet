import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import ProfileHeader from './components/ProfileHeader';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HomeDetails from './components/HomeDetails';
import LocationMap from './components/LocationMap';
import ServicesSection from './components/ServicesSection';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const { profileId } = (route.params || {}) as { profileId?: string };

  const [activeTab, setActiveTab] = useState<'Info' | 'Reviews' | 'Services'>('Info');

  return (
    <SafeAreaView style={styles.screenBg}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBtn}>
          <Text style={styles.headerArrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectService')}
          style={styles.arrowBtn}
        >
          <Text style={styles.headerArrow}>&gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollCardContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <ProfileHeader />

            {/* Tabs */}
            <View style={styles.tabBar}>
              {(['Info', 'Reviews', 'Services'] as const).map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Tab Content */}
            <View style={styles.tabContent}>
              {activeTab === 'Info' && (
                <View>
                  <View style={styles.starSitterInfoSection}>
                    <Text style={styles.starSitterInfoTitle}>America C. has Star Sitter status</Text>
                    <Text style={styles.starSitterInfoDescription}>
                      The Star Sitter program highlights responsive sitters who make it easier for pet
                      parents to find the best care for their pets.
                    </Text>
                  </View>
                  <AboutSection />
                  <SkillsSection />
                  <HomeDetails />
                  <LocationMap />

                  <View style={styles.contactBtnWrapper}>
                    <TouchableOpacity
                      style={styles.contactBtn}
                      onPress={() => navigation.navigate('ContactAmerica')}
                    >
                      <Text style={styles.contactBtnText}>Contact this sitter</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {activeTab === 'Reviews' && (
                <View style={styles.reviewsContainer}>
                  {/* Review 1 */}
                  <View style={styles.reviewItem}>
                    <View style={styles.reviewAvatar}>
                      <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                        style={styles.avatarImage}
                      />
                    </View>
                    <View style={styles.reviewContent}>
                      <Text style={styles.reviewName}>Dejante G.</Text>
                      <Text style={styles.reviewDate}>June 23, 2025</Text>
                      <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedText}>VERIFIED STAY</Text>
                      </View>
                      <Text style={styles.reviewText}>
                        America C was PHENOMENAL. She took the extra time needed to really tend to the needs of our pup and sent updates and picture along every step of the way. Couldn't have asked for a better experience!
                      </Text>
                    </View>
                  </View>

                  {/* Review 2 */}
                  <View style={styles.reviewItem}>
                    <View style={styles.reviewAvatar}>
                      <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }}
                        style={styles.avatarImage}
                      />
                    </View>
                    <View style={styles.reviewContent}>
                      <Text style={styles.reviewName}>Lorri W.</Text>
                      <Text style={styles.reviewText}>
                        Becky took great care of Oliver!!! This was the save
                      </Text>
                    </View>
                  </View>
                  <View style={styles.reviewItem}>
                    <View style={styles.reviewAvatar}>
                      <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                        style={styles.avatarImage}
                      />
                    </View>
                    <View style={styles.reviewContent}>
                      <Text style={styles.reviewName}>Dejante G.</Text>
                      <Text style={styles.reviewDate}>June 23, 2025</Text>
                      <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedText}>VERIFIED STAY</Text>
                      </View>
                      <Text style={styles.reviewText}>
                        America C was PHENOMENAL. She took the extra time needed to really tend to the needs of our pup and sent updates and picture along every step of the way. Couldn't have asked for a better experience!
                      </Text>
                    </View>
                    
                  </View>
                  <View style={styles.reviewItem}>
                    <View style={styles.reviewAvatar}>
                      <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }}
                        style={styles.avatarImage}
                      />
                    </View>
                    <View style={styles.reviewContent}>
                      <Text style={styles.reviewName}>Lorri W.</Text>
                      <Text style={styles.reviewText}>
                        Becky took great care of Oliver!!! This was the save
                      </Text>
                    </View>
                  </View>


                  <View style={{ height: 80 }} />
                </View>
              )}

              {activeTab === 'Services' && <ServicesSection />}
            </View>
          </View>
        </ScrollView>

        {activeTab === 'Reviews' && (
          <View style={styles.stickyContactBtnWrapper}>
            <TouchableOpacity
              style={styles.contactBtn}
              onPress={() => navigation.navigate('ContactAmerica')}
            >
              <Text style={styles.contactBtnText}>Contact this sitter</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenBg: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    position: 'relative',
    flex: 1,
  },
  topHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  arrowBtn: {
    padding: 4,
  },
  headerArrow: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    flex: 1,
  },
  scrollCardContent: {
    flexGrow: 1,
    minHeight: SCREEN_HEIGHT,
    paddingBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: {
    borderBottomColor: '#73865C',
    backgroundColor: '#F7F8F9',
  },
  tabText: {
    color: '#888',
    fontSize: 15,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#222',
    fontWeight: 'bold',
  },
  tabContent: {
    backgroundColor: '#fff',
    width: '100%',
    paddingBottom: 16,
  },
  starSitterInfoSection: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  starSitterInfoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#222',
  },
  starSitterInfoDescription: {
    marginTop: 4,
    color: '#555',
    fontSize: 14,
  },
  contactBtnWrapper: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  stickyContactBtnWrapper: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  contactBtn: {
    backgroundColor: '#A6B48A',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  contactBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    padding: 16,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    width: '100%',
  },
  reviewAvatar: {
    marginRight: 12,
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  reviewContent: {
    flex: 1,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
  },
  reviewDate: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 2,
  },
  verifiedBadge: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
    marginBottom: 6,
  },
  verifiedText: {
    color: '#888',
    fontSize: 12,
    fontWeight: 'bold',
  },
  reviewText: {
    color: '#444',
    fontSize: 15,
    lineHeight: 22,
  },
});

export default ProfileScreen;
