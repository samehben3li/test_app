import { Text, View, Pressable, Image } from "react-native";
import i18n from "../i18n/translations";
import { newFlagStyles as styles } from "../styles";
import { newFlagIcon, shapeIcon } from "../assets";
import { selectedTab, flag } from "../screens/CreateFlag";
import { optionsData } from "../data/options";
import FlagSelection from "./FlagSelection";
import Animated, {
  SlideOutUp,
  Keyframe,
  Easing,
  FadeIn,
} from "react-native-reanimated";

const LocationsText = ({ location, side, name }: any) => {
  return (
    <Text
      style={[
        styles.locationNameTxt,
        (location.left.length > 0 || location.right.length > 0) &&
          styles.selectedTxt,
      ]}
    >
      {`${name} `}
      {side.map((item: string, index: number) =>
        index !== 0 ? `,${item.charAt(0)}` : item.charAt(0)
      )}
    </Text>
  );
};

const locations = [
  i18n.t("flag.top"),
  i18n.t("flag.middle"),
  i18n.t("flag.bottom"),
];

const GridCol = ({ side }: { side: string[] }) => {
  return (
    <View style={styles.gridCol}>
      {locations.map((item: string, index: number) => (
        <View
          key={index}
          style={[styles.gridItem, side.includes(item) && styles.gridSelected]}
        ></View>
      ))}
    </View>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const keyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: -100 }],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }],
    easing: Easing.inOut(Easing.ease),
  },
});

interface Props {
  setSelectedTab: React.Dispatch<React.SetStateAction<selectedTab>>;
  flagData: flag;
  selectedTab: selectedTab;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewFlag({
  setSelectedTab,
  flagData,
  selectedTab,
  setCompleted,
}: Props) {
  const { risk, location, pest, plantPart } = flagData;
  return (
    <Animated.View
      entering={keyframe.duration(600)}
      exiting={SlideOutUp.duration(600)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Animated.Image
          entering={FadeIn.delay(700).duration(700)}
          style={styles.image}
          source={newFlagIcon}
        />
        <View style={styles.flagName}>
          <Image source={shapeIcon} style={styles.shapeIcon} />
          <Text style={styles.flagNameText}>POSTS 6 - 7 | ROW 12</Text>
        </View>
      </View>
      <View style={styles.row}>
        <FlagSelection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCompleted={setCompleted}
          title="flag.riskCategory"
          name="risk"
          option={risk}
          tab={0}
        />
        <FlagSelection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCompleted={setCompleted}
          title="flag.type"
          name="pest"
          option={pest}
          tab={1}
        />
        <FlagSelection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCompleted={setCompleted}
          title="flag.plantPart"
          name="plantPart"
          option={plantPart}
          tab={2}
        />
        <AnimatedPressable
          onPress={() => {
            setSelectedTab(optionsData[3]);
            setCompleted(false);
          }}
          style={styles.col}
          entering={FadeIn.delay(300)}
        >
          <View style={styles.title}>
            <Text
              style={[
                styles.titleTxt,
                selectedTab.name === "location" && styles.selected,
              ]}
            >
              {i18n.t("flag.location")}
            </Text>
          </View>
          <View style={styles.selection}>
            <View
              style={[
                styles.grid,
                (selectedTab.name === "location" ||
                  location.left.length > 0 ||
                  location.right.length > 0) &&
                  styles.selectedGrid,
              ]}
            >
              <GridCol side={flagData.location.left} />
              <GridCol side={flagData.location.right} />
            </View>
          </View>
          <View
            style={[
              styles.name,
              selectedTab.name === "location" && styles.selectedName,
              (location.left.length > 0 || location.right.length > 0) &&
                styles.done,
            ]}
          >
            <LocationsText
              side={location.left}
              name={`${i18n.t("flag.left")}:`}
              location={location}
            />
            <LocationsText
              side={location.right}
              name={`${i18n.t("flag.right")}:`}
              location={location}
            />
          </View>
        </AnimatedPressable>
      </View>
    </Animated.View>
  );
}
