import { useState } from "react";

import AuthProvider from "./context/authContext";
import Main from "./screens/Main";
import { useFonts } from "expo-font";
import LoadingScreen from "./screens/Loading";
import * as Localization from "expo-localization";
import i18n from "./i18n/translations";

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [fontsLoaded, error] = useFonts({
    medium: require("./assets/fonts/gotham/Gotham-Book.otf"),
    bold: require("./assets/fonts/gotham/Gotham-Bold.otf"),
    black: require("./assets/fonts/gotham/Gotham-Black.otf"),
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
