import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,  // Import ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  // State for loading
  const [error, setError] = useState('');  // State for error message
  const [isEmailValid, setIsEmailValid] = useState(true); // State for email validation

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both email and password are required!');
      return;  // Exit the function if validation fails
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);  // Set email as invalid
      setError('Please enter a valid email address.');
      return;  // Exit the function if email is invalid
    }

    setIsEmailValid(true);  // Set email as valid
    setLoading(true);  // Set loading to true when login starts
    setError('');  // Reset error message

    // Simulate a network request (this is where you would call your API)
    setTimeout(() => {
      setLoading(false);  // Set loading to false when request completes
      navigation.navigate('Main1');
    }, 2000); // 2 seconds delay for demo purpose
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('../assets/images/icon.png')} // Replace with your actual logo path
        resizeMode="contain"
      />

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subtitle}>Please login or sign up to continue our app</Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={"#666"}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {/* Show green tick if valid email, else show red cross */}
          {email && (isEmailValid ? (
            <AntDesign name="checkcircle" size={20} color="green" />
          ) : (
            <AntDesign name="closecircle" size={20} color="red" />
          ))}
        </View>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={"#666"}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {password ? <AntDesign name="checkcircle" size={20} color="green" /> : null}
        </View>
      </View>

      {/* Validation Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />  // Show loader when loading is true
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 60,
    alignSelf: 'center',
    marginBottom: 40,
  },
  welcomeContainer: {
    alignItems: 'left',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 22,
    color: '#333',
    marginBottom: 0,
    paddingLeft: 6,
    fontFamily: "psb",
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    fontFamily: "pr",
    textAlign: 'left',
    paddingLeft: 6,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: -6,
    color: '#333',
    paddingLeft: 6,
    fontFamily: "psb",
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 0,
    borderWidth: 0,
    borderBottomColor: 3,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  loginButton: {
    backgroundColor: '#F58731',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: "psb",
    color: '#fff',
    textAlignVertical: "center",
    marginTop: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'pr',
  },
});

export default LoginScreen;
