import { View, Text, Image, Pressable } from "react-native";
import { headerStyles as styles } from "../styles";
import { lunaLogo, exitIcon } from "../assets";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";
import i18n from "../i18n/translations";

interface Props {
  home: boolean;
}

const Header = ({ home }: Props) => {
  const { setAuth } = useContext(AuthContext) as authContextType;
  const submitHandler = () => {
    setAuth(null);
  };
  return (
    <View style={[styles.bg, !home && styles.black]}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.image} source={lunaLogo} />
          <Text style={styles.logoTitle}>{i18n.t("header.TomatoTrolley")}</Text>
        </View>
        <Pressable style={styles.btn} onPress={submitHandler}>
          <Image style={styles.btnImage} source={exitIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
