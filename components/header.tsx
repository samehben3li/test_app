import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/header.style";
import { lunaLogo, exitIcon } from "../assets";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";

const Header = () => {
  const { setAuth } = useContext(AuthContext) as authContextType;
  const submitHandler = () => {
    setAuth(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={lunaLogo} />
        <Text style={styles.logoTitle}>Tomato Trolley</Text>
      </View>
      <Pressable style={styles.btn} onPress={submitHandler}>
        <Image style={styles.image} source={exitIcon} />
      </Pressable>
    </View>
  );
};

export default Header;
