// src/hooks/useLoadFonts.js
import { useFonts } from 'expo-font';

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    pr: require('../assets/fonts/Poppins-Regular.ttf'),
    pb: require('../assets/fonts/Poppins-Bold.ttf'),
    psb : require("../assets/fonts/Poppins-SemiBold.ttf")
  });

  return fontsLoaded;
}