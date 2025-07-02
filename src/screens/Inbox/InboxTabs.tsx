import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomText } from '../../components/CustomText';
import { COLORS } from '../../utils/theme';

const InboxTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'one' | 'two' | 'three'>('one');

  return (
    <View>
      {/* Tabs Row */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'one' && styles.tabActive]}
          onPress={() => setActiveTab('one')}
        >
          <CustomText style={[styles.tabText, activeTab === 'one' && styles.tabTextActive]}>Tab One</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'two' && styles.tabActive]}
          onPress={() => setActiveTab('two')}
        >
          <CustomText style={[styles.tabText, activeTab === 'two' && styles.tabTextActive]}>Tab Two</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'three' && styles.tabActive]}
          onPress={() => setActiveTab('three')}
        >
          <CustomText style={[styles.tabText, activeTab === 'three' && styles.tabTextActive]}>Tab Three</CustomText>
        </TouchableOpacity>
      </View>
      {/* Tab Content */}
      <View style={styles.tabContent}>
        {activeTab === 'one' && <CustomText>Content for Tab One</CustomText>}
        {activeTab === 'two' && <CustomText>Content for Tab Two</CustomText>}
        {activeTab === 'three' && <CustomText>Content for Tab Three</CustomText>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: COLORS.NeutralGrey10,
    marginHorizontal: 4,
  },
  tabActive: {
    backgroundColor: COLORS.Primary,
  },
  tabText: {
    color: COLORS.TextPrimary,
    fontFamily: 'Poppins-Regular',
  },
  tabTextActive: {
    color: COLORS.StaticWhite,
    fontFamily: 'Poppins-SemiBold',
  },
  tabContent: {
    alignItems: 'center',
    marginTop: 24,
  },
});

export default InboxTabs; 