import { Text, View, Image, Pressable } from "react-native";
import i18n from "../i18n/translations";
import { newFlagStyles as styles } from "../styles";
import { newFlagIcon } from "../assets";
import { selectedTab, flag } from "../screens/CreateFlag";
import { optionsData } from "../data/options";
import Animated, {
  SlideInUp,
  SlideOutUp,
  Keyframe,
  Easing,
  FadeIn,
} from "react-native-reanimated";

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

const API_URI = process.env.apiUrl;

interface Props {
  setSelectedTab: React.Dispatch<React.SetStateAction<selectedTab>>;
  flagData: flag;
  selectedTab: selectedTab;
}

export default function NewFlag({
  setSelectedTab,
  flagData,
  selectedTab,
}: Props) {
  const { risk, location, pest, plantPart } = flagData;
  const locations = [
    i18n.t("flag.top"),
    i18n.t("flag.middle"),
    i18n.t("flag.bottom"),
  ];
  return (
    <Animated.View
      entering={keyframe.duration(600)}
      exiting={SlideOutUp.duration(600)}
      style={styles.container}
    >
      <Animated.Image
        entering={FadeIn.delay(700).duration(700)}
        style={styles.image}
        source={newFlagIcon}
      />
      <View style={styles.row}>
        <AnimatedPressable
          onPress={() => setSelectedTab(optionsData[0])}
          style={styles.col}
          entering={FadeIn.delay(300)}
        >
          <View style={styles.title}>
            <Text
              style={[
                styles.titleTxt,
                (selectedTab.name === "risk" || risk) && styles.selected,
              ]}
            >
              {i18n.t("flag.riskCategory")}
            </Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.selectionImage}
              source={{ uri: `${API_URI}${flagData.risk?.imgUrl}` }}
            />
          </View>
          <View
            style={[
              styles.name,
              (selectedTab.name === "risk" || risk) && styles.selectedName,
              ,
              risk && styles.done,
            ]}
          >
            <Text
              numberOfLines={1}
              style={[styles.nameTxt, risk && styles.selectedTxt]}
            >
              {risk ? risk.name : "?"}
            </Text>
          </View>
        </AnimatedPressable>
        <AnimatedPressable
          onPress={() => setSelectedTab(optionsData[1])}
          style={styles.col}
          entering={FadeIn.delay(300)}
        >
          <View style={styles.title}>
            <Text
              style={[
                styles.titleTxt,
                (selectedTab.name === "pest" || pest) && styles.selected,
              ]}
            >
              {i18n.t("flag.type")}
            </Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.selectionImage}
              source={{ uri: `${API_URI}${flagData.pest?.imgUrl}` }}
            />
          </View>
          <View
            style={[
              styles.name,
              (selectedTab.name === "pest" || pest) && styles.selectedName,
              ,
              pest && styles.done,
            ]}
          >
            <Text
              numberOfLines={2}
              style={[styles.nameTxt, pest && styles.selectedTxt]}
            >
              {pest ? pest.name : "?"}
            </Text>
          </View>
        </AnimatedPressable>
        <AnimatedPressable
          onPress={() => setSelectedTab(optionsData[2])}
          style={styles.col}
          entering={FadeIn.delay(300)}
        >
          <View style={styles.title}>
            <Text
              style={[
                styles.titleTxt,
                (selectedTab.name === "plantPart" || plantPart) &&
                  styles.selected,
              ]}
            >
              {i18n.t("flag.plantPart")}
            </Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.selectionImage}
              source={{ uri: `${API_URI}${flagData.plantPart?.imgUrl}` }}
            />
          </View>
          <View
            style={[
              styles.name,
              (selectedTab.name === "plantPart" || plantPart) &&
                styles.selectedName,
              ,
              plantPart && styles.done,
            ]}
          >
            <Text style={[styles.nameTxt, plantPart && styles.selectedTxt]}>
              {plantPart ? plantPart.name : "?"}
            </Text>
          </View>
        </AnimatedPressable>
        <AnimatedPressable
          onPress={() => setSelectedTab(optionsData[3])}
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
              <View style={styles.gridCol}>
                {locations.map((item: string, index: number) => (
                  <View
                    key={index}
                    style={[
                      styles.gridItem,
                      flagData.location.left.includes(item) &&
                        styles.gridSelected,
                    ]}
                  ></View>
                ))}
              </View>
              <View style={styles.gridCol}>
                {locations.map((item: string, index: number) => (
                  <View
                    key={index}
                    style={[
                      styles.gridItem,
                      flagData.location.right.includes(item) &&
                        styles.gridSelected,
                    ]}
                  ></View>
                ))}
              </View>
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
            <Text
              style={[
                styles.locationNameTxt,
                (location.left.length > 0 || location.right.length > 0) &&
                  styles.selectedTxt,
              ]}
            >
              LEFT:{" "}
              {location.left.map(
                (item: string, index: number) => `${item.charAt(0)}`
              )}
            </Text>
            <Text
              style={[
                styles.locationNameTxt,
                (location.left.length > 0 || location.right.length > 0) &&
                  styles.selectedTxt,
              ]}
            >
              RIGHT:{" "}
              {location.right.map(
                (item: string, index: number) => `${item.charAt(0)}`
              )}
            </Text>
          </View>
        </AnimatedPressable>
      </View>
    </Animated.View>
  );
}
