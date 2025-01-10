import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Setting from "../assets/svg/setting.js";
import DropDownPicker from "react-native-dropdown-picker";
import Shopping from "../assets/svg/shopping.js";
import { useNavigation } from "expo-router";

const Order = () => {
  const [arrowModalVisible, setArrowModalVisible] = useState(false); // Modal visibility state for arrow
  const [quantity, setQuantity] = useState(10);
  const pricePerUnit = 245;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = (pricePerUnit * quantity).toFixed(2);

  const navigation = useNavigation(); // Hook to access navigation

  const handleAddToCart = () => {
    navigation.navigate("Addtocart");
  };

  const dashboardData = [
    { id: "1", icon: "user", title: "Total Customers", value: "5,523" },
    { id: "2", icon: "users", title: "Members", value: "5,600" },
    { id: "3", icon: "heart", title: "Active", value: "4,250" },
    { id: "4", icon: "lock", title: "Products", value: "15,240" },
    { id: "5", icon: "lock", title: "Products", value: "15,240" },
    { id: "6", icon: "lock", title: "Products", value: "15,240" },
  ];

  // Category Dropdown State
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const items = [
    { label: "Laminate", value: "laminate" },
    { label: "Wall Panel", value: "wall panel" },
    { label: "Both Side Laminate", value: "both side laminate" },
    { label: "Uv Panel", value: "uv panel" },
  ];

  // Subcategory Dropdown State
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Subcategories Data
  const subcategories = [
    { label: "Wall Panel", value: "wall panel" },
    { label: "Bothe Side Uv", value: "both side uv" },
    { label: "Laminate", value: "laminate" },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
        }}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>9 GL LAMINATE</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.productDescription}
        >
          lorem ipsum js skdhuduwd skadhugsdku skadhugsdku skadhugsdku{" "}
        </Text>
        <View style={styles.productPriceQty}>
          <Text style={styles.productPrice}>Qty 200</Text>
          {/* <Text style={styles.productQuantity}>Qty 200</Text> */}
        </View>
      </View>
      <Pressable
        style={styles.moreDetailsButton}
        onPress={() => setArrowModalVisible(true)}
      >
        <Entypo name="chevron-right" size={22} color="#fff" />
      </Pressable>
    </View>
  );

  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFilterButtonPress = () => {
    setLoading(true);

    // Simulate a loading delay (e.g., 2 seconds)
    setTimeout(() => {
      setLoading(false);
      setFilterModalVisible(true); // Open the modal after loading
    }, 2000); // Adjust the delay as needed
  };

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
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
     <Pressable style={styles.filterButton} onPress={handleFilterButtonPress}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff"  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
        ) : (
          <Setting style={{ width: 50, height: 50 }} color="#fff" />
        )}
      </Pressable>
      </View>

      <Text style={styles.productTitleText}>Products</Text>

      <FlatList
        data={dashboardData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />

      {/* Filter Modal */}
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
            {/* Category Dropdown */}
            <Text style={styles.Category}>Category</Text>
            <View style={{ height: "auto", width: "100%", borderRadius: 13 }}>
              <DropDownPicker
                items={items}
                open={isOpen}
                setOpen={setIsOpen}
                value={currentValue}
                setValue={setCurrentValue}
                maxHeight={100}
                autoScroll
                placeholder="Select Your Category"
                placeholderStyle={{
                  color: "gray",
                  fontFamily: "psb",
                  fontSize: 14,
                }}
                style={styles.dropdownStyle}
                zIndex={2000} // Slightly lower than Category Dropdown
              />
            </View>

            {/* Subcategory Dropdown */}
            <Text style={styles.Subcategory}>Sub Category</Text>
            <View style={{ height: "auto", width: "100%", borderRadius: 13 }}>
              <DropDownPicker
                items={subcategories}
                open={isSubCategoryOpen}
                setOpen={setIsSubCategoryOpen}
                value={selectedSubCategory}
                setValue={setSelectedSubCategory}
                maxHeight={100}
                autoScroll
                placeholder="Select Your Subcategory"
                placeholderStyle={{
                  color: "gray",
                  fontFamily: "psb",
                  fontSize: 14,
                }}
                style={styles.dropdownStyle}
                zIndex={1000} // Ensure this is higher than other elements
              />
            </View>

            {/* Submit Button */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                  // Log the selected values
                  console.log("Selected Category:", currentValue);
                  console.log("Selected Subcategory:", selectedSubCategory);

                  // Reset values
                  setCurrentValue(null);
                  setSelectedSubCategory(null);

                  // Close the modal
                  setFilterModalVisible(false);
                }}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Arrow Modal */}
      <Modal
        visible={arrowModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setArrowModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setArrowModalVisible(false)}>
          <View style={styles.modalBackdrop}></View>
        </TouchableWithoutFeedback>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.modalContainer}
        >
          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: "auto",
              }}
            >
              <View>
                <Text style={styles.productName}>9 GL LAMINATE </Text>
              </View>
              {/* <View style={styles.availabilityContainer}>
                <Text style={styles.availabilityText}>Available in stock</Text>
              </View> */}
            </View>

            {/* Product Description */}
            <Text ellipsizeMode="tail" style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ... Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s ... Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ... Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s ...
            </Text>

            {/* Quantity and Selector */}
            <View style={styles.quantityContainer}>
              <View style={{ width: 100 }}>
                <Text
                  style={{
                    fontFamily: "psb",
                    fontSize: 12,
                    color: "#fff",
                    backgroundColor: "#02BC49",
                    borderRadius: 10,
                    padding: 2,
                    textAlign: "center",
                  }}
                >
                  Qty (In Stock)
                </Text>
                <Text
                  style={{
                    fontFamily: "psb",
                    fontSize: 18,
                    color: "#181C2E",
                    marginLeft: 6,
                  }}
                >
                  200
                </Text>
              </View>
              <View style={styles.quantitySelector}>
                <TouchableOpacity
                  onPress={handleDecrease}
                  style={styles.selectorButton}
                >
                  <Text style={styles.selectorText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  editable={false}
                  style={styles.input}
                  keyboardType="numeric"
                  value={quantity.toString()}
                  onChangeText={(value) => setQuantity(Number(value) || 1)}
                />
                <TouchableOpacity
                  onPress={handleIncrease}
                  style={styles.selectorButton}
                >
                  <Text style={styles.selectorText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Total Price */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "center",
                // width: "100%",
              }}
            >
              {/* <View style={styles.priceContainer}>
                <Text
                  style={{ fontFamily: "pr", fontSize: 12, color: "#666666" }}
                >
                  Total Price
                </Text>
                <Text style={styles.price}>₹ {totalPrice}</Text>
              </View> */}

              {/* Add to Cart Button */}
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={handleAddToCart}
              >
                <View style={styles.iconTextWrapper}>
                  <Shopping style={styles.shoppingIcon} />
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // padding: 20,
    zIndex: 10,
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
  filterIcon: {
    width: 24,
    height: 24,
  },
  productTitleText: {
    marginVertical: 5,
    fontFamily: "pb",
    fontSize: 15,
    color: "#181C2E",
    marginRight: 20,
    marginLeft: 20,
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

  productImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
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
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  productPrice: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
  },
  productQuantity: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
  },
  moreDetailsButton: {
    marginLeft: 20,
    width: 30,
    height: 30,
    right: 0,
    backgroundColor: "#F58731",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    paddingLeft: 3,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    // flex: 0.8,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  dropdownContainer: {
    zIndex: 1000,
    marginBottom: 20,
  },

  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181C2E",
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "psb",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  availabilityContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#02BC49",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    width: "auto",
    paddingHorizontal: 12,
    width: 150,
  },
  description: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: "pr",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-evenly",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
    marginRight: 20,
    marginLeft: 20,
  },
  label: {
    fontSize: 14,
    color: "#181C2E",
    fontFamily: "psb",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    width: 100,
    height: 35,
    marginBottom: 22,
    overflow: "hidden",
    fontFamily: "pr",
    backgroundColor: "#f8f8f8",
  },
  selectorButton: {
    // padding: 10,
    width: 30,
    height: "100%",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  selectorText: {
    fontSize: 18,
    color: "#333",
  },
  input: {
    width: 40,
    height: "100%",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 16,
    padding: 0,
    paddingTop: 5,
    color: "#333",
  },
  priceContainer: {
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#F58731",
    borderRadius: 10,
    width: "50%",
    // height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  shoppingIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  addToCartText: {
    color: "#FFF",
    fontSize: 17,
    fontFamily: "psb",
    textAlign: "center",
  },

  Category: {
    fontFamily: "psb",
    fontSize: 18,
    color: "#181C2E",
    marginBottom: 10,
    marginTop: 5,
  },
  Subcategory: {
    fontFamily: "psb",
    fontSize: 18,
    color: "#181C2E",
    marginTop: 20,
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#F58731",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 170,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "pb",
  },
  dropdownStyle: {
    borderRadius: 13,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default Order;
