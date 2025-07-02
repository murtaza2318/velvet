// AccountUpdatesScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomIcon } from '../../components/CustomIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONT_POPPINS } from '../../utils/theme';
import CountryPicker from '@realtril/react-native-country-picker-modal';
// @ts-ignore


const TABS = [
  { key: 'basic', label: 'Basic info' },
  { key: 'phone', label: 'Phone Numbers' },
  { key: 'payment', label: 'Payment Method' },
];

const AccountUpdatesScreen = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [showAddCard, setShowAddCard] = useState(true);
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withCallingCodeButton, setWithCallingCodeButton] = useState(true);
  const [phone, setPhone] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyName, setEmergencyName] = useState('');

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <CustomIcon icon="close" type="AntDesign" size={RFValue(24)} color={COLORS.TextPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profiles</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <CustomIcon icon="reload1" type="AntDesign" size={RFValue(22)} color={COLORS.TextPrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.tabActive]}
            onPress={() => setActiveTab(tab.key)}>
            <Text style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'basic' && (
          <View style={styles.tabPanel}>
            <Text style={styles.title}>Let's start with the basics</Text>
            <Text style={styles.inputLabel}>Add your address</Text>
            <Text style={styles.inputLabel}>Address Line 1</Text>
            <TextInput style={styles.input} placeholder="" />
            <Text style={styles.inputLabel}>Address Line 2</Text>
            <TextInput style={styles.input} placeholder="" />
            <Text style={styles.inputLabel}>City</Text>
            <TextInput style={styles.input} placeholder="" />
            <Text style={styles.inputLabel}>State or province</Text>
            <TextInput style={styles.input} placeholder="" />
            <Text style={styles.inputLabel}>Zip/postal/postcode</Text>
            <TextInput style={styles.input} placeholder="74000" />
            <Text style={styles.inputLabel}>Country</Text>
            <TextInput style={styles.input} placeholder="United States" />
            <Text style={styles.inputLabel}>Profile Photo</Text>
            <View style={styles.profilePhotoRow}>
              <View style={styles.profilePhotoTextCol}>
                <Text style={styles.profilePhotoDesc}>
                  This is the first photo pet sitter will see.{"\n"}
                  We recommend using a well-lit, clear photo of your face{"\n"}
                  (without sunglasses)
                </Text>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>upload your photo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pawIconCircle}>
                
              <MaterialCommunityIcons name="paw" size={60} color="black" />
              </View>
            </View>
            <Text style={styles.inputLabel}>Add Your email address</Text>
            <TouchableOpacity>
              <Text style={styles.changeEmail}>Change Email</Text>
            </TouchableOpacity>
            <Text style={styles.inputLabel}>Age verification</Text>
            <Text style={styles.ageDesc}>we use this to conduct background checks when signing up to be a sitter. We won't share or display this on your profile.</Text>
            <TouchableOpacity style={styles.addBirthdayButton}>
              <Text style={styles.addBirthdayButtonText}>Add birthday</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save and Continue</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'phone' && (
          <View style={styles.tabPanel}>
            <Text style={styles.phoneTitle}>Add your phone number</Text>
            <Text style={styles.inputLabel}>Mobile phone number</Text>
            <View style={styles.inputWithFlagRow}>
              <CountryPicker
                withFilter
                withFlag
                withCallingCode
                withCallingCodeButton
                withAlphaFilter
                countryCode={countryCode as any}
                onSelect={onSelect}
                containerButtonStyle={styles.countryPicker}
              />
              <TextInput
                style={styles.inputWithFlag}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
      


            <Text style={styles.inputLabel}>Emergency contact name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={emergencyName}
              onChangeText={setEmergencyName}
            />

            <Text style={styles.inputLabel}>Emergency contact number</Text>
            <View style={styles.inputWithFlagRow}>
              <CountryPicker
                withFilter
                withFlag
                withCallingCode
                withCallingCodeButton
                withAlphaFilter
                countryCode={countryCode as any}
                onSelect={onSelect}
                containerButtonStyle={styles.countryPicker}
              />
              <TextInput
                style={styles.inputWithFlag}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={emergencyPhone}
                onChangeText={setEmergencyPhone}
              />
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'payment' && (
          <View style={styles.tabPanel}>
            <Text style={styles.title}>Your Payment Methods</Text>
            <Text style={styles.paymentDesc}>
              Select your default method for payments on velvet. Velvet Leash co accepts all major credit and debit card.
            </Text>

            <View style={styles.cardForm}>
              <Text style={styles.inputLabel}>Name on card</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Name on card" 
                placeholderTextColor="#999"
              />

              <Text style={styles.inputLabel}>Card Number</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Card Number" 
                keyboardType="number-pad"
                placeholderTextColor="#999"
              />

              <View style={styles.rowInputs}>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.inputLabel}>Expiration</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder="MM/YY"
                    placeholderTextColor="#999"
                  />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.inputLabel}>CVC</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder="CVC" 
                    keyboardType="number-pad"
                    placeholderTextColor="#999"
                  />
                </View>
              </View>

              <Text style={styles.inputLabel}>Address Line 1</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Address Line 1"
                placeholderTextColor="#999"
              />

              <Text style={styles.inputLabel}>Address Line 2</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Address Line 2"
                placeholderTextColor="#999"
              />

              <Text style={styles.inputLabel}>City/Town/District</Text>
              <TextInput 
                style={styles.input} 
                placeholder="City"
                placeholderTextColor="#999"
              />

              <Text style={styles.inputLabel}>Zip/Postal Code</Text>
              <TextInput 
                style={styles.input} 
                placeholder="7400"
                placeholderTextColor="#999"
              />

              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  headerIcon: { 
    padding: 6 
  },
  headerTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('-10%'),
    paddingBottom: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    fontSize: 2,
    marginRight: wp('0%'),
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.TextPrimary,
  },
  tabText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(13),
    color: '#999',
  },
  tabTextActive: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    color: COLORS.TextPrimary,
  },
  scrollContent: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
    paddingBottom: hp('5%'),
  },
  tabPanel: {
    flex: 1,
  },
  title: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(24),
    color: COLORS.TextPrimary,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  paymentDesc: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp('4%'),
    lineHeight: RFValue(20),
  },
  inputLabel: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: COLORS.TextPrimary,
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 25,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    fontSize: RFValue(16),
    backgroundColor: '#fff',
    color: COLORS.TextPrimary,
    fontFamily: FONT_POPPINS.regularFont,
  },
  saveButton: {
    backgroundColor: '#8F9E73',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: '#fff',
  },
  inputWithFlagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  countryPicker: {
    marginRight: 8,
  },
  inputWithFlag: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 25,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    fontSize: RFValue(16),
    backgroundColor: '#fff',
    color: COLORS.TextPrimary,
    fontFamily: FONT_POPPINS.regularFont,
  },
  phoneTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  cardForm: {
    marginTop: 0,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('4%'),
  },
  halfInputContainer: {
    flex: 1,
  },
  profilePhotoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  profilePhotoTextCol: {
    flex: 1,
  },
  profilePhotoDesc: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  uploadButton: {
    backgroundColor: '#8F9E73',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  uploadButtonText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: '#fff',
  },
  pawIconCircle: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    padding: 8,
    marginLeft: 8,
  },
  pawIcon: {
    fontSize: RFValue(24),
    color: '#D9D9D9',
  },
  changeEmail: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(16),
    color: '#8F9E73',
  },
  addBirthdayButton: {
    borderWidth: 2,
    borderColor: '#8F9E73',
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  addBirthdayButtonText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: '#8F9E73',
  },
  ageDesc: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp('4%'),
    lineHeight: RFValue(20),
  },
});

export default AccountUpdatesScreen;