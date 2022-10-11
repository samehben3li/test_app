import { StyleSheet, Text, View, Pressable } from "react-native";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { authContextType } from "../types/interfaces";

interface Props {
  route: any;
}

export default function HomeScreen({ route }: Props) {
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
            backgroundColor: pressed ? "#f5c000" : "#FFDE6A",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebecef",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 10,
    marginTop: 30,
  },
});
