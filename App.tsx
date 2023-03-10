import AuthProvider from "./context/authContext";
import Main from "./screens/Main";
import { useFonts } from "expo-font";
import LoadingScreen from "./screens/Loading";
import * as Localization from "expo-localization";
import i18n from "./i18n/translations";
import { RootSiblingParent } from "react-native-root-siblings";

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default function App() {
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
      <RootSiblingParent>
        <Main />
      </RootSiblingParent>
    </AuthProvider>
  );
}
