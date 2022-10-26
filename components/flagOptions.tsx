import { Text, View, Image, Pressable } from "react-native";
import { API_URI } from "@env";
import { useState, useEffect } from "react";
import i18n from "../i18n/tanslations";
import styles from "../styles/flagOptions.style";
import { selectedTab, flag, option } from "../screens/createFlag";
import GestureRecognizer from "react-native-swipe-gestures";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

interface Props {
  data: selectedTab;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  flagData: flag;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  options: option[];
}

export default function FlagOptions({
  data,
  setFlagData,
  flagData,
  setCompleted,
  options,
}: Props) {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (flagData[data.name]) {
      setSelected(flagData[data.name].id);
    }
  }, [data]);

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
  const locations = [i18n.t("top"), i18n.t("middle"), i18n.t("bottom")];
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={styles.container}
    >
      <GestureRecognizer
        onSwipeDown={() => {
          const { risk, plantPart, location, pest } = flagData;
          if (risk && plantPart && location && pest) {
            setCompleted(true);
          }
        }}
        style={styles.innerContainer}
      >
        <Text style={styles.hint}>{data.hint}</Text>
        <View style={styles.optionsContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.options}>
            {!data.location ? (
              options?.map((option) => (
                <View key={option.id} style={styles.optionContainer}>
                  <Pressable
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
                  </Pressable>
                  <Text style={styles.optionName}>{option.name}</Text>
                </View>
              ))
            ) : (
              <View style={styles.locationGrid}>
                <View style={styles.locationCol}>
                  {locations.map((item: string, index: number) => (
                    <Pressable
                      onPress={() => addLocation(item, "left")}
                      key={index}
                      style={[
                        styles.locationBtn,
                        flagData.location.left.includes(item) &&
                          styles.selected,
                      ]}
                    >
                      <Text style={styles.optionName}>{item}</Text>
                    </Pressable>
                  ))}
                  <Text style={styles.gridText}>{i18n.t("left")}</Text>
                </View>
                <View style={styles.locationCol}>
                  {locations.map((item: string, index: number) => (
                    <Pressable
                      onPress={() => addLocation(item, "right")}
                      key={index}
                      style={[
                        styles.locationBtn,
                        flagData.location.right.includes(item) &&
                          styles.selected,
                      ]}
                    >
                      <Text style={styles.optionName}>{item}</Text>
                    </Pressable>
                  ))}
                  <Text style={styles.gridText}>{i18n.t("right")}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </GestureRecognizer>
    </Animated.View>
  );
}
