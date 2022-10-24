import { useState } from "react";

import AuthProvider from "./context/authContext";
import Main from "./screens/main";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import LoadingScreen from "./screens/loading";
import * as Localization from "expo-localization";
import i18n from "./i18n/tanslations";

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
