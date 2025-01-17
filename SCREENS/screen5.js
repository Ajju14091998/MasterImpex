import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Setting from "../assets/svg/setting.js";

const Orderdetails = () => {
  const [searchText, setSearchText] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState("Orders");
  const [selectedOrderDate, setSelectedOrderDate] = useState("Last 30 Days");
  const [filteredData, setFilteredData] = useState(dashboardData);

  const dashboardData = [
    {
      id: "1",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "1-01-2025",
      orderNumber: "204890",
    },
    {
      id: "2",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "1-01-2025",
      orderNumber: "204891",
    },
    {
      id: "3",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "28-10-2024",
      orderNumber: "204891",
    },
    {
      id: "4",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "26-09-2024",
      orderNumber: "204891",
    },
    {
      id: "5",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "01-11-2024",
      orderNumber: "204891",
    },
    {
      id: "6",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "01-10-2024",
      orderNumber: "204891",
    },
    {
      id: "7",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "1-01-2025",
      orderNumber: "204890",
    },
    {
      id: "8",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "1-01-2025",
      orderNumber: "204890",
    },
    {
      id: "9",
      icon: "user",
      title: "Alex Jorden",
      orderDate: "1-01-2025",
      orderNumber: "204890",
    },
  ];

  const navigation = useNavigation();

  const filterData = () => {
    let filtered = [...dashboardData];

    // Filter by Order Date
    if (selectedOrderDate === "Last 30 Days") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      filtered = filtered.filter((item) => {
        const orderDate = new Date(
          item.orderDate.split("-").reverse().join("-")
        );
        return orderDate >= thirtyDaysAgo;
      });
    } else if (selectedOrderDate === "Last 3 Months") {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      filtered = filtered.filter((item) => {
        const orderDate = new Date(
          item.orderDate.split("-").reverse().join("-")
        );
        return orderDate >= threeMonthsAgo;
      });
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    // Filter data whenever selectedOrderDate changes
    filterData();
  }, [selectedOrderDate]);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.productDescription}
        >
          Order Date: {item.orderDate || "N/A"}
        </Text>
        <View style={styles.productPriceQty}>
          <Text style={styles.productPrice}>
            Order Number: {item.orderNumber || "N/A"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.moreDetailsButton}
        onPress={() => navigation.navigate("IndividualOrder")}
      >
        <Entypo name="chevron-right" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderFilterModal = () => (
    <Modal
      visible={filterModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setFilterModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setFilterModalVisible(false)}>
        <View style={styles.modalBackdrop}></View>
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          {/* Filter Options */}
          <Text style={styles.sectionTitle}>FILTER BY ORDER TYPE</Text>
          {["Orders", "Cancelled"].map((type) => (
            <TouchableOpacity
              key={type}
              style={styles.option}
              onPress={() => setSelectedOrderType(type)}
            >
              <View style={styles.radioCircle}>
                {selectedOrderType === type && (
                  <View style={styles.selectedCircle} />
                )}
              </View>
              <Text style={styles.optionText}>{type}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.sectionTitle}>FILTER BY ORDER DATE</Text>
          {["Last 30 Days", "Last 3 Months"].map((date) => (
            <TouchableOpacity
              key={date}
              style={styles.option}
              onPress={() => setSelectedOrderDate(date)}
            >
              <View style={styles.radioCircle}>
                {selectedOrderDate === date && (
                  <View style={styles.selectedCircle} />
                )}
              </View>
              <Text style={styles.optionText}>{date}</Text>
            </TouchableOpacity>
          ))}
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                setFilterModalVisible(false);
                filterData();
              }}
            >
              <Text style={styles.applyButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search orders..."
          style={styles.searchInput}
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <Setting style={{ width: 50, height: 50 }} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Order List */}
      <FlatList
        data={filteredData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />

      {/* Filter Modal */}
      {renderFilterModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F5",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "72%",
    borderRadius: 30,
    borderWidth: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderWidth: 0,
    outline: 0,
    width: "100%",
    borderColor: "#fff",
  },
  filterButton: {
    width: 45,
    height: 45,
    backgroundColor: "#F58731",
    borderRadius: 50,
    right: "-26%",
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
  },
  productTitle: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
  },
  productDescription: {
    fontFamily: "pr",
    fontSize: 11,
    color: "#666666",
    width: "100%",
    marginBottom: 5,
  },
  productPriceQty: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  productPrice: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
  },
  moreDetailsButton: {
    marginLeft: 20,
    width: 30,
    height: 30,
    backgroundColor: "#F58731",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  sectionTitle: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#F58731",
  },
  optionText: {
    fontFamily: "pr",
    fontSize: 14,
    color: "#181C2E",
  },
  applyButton: {
    backgroundColor: "#F58731",
    borderRadius: 10,
    // width: "50%",
    padding: 10,
    alignItems: "center",
    // marginRight: 20,
    // marginLeft: 20,
    marginBottom: 20,
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "pb",
  },
});

export default Orderdetails;
