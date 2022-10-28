import { View, Text, Image, Pressable } from "react-native";
import { headerStyles as styles } from "../styles";
import { lunaLogo, exitIcon } from "../assets";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";
import i18n from "../i18n/tanslations";

const Header = () => {
  const { setAuth } = useContext(AuthContext) as authContextType;
  const submitHandler = () => {
    setAuth(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={lunaLogo} />
        <Text style={styles.logoTitle}>{i18n.t("TomatoTrolley")}</Text>
      </View>
      <Pressable style={styles.btn} onPress={submitHandler}>
        <Image style={styles.image} source={exitIcon} />
      </Pressable>
    </View>
  );
};

export default Header;
