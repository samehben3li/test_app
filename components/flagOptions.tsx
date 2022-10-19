import { Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import i18n from "../i18n/tanslations";
import styles from "../styles/flagOptions.style";
import { selectedTab, flag, option } from "../screens/createFlag";

interface Props {
  data: selectedTab;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  flagData: flag;
}

export default function FlagOptions({ data, setFlagData, flagData }: Props) {
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
  return (
    <View style={styles.container}>
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
            <Text>location options</Text>
          )}
        </View>
      </View>
    </View>
  );
}
