import {
  View,
  Dimensions,
  ScrollView,
  Pressable,
  Text,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { flagOptionsStyles as styles } from "../styles";
import { selectedTab, flag, option } from "../screens/CreateFlag";
import GestureRecognizer from "react-native-swipe-gestures";
import LocationsCol from "./LocationsCol";
import Animated, {
  SlideInDown,
  SlideOutDown,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import keyframe from "./FlagOptions.animation";
import { SvgUri } from "react-native-svg";
import i18n from "../i18n/translations";
import { CREATE_FLAG } from "../requests/mutations";
import { useMutation } from "@apollo/client";
import { flagIcon } from "../assets";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  data: selectedTab;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  flagData: flag;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  options: option[];
  selectedTab: selectedTab;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const windowWidth = Dimensions.get("window").width;

export default function FlagOptions({
  data,
  setFlagData,
  flagData,
  setReady,
  options,
  selectedTab,
  setDone,
}: Props) {
  const [selected, setSelected] = useState(0);
  const [indicatorPos, setIndicatorPos] = useState(0);
  const [createFlag] = useMutation(CREATE_FLAG);
  const [loading, setLoading] = useState(false);

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

  const submit = async () => {
    setLoading(true);
    const { risk, plantPart, location, pest } = flagData;
    const inputValues = {
      riskCategory: {
        name: risk?.name,
        imgUrl: risk?.imgUrl,
      },
      riskCategoryType: {
        name: pest?.name,
        imgUrl: pest?.imgUrl,
      },
      plantPart: {
        name: plantPart?.name,
        imgUrl: plantPart?.imgUrl,
      },
      location: location,
    };
    try {
      const data = await createFlag({ variables: inputValues });
      if (data) {
        setLoading(false);
        setDone(true);
        setFlagData({
          risk: null,
          pest: null,
          plantPart: null,
          location: {
            left: [],
            right: [],
          },
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        setLoading(false);
        alert(err.message);
      }
    }
  };

  return (
    <Animated.View
      entering={SlideInDown.duration(600)}
      exiting={SlideOutDown.duration(600)}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {/* <Animated.View style={[styles.indicatorLine, uas]}></Animated.View> */}
        <Animated.View style={[styles.indicator, uas]}></Animated.View>
        <Animated.Text
          entering={keyframe.duration(400)?.delay(700)}
          style={styles.hint}
        >
          {data.hint}
        </Animated.Text>
        <View style={styles.optionsContainer}>
          <Animated.Text entering={SlideInDown} style={styles.title}>
            {data.title}
          </Animated.Text>
          <ScrollView
            style={styles.options}
            contentContainerStyle={styles.scroll}
            persistentScrollbar={true}
          >
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
                    <SvgUri height={"55%"} width={"100%"} uri={option.imgUrl} />
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
                <View style={styles.locationOptions}>
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
                <Pressable
                  onPress={submit}
                  style={[
                    styles.submitBtn,
                    {
                      opacity: !loading ? 1 : 0.5,
                    },
                  ]}
                >
                  <Image style={styles.flagIcon} source={flagIcon} />
                  <Text style={styles.btnText}>
                    {i18n.t("flagReady.createFlag")}
                  </Text>
                </Pressable>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Animated.View>
  );
}
