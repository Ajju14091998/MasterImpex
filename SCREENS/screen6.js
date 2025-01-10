import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IndividualOrder = () => {
  const orderDetailsData = [
    {
      id: "1",
      title: "Alex Jorden",
      orderDate: "31-12-2024",
      Quantity: "300",
    },
  ];

  const productDetailsData = [
    {
      id: "1",
      title: "9 GL LAMINATE",
      quantity: "100",
      imageUrl:
        "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
    },
    {
      id: "2",
      title: "6 GL BOTH SIDE LAMINATE",
      quantity: "50",
      imageUrl:
        "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
    },
    {
      id: "3",
      title: "4 SL WALL PANEL",
      quantity: "50",
      imageUrl:
        "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
    },
    {
      id: "4",
      title: "9 GL LAMINATE",
      quantity: "100",
      imageUrl:
        "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
    },
  ];

  const renderOrderDetailsCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>
          Order Date: {item.orderDate || "N/A"}
        </Text>
        <Text style={styles.productPrice}>
          Total Quantity: {item.Quantity || "N/A"}
        </Text>
      </View>
    </View>
  );

  const renderProductDetailsCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Quantity: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => alert(`Canceling product: ${item.title}`)}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="#888" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
      </View>

      {/* Order Details Section */}
      <Text style={styles.sectionTitle}>Order Details</Text>
      <FlatList
        data={orderDetailsData}
        renderItem={renderOrderDetailsCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Product Details Section */}
      <Text style={[styles.sectionTitle, styles.productSectionTitle]}>
        Product Details
      </Text>
      <FlatList
        data={productDetailsData}
        renderItem={renderProductDetailsCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F5",
    borderRadius: 30,
    paddingHorizontal: 15, 
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 50, 
    marginRight: 20,
    marginLeft:20,
    marginTop: 20,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    height: "100%", // Ensure the input field takes full height of the container
    paddingVertical: 0, // Remove vertical padding for better alignment
    borderWidth: 0,
    outline: 0,
    borderColor: "#fff",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#181C2E",
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight:20,
  },
  productSectionTitle: {
    marginTop: 15,
  },
  listContent: {
    paddingBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    elevation: 1,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 10,
    shadowOffset: { width: 0, height: 10 },
    // height: 100,
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,

  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#181C2E",
    marginVertical: 3,
  },
  productPrice: {
    fontFamily: "psb",
    fontSize: 12,
    color: "#181C2E",
    marginVertical: 3,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
  },
  cancelButton: {
    backgroundColor: "#181C2E",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 3,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default IndividualOrder;
