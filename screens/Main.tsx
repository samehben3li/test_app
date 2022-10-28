import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./MainNavigator";
import LoginScreen from "./Login";
import { AuthContext } from "../context/authContext";
import { authContextType } from "../types/interfaces";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { auth } = useContext(AuthContext) as authContextType;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <Stack.Screen name="mainNavigator" component={MainNavigator} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
