import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);  // State to manage loading
  const dashboardData = [
    { id: "1", icon: "user", title: "Total Order", value: "5,600" },
    { id: "2", icon: "users", title: "Today Order", value: "4,220" },
  ];
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => handleCardPress()} // Handle card press for navigation and loader
    >
      <FontAwesome5
        name={item.icon}
        size={24}
        color="#333"
        style={styles.cardIcon}
      />
      <View>
        <Text style={styles.cardValue}>{item.value}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );

  const handleCardPress = () => {
    setLoading(true); // Show the loader

    // Simulate loading with a timeout, then navigate after 2 seconds
    setTimeout(() => {
      setLoading(false); // Hide the loader
      navigation.navigate("Orderdetails"); // Navigate to next screen
    }, 2000); // Simulating a 2-second loader
  };

  return (
    <View style={styles.container}>
      {/* Show loader if loading state is true */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#F58731" />
        </View>
      ) : (
        <>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F5",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: "100%",
    paddingVertical: 0,
    borderWidth: 0,
    outline: 0,
    borderColor: "#fff",
  },
  welcomeContainer: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F58731",
    lineHeight: 40,
    fontFamily: "pr",
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
    fontFamily: "pr",
  },
  dashboardTitle: {
    fontSize: 15,
    fontFamily: "pb",
    color: "#181C2E",
    marginBottom: 10,
    paddingLeft: 20,
  },
  dashboardContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    marginLeft: 20,
    marginRight: 20,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardValue: {
    fontSize: 16,
    fontFamily: "pb",
    color: "#181C2E",
  },
  cardTitle: {
    fontSize: 13,
    color: "#666",
    fontFamily: "pr",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
