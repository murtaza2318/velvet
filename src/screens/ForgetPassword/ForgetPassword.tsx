import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  // Load Pacifico font
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const handleSubmit = () => {
    console.log('Reset link sent to:', email);
  };

  // Show loading screen until fonts are ready
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Ionicons name="close" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot your password?</Text>

      <Text style={styles.subtitle}>
        To rest your password, type the full email address you used to sign up for Velvet Leash and we’ll
        send you an email to walk you through resetting your password.
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#fff',
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Pacifico_400Regular',
    textAlign: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: '#9CAC80',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
