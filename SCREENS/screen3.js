import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialIcons,

} from "@expo/vector-icons";
// import Home from "../assets/svg/home.js"
import Entypo from "@expo/vector-icons/Entypo";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Setting from "../assets/svg/setting.js";
import Delete from "../assets/svg/delete.js";
import Checkout from "../assets/svg/proceed.js";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import Leftarrow from "../assets/svg/leftarrow.js";

const Addtocart = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const [isLoading, setIsLoading] = useState(false); // Loader state

  const handleProceedToCheckout = () => {
    if (!currentValue) {
      alert("Please select a customer before proceeding to checkout.");
      return;
    }

    setIsLoading(true); // Show loader

    // Simulating a network request or any async operation
    setTimeout(() => {
      setIsLoading(false); // Hide loader after some time (simulating navigation delay)
      navigation.navigate("SuccessPage"); // Navigate to the success page
    }, 2000); // Simulated delay (adjust as necessary)
  };

  const bottomSheetRef = useRef(null);
  const snapPoints = React.useMemo(() => ["45%"], []);

  // Category Dropdown State
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const items = [
    { label: "Ajay", value: "ajay" },
    { label: "Sujay", value: "sujay" },
    { label: "Nikita", value: "nikita" },
    { label: "Akshay", value: "akshay" },
  ];

  // Snap points for the bottom sheet
  const dashboardData = [
    { id: "1", icon: "user", title: "Total Customers", value: "5,523" },
    { id: "2", icon: "users", title: "Members", value: "5,600" },
    { id: "3", icon: "heart", title: "Active", value: "4,250" },
    { id: "4", icon: "lock", title: "Products", value: "15,240" },
    { id: "5", icon: "lock", title: "Products", value: "15,240" },
    { id: "6", icon: "lock", title: "Products", value: "15,240" },
  ];

  const [quantity, setQuantity] = useState(10);
  const pricePerUnit = 245; // Example price per unit

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = (pricePerUnit * quantity).toFixed(2);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid #cccccc",
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid #cccccc",
          }}
        >
          <Image
            source={{
              uri: "https://i0.wp.com/blog.wishkarma.com/wp-content/uploads/2022/06/Frame-519-1.png?fit=1920%2C1080&ssl=1",
            }}
            style={styles.one}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.t1}>9 GL LAMINATE</Text>
          <Text style={styles.t2}>
            Quantity{" "}
            <Text style={{ fontFamily: "psb", fontSize: 12, color: "#181C2E" }}>
              200
            </Text>
          </Text>
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
        <View
          style={{
            border: "1px solid #000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Delete
            style={{
              width: 25,
              height: 25,
              color: "#181C2E",
            }}
          />
        </View>
      </View>
    </View>
  );

  const renderBackdrop = (props) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1} // Backdrop disappears when BottomSheet is closed
      appearsOnIndex={0} // Backdrop appears when BottomSheet is open
      opacity={0.7} // Set opacity for the backdrop
    />
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.topBar}>
          {/* SVG Icon (20% width) */}
          <View style={styles.iconContainer}>
            <Leftarrow width={18} height={12} />
          </View>
          {/* Dropdown (80% width) */}
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={setIsOpen}
              value={currentValue}
              setValue={setCurrentValue}
              maxHeight={100}
              autoScroll
              placeholder="Select Customer"
              placeholderStyle={styles.placeholderStyle}
              style={styles.dropdownStyle}
            />
          </View>
        </View>
        <Text style={styles.product}>My Cart</Text>

        <FlatList data={dashboardData} renderItem={renderCard}></FlatList>

        <View
          style={{
            backgroundColor: "#ffffff",
            // paddingHorizontal: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            paddingTop: 15,
          }}
        >
          {/* Total Section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "psb", fontSize: 14, color: "#888" }}>
              Total (Quantity):
            </Text>
            <Text style={{ fontFamily: "psb", fontSize: 16, color: "#181C2E" }}>
              140
            </Text>
          </View>

          {/* Proceed to Checkout Button */}
          <TouchableOpacity
            onPress={handleProceedToCheckout}
            style={{
              backgroundColor: "#F58731",
              borderRadius: 10,
              alignItems: "center",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {isLoading ? (
              // Display loader if isLoading is true
              <ActivityIndicator style={styles.loaderContainer} size="small" color="#fff" />
            ) : (
              <>
                <Text
                  style={{ fontFamily: "psb", fontSize: 16, color: "#fff" }}
                >
                  Proceed to Checkout
                </Text>

                <Checkout
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 60,
                    color: "#fff",
                  }}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
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
    width: "85%",
    borderRadius: 30,
    borderWidth: 0,
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
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f78c1f",
  },
  dashboardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  dashboardContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    // shadowOpacity: 10,
    // shadowRadius: 20,
    elevation: 1,
    borderRadius: 20,
    // overflow:"hidden",
    // borderWidth : 1,
    backgroundColor: "#f8f8f8",
    //    backgroundColor : "red",

    // shadowOffset: { width: 0, height: 10 },
    height: 100,
    display: "flex",
    flexDirection: "row",
  },
  cardIcon: {
    marginRight: 15,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  cardTitle: {
    fontSize: 14,
    color: "#888",
  },

  navItem: {
    alignItems: "center",
  },

  i: {
    margin: "auto",
  },
  filter: {
    width: 45,
    height: 45,
    backgroundColor: "#F58731",
    borderRadius: 50,
    right: "-26%",
  },

  product: {
    marginVertical: 10,
    fontFamily: "pb",
    fontSize: 15,
    color: "#181C2E",
  },
  one: {
    height: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 12,
  },

  two: {
    width: "60%",
    // height  : "100%",
    padding: 12,
  },

  t1: {
    fontFamily: "psb",
    fontSize: 14,
    color: "#181C2E",
  },
  t2: {
    fontFamily: "pr",
    fontSize: 10,
    color: "#666666",
    width: "100%",
    marginBottom: 5,
  },
  t3: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  three: {
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
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181C2E",
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "psb",
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
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    overflow: "hidden",
    fontFamily: "pr",
    backgroundColor: "#f8f8f8",
    marginBottom: 2,
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

    width: 170,
    height: 36,
    marginTop: 2,
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 16,

    paddingTop: 6,
    fontFamily: "psb",
    textAlign: "center",
  },

  // topbar-icon

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 10,
    marginTop: 10,
  },
  dropdownContainer: {
    width: "80%",
  },
  placeholderStyle: {
    color: "gray",
    fontFamily: "psb",
    fontSize: 14,
  },
  dropdownStyle: {
    borderRadius: 13,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F58731",
    borderRadius: 20,
    width: "20%",
    width: 40,
    height: 40,
    marginRight: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Addtocart;
