import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';

const darkCardColors = {
  // --- Dark Theme Palette ---
  darkBackground: '#1E1E1E', // Main screen background
  darkCard: '#2C2C2C',       // Card background
  primaryHighlight: '#4A90E2', // Bright blue for buttons/links (Replaced #0047AB)
  mainText: '#F0F0F0',         // White/Light text
  subText: '#888888',          // Placeholder/Subtitles
  white: '#ffffff',
  redDanger: '#B71C1C',
};

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Login Error', 'Please enter both email and password.');
      return;
    }
    Alert.alert('Login Successful', `Welcome back, User! (Email: ${email})`);
    navigation.navigate('MainDashboard');
  };

  return (
    <View style={styles.container}>
      {/* Status bar uses the dark card color for seamless look */}
      <StatusBar backgroundColor={darkCardColors.darkCard} barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header/Title */}
        <Text style={styles.appTitle}>ArogyaLink</Text>
        <Text style={styles.pageTitle}>Sign In</Text>
        <Text style={styles.subtitle}>Welcome back! Please sign in to access your dashboard.</Text>

        <View style={styles.card}>
          
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email / ASHA ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., pooja.sharma@asha.in"
            placeholderTextColor={darkCardColors.subText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            color={darkCardColors.mainText} // Set input text color
          />

          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="••••••••"
            placeholderTextColor={darkCardColors.subText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            color={darkCardColors.mainText} // Set input text color
          />
          
          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => Alert.alert('Navigate', 'Forgot Password Screen')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.divider} />
          
          {/* Sign Up Link */}
          <View style={styles.signUpLinkContainer}>
            <Text style={styles.linkText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.linkButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkCardColors.darkBackground,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: darkCardColors.primaryHighlight,
    marginBottom: 5,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: darkCardColors.mainText,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: darkCardColors.subText,
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: darkCardColors.darkCard,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: darkCardColors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, // Increased shadow visibility on dark background
    shadowRadius: 10,
    elevation: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: darkCardColors.mainText,
    marginBottom: 5,
    marginTop: 10,
  },
  textInput: {
    height: 50,
    borderColor: darkCardColors.subText, // Use subtext color for input border
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: darkCardColors.darkBackground, // Slightly darker input background
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: darkCardColors.primaryHighlight,
    fontSize: 14,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: darkCardColors.primaryHighlight,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: darkCardColors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: darkCardColors.subText,
    marginVertical: 20,
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 14,
    color: darkCardColors.mainText,
  },
  linkButtonText: {
    color: darkCardColors.primaryHighlight,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignIn;
