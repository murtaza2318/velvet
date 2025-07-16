import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS, FONT_POPPINS } from '../../utils/theme';

const HomeIcon = () => (
  <Svg width={wp('8%')} height={hp('4%')} viewBox="0 0 32 29" fill="none">
    <G clipPath="url(#clip0_185_1476)">
      <Path
        d="M6 13.7587C7.41769 12.6605 8.83539 11.5564 10.2531 10.4523C12.1216 9.00011 13.996 7.54794 15.8586 6.08977C16.0069 5.96976 16.1077 5.96376 16.262 6.08977C17.5432 7.09789 18.8304 8.10001 20.1235 9.09613C20.1769 9.13813 20.2303 9.19814 20.3371 9.22214C20.3371 8.99411 20.3371 8.77209 20.3371 8.55006C20.3371 8.37604 20.3371 8.20802 20.3371 8.034C20.3371 7.91999 20.3845 7.86598 20.5032 7.86598C21.3811 7.86598 22.259 7.86598 23.1369 7.86598C23.303 7.86598 23.3089 7.97399 23.303 8.09401C23.303 8.73008 23.303 9.36616 23.303 10.0022C23.303 10.4523 23.3089 10.9023 23.303 11.3524C23.303 11.5144 23.3564 11.6224 23.4869 11.7184C24.3232 12.3605 25.1478 13.0086 25.9841 13.6507C26.1324 13.7647 26.1324 13.8427 26.0257 13.9807C25.6401 14.4728 25.2605 14.9708 24.8868 15.4749C24.7741 15.6309 24.6969 15.6189 24.5605 15.5109C21.7963 13.3566 19.0262 11.2024 16.2679 9.04812C16.1196 8.93411 16.0306 8.92811 15.8823 9.04812C13.1181 11.2084 10.3539 13.3566 7.58971 15.5169C7.43549 15.6369 7.36431 15.6189 7.2516 15.4689C6.83045 14.9108 6.41522 14.3767 6 13.8367C6 13.8127 6 13.7827 6 13.7587Z"
        fill="#8F9E73"
      />
      <Path
        d="M9.12598 19.3516C9.12598 18.2294 9.12598 17.1133 9.12598 15.9912C9.12598 15.8231 9.17343 15.7091 9.30986 15.6071C11.5046 13.9029 13.6934 12.1987 15.8823 10.4945C16.0246 10.3865 16.1136 10.3865 16.256 10.4945C18.4448 12.2047 20.6336 13.9089 22.8284 15.6131C22.9529 15.7091 23.0063 15.8171 23.0063 15.9792C23.0063 18.2294 23.0063 20.4857 23.0063 22.736C23.0063 23 23.0063 23 22.7453 23C21.1319 23 19.5244 23 17.9109 23C17.6381 23 17.6381 23 17.6381 22.724C17.6381 21.1458 17.6381 19.5676 17.6381 17.9954C17.6381 17.8074 17.5451 17.7134 17.3593 17.7134C16.5644 17.7134 15.7755 17.7134 14.9806 17.7134C14.7908 17.7134 14.7374 17.7734 14.7374 17.9654C14.7434 19.5496 14.7374 21.1338 14.7374 22.718C14.7374 23.012 14.7374 23.012 14.4408 23.012C12.7681 23.012 11.1013 23.012 9.4285 23.012C9.23077 23.012 9.13191 22.91 9.13191 22.706C9.13191 21.5958 9.13191 20.4797 9.13191 19.3696L9.12598 19.3516Z"
        fill="#8F9E73"
      />
    </G>
    <Rect
      x="0.5"
      y="0.5"
      width="31"
      height="28"
      rx="4.5"
      stroke="#A9A59F"
      strokeOpacity="0.49"
    />
    <Defs>
      <ClipPath id="clip0_185_1476">
        <Rect width="20.0909" height="17" fill="white" transform="translate(6 6)" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ContactAmericaScreen = () => {
  const navigation = useNavigation();
  
  // State for all form fields
  const [serviceDays, setServiceDays] = useState('5 Days');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [message, setMessage] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [communicationMethod, setCommunicationMethod] = useState('');
  
  // Modal states
  const [showDaysModal, setShowDaysModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showCommunicationModal, setShowCommunicationModal] = useState(false);
  const [currentTimeField, setCurrentTimeField] = useState('');
  
  // Options for dropdowns
  const daysOptions = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days', '1 Week', '2 Weeks'];
  const timeOptions = ['Morning (8-12 PM)', 'Afternoon (12-6 PM)', 'Evening (6-10 PM)', 'Night (10 PM-8 AM)', 'All Day'];
  const communicationOptions = ['Phone Call', 'Text Message', 'Email', 'Video Call'];

  const handleAddPet = () => {
    navigation.navigate('PetDetails' as never);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendRequest = () => {
    if (!phoneNumber || !message) {
      Alert.alert('Missing Information', 'Please provide your phone number and message.');
      return;
    }
    
    Alert.alert('Request Sent', 'Your request has been sent to America C.!');
  };

  const handleTimeSelection = (time: string) => {
    if (currentTimeField === 'start') {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
    setShowTimeModal(false);
  };

  const renderModal = (
    visible: boolean,
    onClose: () => void,
    title: string,
    options: string[],
    onSelect: (option: string) => void
  ) => (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView style={styles.modalScroll}>
            {options.map((option: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.modalOption}
                onPress={() => {
                  onSelect(option);
                  onClose();
                }}
              >
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.modalCloseText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderTextInputModal = (
    visible: boolean,
    onClose: () => void,
    title: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string
  ) => (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <TextInput
            style={styles.modalTextInput}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            multiline={title === 'Message' || title === 'Special Instructions'}
            numberOfLines={title === 'Message' || title === 'Special Instructions' ? 4 : 1}
          />
          <View style={styles.modalButtonRow}>
            <TouchableOpacity style={styles.modalSaveButton} onPress={onClose}>
              <Text style={styles.modalSaveText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={styles.container}>
          {/* Fixed Header */}
          <View style={styles.headerContainer}>
            <View style={styles.headerShadow} />
            <View style={styles.header}>
              <TouchableOpacity style={styles.arrowLeft} onPress={handleGoBack}>
                <CustomIcon
                  icon="arrow-left"
                  type="Feather"
                  size={RFValue(20)}
                  color={COLORS.TextPrimary}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Contact America C.</Text>
              <TouchableOpacity style={styles.arrowRight}>
                <CustomIcon
                  icon="arrow-right"
                  type="Feather"
                  size={RFValue(20)}
                  color={COLORS.TextPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              {/* Service Section */}
              <Text style={styles.sectionLabel}>Service</Text>
              <View style={styles.serviceRow}>
                <View>
                  <Text style={styles.serviceTitle}>House Sitting</Text>
                  <Text style={styles.serviceSubtitle}>in your home</Text>
                </View>
                <View style={styles.homeIconBox}>
                  <HomeIcon />
                </View>
              </View>

              {/* Schedule Section */}
              <View style={styles.sectionBox}>
                <Text style={styles.sectionTitle}>Schedule</Text>
              </View>

              {/* Service Dates Row */}
              <TouchableOpacity style={styles.rowBox} onPress={() => setShowDaysModal(true)}>
                <Text style={styles.rowLabel}>Service dates</Text>
                <Text style={styles.rowValue}>{serviceDays}</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.rowBox} 
                onPress={() => {
                  setCurrentTimeField('start');
                  setShowTimeModal(true);
                }}
              >
                <Text style={styles.rowLabel}>Start range</Text>
                <Text style={[styles.rowValueLink, startTime && styles.rowValue]}>
                  {startTime || 'Add times'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.rowBox} 
                onPress={() => {
                  setCurrentTimeField('end');
                  setShowTimeModal(true);
                }}
              >
                <Text style={styles.rowLabel}>End range</Text>
                <Text style={[styles.rowValueLink, endTime && styles.rowValue]}>
                  {endTime || 'Add times'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowBox} onPress={handleAddPet}>
                <Text style={styles.rowLabel}>Pet</Text>
                <Text style={styles.rowValueLink}>Add a Pet</Text>
              </TouchableOpacity>

              <View style={styles.rowBox}>
                <Text style={styles.rowLabel}>Contact</Text>
              </View>

              <TouchableOpacity style={styles.rowBox} onPress={() => setShowPhoneModal(true)}>
                <Text style={styles.rowLabel}>Phone number</Text>
                <Text style={[styles.rowValueLink, phoneNumber && styles.rowValue]}>
                  {phoneNumber || 'Tap to add'}
                </Text>
              </TouchableOpacity>

              <View style={styles.rowBox}>
                <Text style={styles.rowLabel}>Text me when America C. replies</Text>
                <Switch
                  value={isSwitchOn}
                  onValueChange={setIsSwitchOn}
                  trackColor={{ false: '#D9D9D9', true: '#8F9E73' }}
                  thumbColor={isSwitchOn ? '#fff' : '#fff'}
                  style={styles.switch}
                />
              </View>

              <View style={styles.rowBox}>
                <Text style={styles.rowLabel}>Message</Text>
              </View>

              <TouchableOpacity style={styles.messageBox} onPress={() => setShowInstructionsModal(true)}>
                <Text style={[styles.messageHint, message && styles.messageText]}>
                  {message || 'Tell America C. a little about your request...'}
                </Text>
              </TouchableOpacity>

              {/* Additional Information Section */}
              <View style={styles.extraContentBox}>
                <Text style={styles.extraContentText}>Additional Information</Text>
              </View>

              <TouchableOpacity style={styles.rowBox} onPress={() => setShowInstructionsModal(true)}>
                <Text style={styles.rowLabel}>Special instructions</Text>
                <Text style={[styles.rowValueLink, specialInstructions && styles.rowValue]}>
                  {specialInstructions || 'Add notes'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowBox} onPress={() => setShowEmergencyModal(true)}>
                <Text style={styles.rowLabel}>Emergency contact</Text>
                <Text style={[styles.rowValueLink, emergencyContact && styles.rowValue]}>
                  {emergencyContact || 'Add contact'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowBox} onPress={() => setShowCommunicationModal(true)}>
                <Text style={styles.rowLabel}>Preferred communication</Text>
                <Text style={[styles.rowValueLink, communicationMethod && styles.rowValue]}>
                  {communicationMethod || 'Select method'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Fixed Send Request Button */}
          <View style={styles.sendButtonWrapper}>
            <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
              <Text style={styles.sendButtonText}>Send Request</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modals */}
        {renderModal(showDaysModal, () => setShowDaysModal(false), 'Select Service Duration', daysOptions, setServiceDays)}
        {renderModal(showTimeModal, () => setShowTimeModal(false), 'Select Time Range', timeOptions, handleTimeSelection)}
        {renderModal(showCommunicationModal, () => setShowCommunicationModal(false), 'Select Communication Method', communicationOptions, setCommunicationMethod)}
        
        {renderTextInputModal(showPhoneModal, () => setShowPhoneModal(false), 'Phone Number', phoneNumber, setPhoneNumber, 'Enter your phone number')}
        {renderTextInputModal(showInstructionsModal, () => setShowInstructionsModal(false), 'Message', message, setMessage, 'Tell America C. about your request...')}
        {renderTextInputModal(showEmergencyModal, () => setShowEmergencyModal(false), 'Emergency Contact', emergencyContact, setEmergencyContact, 'Enter emergency contact details')}

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.StaticWhite,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.StaticWhite,
  },
  headerContainer: {
    position: 'relative',
    zIndex: 10,
  },
  headerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: hp('12%'),
    backgroundColor: COLORS.StaticWhite,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('1%'),
    height: hp('12%'),
    backgroundColor: COLORS.StaticWhite,
    zIndex: 2,
  },
  arrowLeft: {
    width: wp('6%'),
    height: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowRight: {
    width: wp('6%'),
    height: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(16),
    color: COLORS.TextPrimary,
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('10%'), // Add padding for fixed button
  },
  sectionLabel: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginBottom: hp('1%'),
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  serviceTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
  },
  serviceSubtitle: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
  },
  homeIconBox: {
    width: wp('8%'),
    height: hp('4%'),
    borderWidth: 1,
    borderColor: 'rgba(169, 165, 159, 0.49)',
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.StaticWhite,
  },
  sectionBox: {
    backgroundColor: 'rgba(169, 165, 159, 0.1)',
    borderColor: 'rgba(216, 216, 216, 0.76)',
    borderWidth: 1,
    height: hp('5%'),
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
    marginBottom: hp('1%'),
  },
  sectionTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(169, 165, 159, 0.1)',
    borderColor: 'rgba(216, 216, 216, 0.76)',
    borderWidth: 1,
    height: hp('5%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
  },
  rowLabel: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
    flex: 1,
  },
  rowValue: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
  },
  rowValueLink: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
    textDecorationLine: 'underline',
  },
  switch: {
    marginLeft: wp('2%'),
  },
  messageBox: {
    backgroundColor: 'rgba(169, 165, 159, 0.1)',
    borderColor: 'rgba(216, 216, 216, 0.76)',
    borderWidth: 1,
    height: hp('5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  messageHint: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(12),
    color: COLORS.TextPrimary,
    opacity: 0.7,
  },
  messageText: {
    opacity: 1,
  },
  extraContentBox: {
    backgroundColor: 'rgba(169, 165, 159, 0.1)',
    borderColor: 'rgba(216, 216, 216, 0.76)',
    borderWidth: 1,
    height: hp('5%'),
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
    marginBottom: hp('1%'),
  },
  extraContentText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
  },
  sendButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.StaticWhite,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    borderTopWidth: 1,
    borderTopColor: 'rgba(216, 216, 216, 0.3)',
    zIndex: 10,
  },
  sendButton: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: '#8F9E73',
    borderColor: '#A9A59F',
    borderWidth: 1,
    borderRadius: RFValue(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(14),
    color: COLORS.StaticWhite,
    textAlign: 'center',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.StaticWhite,
    borderRadius: RFValue(10),
    padding: wp('5%'),
    width: wp('80%'),
    maxHeight: hp('60%'),
  },
  modalTitle: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(16),
    color: COLORS.TextPrimary,
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  modalScroll: {
    maxHeight: hp('40%'),
  },
  modalOption: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('3%'),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(216, 216, 216, 0.3)',
  },
  modalOptionText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: 'rgba(216, 216, 216, 0.76)',
    borderRadius: RFValue(5),
    padding: wp('3%'),
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginBottom: hp('2%'),
    textAlignVertical: 'top',
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  modalSaveButton: {
    backgroundColor: '#8F9E73',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
    flex: 0.45,
  },
  modalSaveText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(14),
    color: COLORS.StaticWhite,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: 'rgba(216, 216, 216, 0.3)',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: RFValue(5),
    flex: 0.45,
  },
  modalCloseText: {
    fontFamily: FONT_POPPINS.semiBoldFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    textAlign: 'center',
  },
});

export default ContactAmericaScreen;