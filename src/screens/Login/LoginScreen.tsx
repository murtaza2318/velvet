import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SocialSignupButton from '../SignUp/components/SocialSignupButton';
import { COLORS } from '../../utils/theme';
import { useSignup } from '../SignUp/hooks/useSignup';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  AuthStackNavigationType,
} from '../../utils/types/NavigationTypes';

const LoginScreen: React.FC = () => {
  const {
    handleFacebookSignup,
    handleGoogleSignup,
    handleAppleSignup,
    isLoading,
  } = useSignup();

  // ✅ Fix: initialize navigation
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  return (
    <View style={styles.container}>
      <SocialSignupButton
        type="apple"
        onPress={handleAppleSignup}
        text="Continue with Apple"
        textColor={COLORS.NeutralGrey0}
        iconColor={COLORS.NeutralGrey0}
      />

      <SocialSignupButton
        type="facebook"
        onPress={handleFacebookSignup}
        text="Continue with Facebook"
        textColor={COLORS.TextPrimary}
        iconColor={COLORS.TextPrimary}
      />

      <SocialSignupButton
        type="google"
        onPress={handleGoogleSignup}
        text="Continue with Google"
        textColor={COLORS.StaticWhite}
        iconColor={COLORS.StaticWhite}
      />

      <Text style={styles.text}>or sign in with email</Text>

      <View style={styles.container2}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="" secureTextEntry />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgetPassword');
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing in or signing up, I agree to the Velvet{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Statement</Text>, consent to
          receive marketing email and messages from Velvet and its affiliates
          and confirm that I am 18 years of age or older.
        </Text>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 65,
  },
  container2: {
    marginTop: 40,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 21,
    margin: 4,
    paddingBottom: 4,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginVertical: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  forgotText: {
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
  },
  termsText: {
    fontSize: 20,
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 28,
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
    width: '100%',
    alignSelf: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 19,
  },
});

export default LoginScreen;
