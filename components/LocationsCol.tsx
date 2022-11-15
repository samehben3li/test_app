import { Text, View, Pressable } from "react-native";
import i18n from "../i18n/translations";
import { flagOptionsStyles as styles } from "../styles";
import { flag } from "../screens/CreateFlag";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface locationsColProps {
  side: string;
  flagData: flag;
  addLocation: (location: string, side: string) => void;
}

const locations = [
  i18n.t("flag.top"),
  i18n.t("flag.middle"),
  i18n.t("flag.bottom"),
];

const LocationsCol = ({ side, addLocation, flagData }: locationsColProps) => {
  return (
    <View style={styles.locationCol}>
      {locations.map((item: string, index: number) => (
        <AnimatedPressable
          entering={FadeIn.delay(500)}
          exiting={FadeOut}
          onPress={() => addLocation(item, side)}
          key={index}
          style={[
            styles.locationBtn,
            flagData.location[side].includes(item) && styles.selected,
          ]}
        >
          <Text style={styles.optionName}>{item}</Text>
        </AnimatedPressable>
      ))}
      <Text style={styles.gridText}>{i18n.t(`flag.${side}`)}</Text>
    </View>
  );
};

export default LocationsCol;
