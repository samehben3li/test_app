import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/header.style";
import lunaLogo from "../assets/luna-logo.png";
import exitIcon from "../assets/exit.png";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";
import i18n from "../i18n/translations";

const Header = () => {
  const { setAuth } = useContext(AuthContext) as authContextType;
  const submitHandler = () => {
    setAuth(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={lunaLogo} />
        <Text style={styles.logoTitle}>{i18n.t("header.TomatoTrolley")}</Text>
      </View>
      <Pressable style={styles.btn} onPress={submitHandler}>
        <Image style={styles.image} source={exitIcon} />
      </Pressable>
    </View>
  );
};

export default Header;
