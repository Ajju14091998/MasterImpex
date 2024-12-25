import { useFocusEffect } from "expo-router";
import * as React from "react";
import {
  Button,
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import HomeScreen from "../SCREENS/screen1.js";
import Order from "../SCREENS/screen2.js";
import Logout from "../SCREENS/Logout.js";
import Cart from "../assets/svg/Vector.js";
import Cart1 from "../assets/svg/cart1.js";
import Profile from "../assets/svg/profile.js";
import Home from "../assets/svg/home.js";
import Addtocart from "../SCREENS/screen3.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Main1 = ({ navigation }) => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
  });

  const [name, setname] = React.useState("");

  function handlelogin() {}
  return (
    <KeyboardAvoidingView style={{ flex: 1.2 }}>
      {/* <NavigationContainer independent={true}> */}
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            position: "absolute",
            bottom: 0,
          },
        }}
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#00DE62",
          tabBarInactiveTintColor: "#7A7B7C",
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
            paddingHorizontal: 20,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            justifyContent: "space-between",
            zIndex: 0,
            opacity: 1,
            paddingTop: 10,
            position: "relative",
            bottom: 0,
            // transform :[{translateY : bottomposition}]
          },
        }}
      >
        <Tab.Screen
          name="Home"
          children={(props) => <HomeScreen />}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconc : styles.iconc1}>
                <View style={focused ? styles.box : styles.box1}>
                  <Home
                    style={{ width: 20, height: 20, paddingLeft: 10 }} // Control size
                    color={focused ? "#fff" : "#000"} // Dynamic color based on state
                  />
                </View>
                {focused && <Text style={styles.navText}>Home</Text>}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NewsLetter"
          component={Order}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconc : styles.iconc1}>
                <View style={focused ? styles.box : styles.box1}>
                  <Cart
                    style={{ width: 20, height: 20, paddingLeft: 10 }} // Example to set the size of the icon
                    color={focused ? "#fff" : "#000"} // Dynamically change color based on 'focused' state
                  />
                </View>
                {focused && <Text style={styles.navText}>Order</Text>}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Startsy"
          // component={Startsy}
          children={(props) => <Addtocart navigation={navigation} />}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconc : styles.iconc1}>
                <View style={focused ? styles.box : styles.box1}>
                  <Cart1
                    style={{ width: 20, height: 20, paddingLeft: 10 }} // Set the size of the icon
                    color={focused ? "#fff" : "#000"} // Dynamically change the color based on the `focused` state
                  />
                </View>
                {focused && <Text style={styles.navText}>Cart</Text>}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          // component={ChatScreen}
          children={(props) => <Logout navigation={navigation} />}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconc : styles.iconc1}>
                <View style={focused ? styles.box : styles.box1}>
                  <Profile
                    style={{ width: 20, height: 20, paddingLeft: 10 }} // Set the size of the icon
                    color={focused ? "#fff" : "#000"} // Dynamically change the color based on the `focused` state
                  />
                </View>
                {focused && <Text style={styles.navText}>Profile</Text>}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </KeyboardAvoidingView>
  );
};

export default Main1;

const styles = StyleSheet.create({
  navText: {
    fontSize: 12,
    color: "#000",
    verticalAlign: "middle",
    fontFamily: "psb",
  },
  iconc: {
    width: 90,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    // justifyContent : "space-around"
  },
  iconc1: {
    width: 50,
    height: 40,
    borderRadius: 30,
    // backgroundColor : "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    // justifyContent : "space-around"
  },
  box: {
    width: 40,
    marginRight: 5,
    height: "100%",
    backgroundColor: "#F58731",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 10,
    textAlign: "center",
  },
  box1: {
    width: 40,
    marginRight: 8,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 10,
    textAlign: "center",
  },
  i: {
    margin: "auto",
  },
});
