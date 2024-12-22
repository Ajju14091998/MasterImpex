import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from "../assets/svg/home.js"
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

export default function Logout() {
  const [profileImage, setProfileImage] = useState(
    'https://www.securityforum.org/wp-content/uploads/2022/10/Alex-Jordon-scaled-e1710797283626.jpeg'
  );
  const [selectedGender, setSelectedGender] = useState('Male');

  // Function to handle image upload
  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Image Section */}
      {/* <Home/> */}
      <TouchableOpacity style={styles.imageContainer} onPress={handleImageUpload}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>

      {/* User Info Section */}
      <View style={styles.infoContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} value="Ajay Agunde" editable={true} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile:</Text>
          <TextInput style={styles.input} value="9876543210" editable={true} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value="rikafashionshop@gmail.com"
            editable={false}
          />
        </View>
        <View style={styles.genderContainer}>
          <Text style={styles.label}>Gender:</Text>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Male' && styles.genderButtonActive,
            ]}
            onPress={() => setSelectedGender('Male')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === 'Male' && styles.genderTextActive,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Female' && styles.genderButtonActive,
            ]}
            onPress={() => setSelectedGender('Female')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === 'Female' && styles.genderTextActive,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* My Orders */}
      <View style={styles.orderSection}>
  <TouchableOpacity style={styles.orderButton}>
    <MaterialIcons name="production-quantity-limits" size={24} color="black" />
    <Text style={styles.orderText}>My Order</Text>
    <AntDesign name="arrowright" size={24} color="black" />
  </TouchableOpacity>
</View>


      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: '#777',
  },
  infoContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    width: 80,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginLeft: 10,
  },
  genderButtonActive: {
    borderColor: '#f57c00',
    backgroundColor: '#f57c00',
  },
  genderText: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  genderTextActive: {
    color: '#fff',
  },
  orderSection: {
    marginBottom: 20,
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  orderIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  orderText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#f57c00',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
});