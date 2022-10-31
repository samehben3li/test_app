import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateFlagScreen from "./CreateFlag";
import RecentFlagsScreen from "./RecentFlags";
import HomeScreen from "./Home";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="recentFlags" component={RecentFlagsScreen} />
        <Stack.Screen name="createFlag" component={CreateFlagScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
