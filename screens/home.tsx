import { Text, View, Pressable } from "react-native";

interface Props {
  route: any;
}

export default function HomeScreen({ route }: Props) {
  const submitHandler = () => {
    route.params.setIsSignedIn(false);
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#f5c000" : "#FFDE6A",
          },
        ]}
        onPress={submitHandler}
      >
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
}
