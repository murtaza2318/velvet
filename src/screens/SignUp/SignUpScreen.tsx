import React from 'react';
import {
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useSignup } from './hooks/useSignup';
import { COLORS } from '../../utils/theme';
import { FONT_POPPINS } from '../../utils/theme';
import CustomRHFTextInput from '../../components/CustomRHFTextInput';
import { CustomText } from '../../components/CustomText';
import SocialSignupButton from '../Login/components/SocialSignupButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

const { width } = Dimensions.get('window');

const SignupScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    handleSignup,
    isLoading,
    validationRules,
    handleFacebookSignup,
    handleGoogleSignup,
    handleAppleSignup,
  } = useSignup();

  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  const onSubmit = (data: any) => {
    console.log('Form Data Submitted: ', data);
    navigation.navigate('Boarding');
  };

  // const handleCancel = () => {
  //   navigation.navigate('SignIn');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={[styles.scrollContent, { paddingBottom: hp(10) }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../assets/images/logo.png')}
                style={styles.logo}
              />
            </View>
            {/* <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <CustomText textType="BodyLargeSemiBold" color={COLORS.NeutralGrey100}>
                Cancel
              </CustomText>
            </TouchableOpacity> */}
          </View>

          {/* Social Signup Buttons */}
          <View style={styles.socialButtonsSection}>
            <SocialSignupButton
              type="apple"
              onPress={handleAppleSignup}
            />
            <SocialSignupButton
              type="facebook"
              onPress={handleFacebookSignup}
            />
            <SocialSignupButton
              type="google"
              onPress={handleGoogleSignup}
            />
          </View>

          {/* Or sign up with email */}
          <CustomText
            textType="BodyLargeSemiBold"
            color={COLORS.TextPrimary}
            center
            textStyle={styles.orText}
          >
            or sign up with email
          </CustomText>

          {/* Form */}
          <View style={styles.formContainer}>
            <CustomRHFTextInput
              control={control}
              name="firstName"
              rules={validationRules.firstName}
              title="First Name"
              placeholder="e.g Alex"
              type="standard"
              autoCapitalize="words"
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
            <CustomRHFTextInput
              control={control}
              name="lastName"
              rules={validationRules.lastName}
              title="Last Name"
              placeholder="e.g John"
              type="standard"
              autoCapitalize="words"
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
            <CustomRHFTextInput
              control={control}
              name="zipCode"
              rules={validationRules.zipCode}
              title="Zip Code"
              placeholder=""
              type="standard"
              keyboardType="numeric"
              maxLength={10}
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
            <CustomRHFTextInput
              control={control}
              name="email"
              rules={validationRules.email}
              title="Email"
              placeholder=""
              type="standard"
              keyboardType="email-address"
              autoCapitalize="none"
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
            <CustomRHFTextInput
              control={control}
              name="password"
              rules={validationRules.password}
              title="Password"
              placeholder=""
              type="standard"
              secureTextEntry
              autoCapitalize="none"
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
            <CustomRHFTextInput
              control={control}
              name="howDidYouHear"
              rules={validationRules.howDidYouHear}
              title="How did you hear about us?"
              placeholder=""
              type="standard"
              multiline
              numberOfLines={2}
              titleTextStyle={styles.fieldTitle}
              containerStyle={[styles.fieldSpacing, styles.roundedInput]}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={[styles.saveButton, isLoading && { opacity: 0.6 }]}
            onPress={handleSubmit(handleSignup)}
            disabled={isLoading}
          >
            <CustomText
              textType="BodyLargeSemiBold"
              color={COLORS.StaticWhite}
              textStyle={styles.saveButtonText}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </CustomText>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContent: {
    // paddingHorizontal: wp(1), // keep this commented or removed
    paddingBottom: hp(2), // already reduced
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(4),
    paddingBottom: hp(2),
    height: hp(10),
    width: '100%',
  },
  logoContainer: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: -15, // ensure no left margin
    paddingLeft: 0, // ensure no left padding
  },
  logo: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
    alignSelf: 'flex-start', // ensure logo aligns to the left
    marginLeft: 0, // ensure no left margin
    paddingLeft: 0, // ensure no left padding
  },
  // cancelButton: {
  //   paddingVertical: RFValue(2),
  //   paddingHorizontal: RFValue(10),
  // },
  socialButtonsSection: {
    width: '100%',
    marginTop: hp(2),
    marginBottom: hp(2),
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  fieldTitle: {
    fontSize: RFValue(14),
    marginTop:2,
    marginBottom:-2,
    color:'black',
    fontFamily: FONT_POPPINS.semiBoldFont,
  },
  fieldSpacing: {
    borderRadius:40,
    marginTop: hp(0.5),
  },
  roundedInput: {
  borderRadius: 12,
  borderWidth: 1,
  borderColor: COLORS.NeutralGrey20, // Optional: control border color
  overflow: 'hidden',
},
  saveButton: {
    backgroundColor: '#8F9E73',
    borderRadius: 28,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    
    width: '100%',
    alignSelf: 'center',
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: FONT_POPPINS.semiBoldFont,
  },
  orText: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONT_POPPINS.semiBoldFont,
  },
});

export default SignupScreen;
