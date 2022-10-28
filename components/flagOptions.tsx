import { Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import i18n from "../i18n/tanslations";
import { flagOptionsStyles as styles } from "../styles";
import { selectedTab, flag, option } from "../screens/CreateFlag";
import GestureRecognizer from "react-native-swipe-gestures";

interface Props {
  data: selectedTab;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  flagData: flag;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FlagOptions({
  data,
  setFlagData,
  flagData,
  setCompleted,
}: Props) {
  const [selected, setSelected] = useState(0);
  const [touchY, setTouchY] = useState(0);

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
    <GestureRecognizer
      onSwipeDown={() => setCompleted(true)}
      style={styles.container}
    >
      <Text style={styles.hint}>{data.hint}</Text>
      <View style={styles.optionsContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.options}>
          {!data.location ? (
            data.options?.map((option) => (
              <View key={option.id} style={styles.optionContainer}>
                <Pressable
                  onPress={() => choose(option)}
                  style={[
                    styles.btn,
                    selected === option.id && styles.selected,
                  ]}
                >
                  <Image source={option.icon} style={styles.image} />
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
                      flagData.location.left.includes(item) && styles.selected,
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
                      flagData.location.right.includes(item) && styles.selected,
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
  );
}
