import * as React from "react";
import { Button, View, Text , ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../SCREENS/Login.js";
import Main1 from "../../SCREENS/Main1.js";
import HomeScreen from "../../SCREENS/screen1.js"
import useLoadFonts from "../../hooks/fontload.js"






const Stack = createNativeStackNavigator();


export default function App() {


  const fontsLoaded = useLoadFonts();

if (!fontsLoaded) {
  return (
      <ActivityIndicator size="large" color="#0000ff" />
  );
}

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{      
        keyboardHandlingEnabled: true,
        headerShown: false, 
        animation: "slide_from_right", 
      
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main1" component={Main1} />
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
    // </NavigationContainer>
  );
}
