import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import { AuthContext } from "../context/authContext";
import { authContextType } from "../types/interfaces";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { auth } = useContext(AuthContext) as authContextType;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <>
            <Stack.Screen name="home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
