import { useContext } from "react";
import { API_URI } from "@env";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./MainNavigator";
import LoginScreen from "./Login";
import { AuthContext } from "../context/authContext";
import { authContextType } from "../types/interfaces";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { auth } = useContext(AuthContext) as authContextType;
  const httpLink = createHttpLink({
    uri: API_URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = auth?.accessToken;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {auth ? (
            <Stack.Screen name="mainNavigator" component={MainNavigator} />
          ) : (
            <Stack.Screen name="login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
