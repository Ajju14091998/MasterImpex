import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Succesful from '../assets/svg/Succesful'; // Adjust the path to your icon

export default function SuccessPage() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigation = useNavigation();

  const handleContinueShopping = () => {
    setIsLoading(true); // Show the loader

    // Simulate a delay for navigation (e.g., network request)
    setTimeout(() => {
      setIsLoading(false); // Hide the loader
      navigation.navigate('Main1'); // Navigate to Main1 after loading
    }, 2000); // Simulated delay (adjust as necessary)
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Succesful width={30} height={30} />
        </View>
      </View>

      {/* Success Message */}
      <Text style={styles.messageText}>
        You have successfully completed your shopping cart list!
      </Text>
      <Text style={styles.successText}>Successful!</Text>

      {/* Continue Shopping Button or Loader */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleContinueShopping} 
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" /> // Show loader
        ) : (
          <Text style={styles.buttonText}>Continue Shopping</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'pr',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'pb',
  },
  button: {
    backgroundColor: '#F58731',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row', // Align text and loader horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'psb',
  },
});
