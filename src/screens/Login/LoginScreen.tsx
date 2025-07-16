import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // for Expo
import {
  View,
  Text,
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
import { COLORS, FONT_POPPINS } from '../../utils/theme';
import CustomRHFTextInput from '../../components/CustomRHFTextInput';
import { CustomText } from '../../components/CustomText';
import SocialSignupButton from './components/SocialSignupButton';
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
  <Ionicons name="arrow-back" size={28} color="#000000" style={styles.backButton} />
</TouchableOpacity>

          </View>

          <View style={styles.socialButtonsSection}>
            <SocialSignupButton type="apple" onPress={handleAppleSignup} />
            <SocialSignupButton type="facebook" onPress={handleFacebookSignup} />
            <SocialSignupButton type="google" onPress={handleGoogleSignup} />
          </View>

          <CustomText
            textType="BodyLargeSemiBold"
            color={COLORS.TextPrimary}
            center
            textStyle={styles.orText}
          >
            or sign up with email
          </CustomText>

          <View style={styles.formContainer}>
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

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              By signing in or signing up, I agree to the Velvet{' '}
              <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Statement</Text>, consent to receive marketing
              email and messages from Velvet and its affiliates and confirm that I am 18 years of
              age or older.
            </Text>

            <TouchableOpacity style={styles.signInButton} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContent: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: hp(10),
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
    marginLeft: -15,
    paddingLeft: 0,
  },
  backButton: {
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: wp('5%'),
  },
  logo: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
  },
  socialButtonsSection: {
    width: '100%',
    marginTop: hp(2),
    marginBottom: hp(2),
    alignItems: 'center',
  },
  orText: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONT_POPPINS.semiBoldFont,
  },
  formContainer: {
    width: '90%',
    marginTop: hp(8),
    marginBottom: hp(2),
  },
  fieldTitle: {
    fontSize: RFValue(14),
    marginTop: 2,
    marginBottom: -2,
    color: 'black',
    fontFamily: FONT_POPPINS.semiBoldFont,
  },
  fieldSpacing: {
    borderRadius: 40,
    marginTop: hp(0.5),
  },
  roundedInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.NeutralGrey20,
    overflow: 'hidden',
  },
  forgotText: {
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    marginTop: 20,
  },
  termsText: {
    fontSize: 15,
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    width: '90%',
    alignSelf: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#8f9e73',
  },
  signInButton: {
    backgroundColor: '#A3AD87',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 19,
  },
});

export default SignupScreen;
