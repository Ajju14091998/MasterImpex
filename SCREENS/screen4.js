import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Succesful from '../assets/svg/Succesful'; // Adjust the path to your icon

export default function SuccessPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Success Icon */}
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

      {/* Continue Shopping Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Order')} // Navigate to OrderPage (Screen2)
      >
        <Text style={styles.buttonText}>Continue Shopping</Text>
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
    backgroundColor: '#FFA726',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'psb',
  },
});
