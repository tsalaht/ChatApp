import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, I18nManager, Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "./store/store";
import Colors from "./app/Colors/Color";
import ProtectedScreens from "./app/Screens/Index";
import AppPages from "./app/Routes/Index";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function App() {
  SplashScreen.preventAutoHideAsync();
  
  useEffect(() => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    }
  }, []);

  let [fontsLoaded] = useFonts({
    NotoKufiArabic_100Thin: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Thin.ttf"),
    NotoKufiArabic_200ExtraLight: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-ExtraLight.ttf"),
    NotoKufiArabic_300Light: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Light.ttf"),
    NotoKufiArabic_400Regular: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Regular.ttf"),
    NotoKufiArabic_500Medium: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Medium.ttf"),
    NotoKufiArabic_600SemiBold: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-SemiBold.ttf"),
    NotoKufiArabic_700Bold: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Bold.ttf"),
    NotoKufiArabic_800ExtraBold: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-ExtraBold.ttf"),
    NotoKufiArabic_900Black: require("./assets/fonts/NotoKufiArabic/NotoKufiArabic-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch((error:any) => {
        console.warn("Error hiding splash screen:", error);
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.container}>
              
              <AppPages />
    
            </SafeAreaView>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});