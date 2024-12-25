

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
// import Home from "../assets/svg/home.js"

const HomeScreen = () => {
  const dashboardData = [
    { id: '1', icon: 'user', title: 'Total Customers', value: '5,523' },
    { id: '2', icon: 'users', title: 'Members', value: '5,600' },
    { id: '3', icon: 'heart', title: 'Active', value: '4,250' },
    { id: '4', icon: 'lock', title: 'Products', value: '15,240' },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
        {/* <Home/> */}
      <FontAwesome5 name={item.icon} size={24} color="#333" style={styles.cardIcon} />
      <View>
        <Text style={styles.cardValue}>{item.value}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome To,</Text>
        <Text style={styles.appName}>Our Master Impex App!</Text>
      </View>

      {/* Dashboard Section */}
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <FlatList
        data={dashboardData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.dashboardContainer}
      />

      {/* Bottom Navigation */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
    borderRadius : 30,
    borderWidth : 0
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderWidth : 0,
    outline  : 0,
    borderColor : "#fff"
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#181C2E',
    lineHeight: 40,
    fontFamily : "pr"

  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    fontFamily : "pr"
  },
  dashboardTitle: {
    fontSize: 15,
    fontFamily : "pb",
    color: '#181C2E',
    marginBottom: 10,
  },
  dashboardContainer: {
    paddingBottom: 20,


  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 10,
    borderRadius : 20,
    shadowOffset: { width: 0, height: 10 },
    
  },
  cardIcon: {
    marginRight: 15,
  },
  cardValue: {
  fontSize: 16,
  fontFamily:"pb",
  color: '#181C2E',
  
  },
  cardTitle: {
    fontSize: 13,
    color: '#666',
    fontFamily:"pr"
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal : 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    verticalAlign : "middle",
    fontFamily  : "psb",
  },
  iconc : {
    width  : 100,
    height : 40,
    borderRadius : 30,
    backgroundColor : "#EEEEEE",
    display : "flex",
    flexDirection : "row",
    marginRight : 20
    // justifyContent : "space-around"
  },
  iconc1 : {
    width  : 50,
    height : 40,
    borderRadius : 30,
    // backgroundColor : "#EEEEEE",
    display : "flex",
    flexDirection : "row",
    marginLeft : 10,
    // justifyContent : "space-around"
  },
  box : {
    width : 40,
    marginRight : 8,
    height : "100%",
    backgroundColor  :"#F58731",
    borderRadius  : 30,
    justifyContent  : "center",
    alignSelf : "center",
    paddingLeft : 8,
    textAlign :"center"

  },
  box1 : {
    width : 40,
    marginRight : 8,
    height : "100%",
    backgroundColor  :"transparent",
    borderRadius  : 30,
    justifyContent  : "center",
    alignSelf : "center",
    paddingLeft : 8,
    textAlign :"center"

  },
  i  : {
    margin : "auto"
  }
});

export default HomeScreen;
