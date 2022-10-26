import { Text, View, Pressable } from "react-native";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";
import styles from "../styles/home.style";
import colors from "../theme/colors";

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext) as authContextType;
  const submitHandler = () => {
    setAuth(null);
  };
  return (
    <View style={styles.container}>
      <Text>username: {auth?.user.username}</Text>
      <Text>username: {auth?.user.email}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.primary1dark : colors.primary1,
          },
          styles.btn,
        ]}
        onPress={submitHandler}
      >
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
}
