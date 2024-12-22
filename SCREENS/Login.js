import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // if (!email || !password) {
    //   Alert.alert('Error', 'Please enter your email and password.');
    // } else {
    //   Alert.alert('Success', 'You are logged in!');
    // }

    navigation.navigate("Main1")
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
          {email ? <AntDesign name="checkcircle" size={20} color="green" /> : null}
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

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
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
    // fontFamily: 'popins',
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
    // fontWeight: 'bold',
    color: '#333',
    marginBottom: 0,
    paddingLeft  :6,
    fontFamily : "psb"

  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    fontFamily : "pr",
    textAlign: 'left',
    paddingLeft : 6
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: -6,
    color: '#333',
    paddingLeft : 6,
    fontFamily : "psb"

  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 0,
    // backgroundColor: '#f9f9f9',
    borderWidth : 0,
    borderBottomColor : 3

  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
    borderBottomWidth:1,
    borderColor: '#EEEEEE',

    // outline : 0
    

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
    fontFamily : "psb",
    color: '#fff',
    textAlignVertical : "center",
    marginTop :2
  },
});

export default LoginScreen;

















