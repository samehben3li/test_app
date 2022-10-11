import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              initialParams={{ setIsSignedIn: setIsSignedIn }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              initialParams={{ setIsSignedIn: setIsSignedIn }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
