import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateFlagScreen from "./createFlag";
import RecentFlagsScreen from "./recentFlags";
import HomeScreen from "./home";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="recentFlags" component={RecentFlagsScreen} />
      <Stack.Screen name="createFlag" component={CreateFlagScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
