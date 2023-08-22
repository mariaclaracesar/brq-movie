import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  useFonts,
} from "@expo-google-fonts/nunito";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

import theme from "@styles/index";

import { Routes } from "./src/routes";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
