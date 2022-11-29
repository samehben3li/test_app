import { Text, View, Image, Pressable, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { flagOptionsStyles as styles } from "../styles";
import { selectedTab, flag, option } from "../screens/CreateFlag";
import GestureRecognizer from "react-native-swipe-gestures";
import LocationsCol from "./LocationsCol";
import Animated, {
  SlideInDown,
  SlideOutDown,
  Keyframe,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const keyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: 10 }],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
});

interface Props {
  data: selectedTab;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  flagData: flag;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  options: option[];
  selectedTab: selectedTab;
}

export default function FlagOptions({
  data,
  setFlagData,
  flagData,
  setReady,
  options,
  selectedTab,
}: Props) {
  const windowWidth = Dimensions.get("window").width;
  const [selected, setSelected] = useState(0);
  const [indicatorPos, setIndicatorPos] = useState(0);
  const [indicatorLinePos, setIndicatorLinePos] = useState(100);

  useEffect(() => {
    if (flagData[data.name]) {
      setSelected(flagData[data.name].id);
    }
  }, [data]);

  useEffect(() => {
    if (selectedTab.name === "risk") {
      setIndicatorPos(-windowWidth / 3.2);
    } else if (selectedTab.name === "pest") {
      setIndicatorPos(-windowWidth / 10);
    } else if (selectedTab.name === "plantPart") {
      setIndicatorPos(windowWidth / 10);
    } else if (selectedTab.name === "location") {
      setIndicatorPos(windowWidth / 3.2);
    } else {
      setIndicatorPos(0);
    }
  }, [selectedTab]);

  useEffect(() => {
    const indicatorInterval = setInterval(() => {
      setIndicatorLinePos((prev) => -prev);
    }, 1000);
    return () => {
      clearInterval(indicatorInterval);
    };
  }, []);

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(indicatorPos, { stiffness: 50 }) }],
    };
  });

  const choose = (selection: option) => {
    setFlagData((prev) => {
      return { ...prev, [data.name]: selection };
    });
    setSelected(selection.id);
  };

  const addLocation = (location: string, side: string) => {
    let arr = flagData.location[side];
    const index = arr.indexOf(location);
    if (index > -1) {
      arr.splice(index, 1);
    } else {
      arr = [...arr, location];
    }
    const newValue = { ...flagData.location, [side]: arr };
    setFlagData((prev) => {
      return { ...prev, location: newValue };
    });
  };

  const locations = [
    i18n.t("flag.top"),
    i18n.t("flag.middle"),
    i18n.t("flag.bottom"),
  ];

  return (
    <Animated.View
      entering={SlideInDown.duration(600)}
      exiting={SlideOutDown.duration(600)}
      style={styles.container}
    >
      <GestureRecognizer
        onSwipeDown={() => {
          const { risk, plantPart, location, pest } = flagData;
          if (risk && plantPart && location && pest) {
            setReady(true);
          }
        }}
        style={styles.innerContainer}
      >
        {/* <Animated.View style={[styles.indicatorLine, uas]}></Animated.View> */}
        <Animated.View style={[styles.indicator, uas]}></Animated.View>
        <Animated.Text
          entering={keyframe.duration(400).delay(700)}
          style={styles.hint}
        >
          {data.hint}
        </Animated.Text>
        <View style={styles.optionsContainer}>
          <Animated.Text entering={SlideInDown} style={styles.title}>
            {data.title}
          </Animated.Text>
          <View style={styles.options}>
            {!data.location ? (
              options?.map((option) => (
                <View key={option.id} style={styles.optionContainer}>
                  <AnimatedPressable
                    entering={FadeIn.delay(500)}
                    exiting={FadeOut}
                    onPress={() => choose(option)}
                    style={[
                      styles.btn,
                      selected === option.id && styles.selected,
                    ]}
                  >
                    <Image
                      source={{ uri: `${API_URI}${option.imgUrl}` }}
                      style={styles.image}
                    />
                  </AnimatedPressable>
                  <Animated.Text
                    entering={FadeIn.delay(500)}
                    exiting={FadeOut}
                    numberOfLines={1}
                    style={styles.optionName}
                  >
                    {option.name}
                  </Animated.Text>
                </View>
              ))
            ) : (
              <View style={styles.locationGrid}>
                <LocationsCol
                  addLocation={addLocation}
                  side="left"
                  flagData={flagData}
                />
                <LocationsCol
                  addLocation={addLocation}
                  side="right"
                  flagData={flagData}
                />
              </View>
            )}
          </View>
        </View>
      </GestureRecognizer>
    </Animated.View>
  );
}
