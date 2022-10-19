import { Text, View, Image, Pressable } from "react-native";
import i18n from "../i18n/tanslations";
import styles from "../styles/newFlag.style";
import newFlagIcon from "../assets/newFlag.png";
import { selectedTab, flag } from "../screens/createFlag";
import { dummyData } from "../screens/dummy";

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
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={newFlagIcon} />
      <View style={styles.row}>
        <Pressable
          onPress={() => setSelectedTab(dummyData[0])}
          style={[
            styles.col,
            (selectedTab.name === "risk" || risk) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("riskCategory")}</Text>
          </View>
          <View style={styles.selection}>
            <Image style={styles.image} source={flagData.risk?.icon} />
          </View>
          <View style={[styles.name, risk && styles.done]}>
            <Text style={styles.nameTxt}>{risk ? risk.name : "?"}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(dummyData[1])}
          style={[
            styles.col,
            (selectedTab.name === "pest" || pest) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("pestType")}</Text>
          </View>
          <View style={styles.selection}>
            <Image style={styles.image} source={flagData.pest?.icon} />
          </View>
          <View style={[styles.name, pest && styles.done]}>
            <Text style={styles.nameTxt}>{pest ? pest.name : "?"}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(dummyData[2])}
          style={[
            styles.col,
            (selectedTab.name === "plantPart" || plantPart) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("plantPart")}</Text>
          </View>
          <View style={styles.selection}>
            <Image style={styles.image} source={flagData.plantPart?.icon} />
          </View>
          <View style={[styles.name, plantPart && styles.done]}>
            <Text style={styles.nameTxt}>
              {plantPart ? plantPart.name : "?"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(dummyData[3])}
          style={[
            styles.col,
            (selectedTab.name === "location" || location) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("location")}</Text>
          </View>
          <View style={styles.selection}></View>
          <View style={[styles.name, location && styles.done]}>
            <Text style={styles.nameTxt}>?</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
