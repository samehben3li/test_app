import { Text, View, Image, Pressable } from "react-native";
import i18n from "../i18n/translations";
import { newFlagStyles as styles } from "../styles";
import { newFlagIcon } from "../assets";
import { selectedTab, flag } from "../screens/CreateFlag";
import { optionsData } from "../data/options";
import { API_URI } from "../utils/config";

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
    <View style={styles.container}>
      <Image style={styles.image} source={newFlagIcon} />
      <View style={styles.row}>
        <Pressable
          onPress={() => setSelectedTab(optionsData[0])}
          style={[
            styles.col,
            (selectedTab.name === "risk" || risk) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("flag.riskCategory")}</Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.image}
              source={{ uri: `${API_URI}${flagData.risk?.imgUrl}` }}
            />
          </View>
          <View style={[styles.name, risk && styles.done]}>
            <Text
              numberOfLines={1}
              style={[styles.nameTxt, risk && styles.selectedTxt]}
            >
              {risk ? risk.name : "?"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(optionsData[1])}
          style={[
            styles.col,
            (selectedTab.name === "pest" || pest) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("flag.pestType")}</Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.image}
              source={{ uri: `${API_URI}${flagData.pest?.imgUrl}` }}
            />
          </View>
          <View style={[styles.name, pest && styles.done]}>
            <Text style={[styles.nameTxt, pest && styles.selectedTxt]}>
              {pest ? pest.name : "?"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(optionsData[2])}
          style={[
            styles.col,
            (selectedTab.name === "plantPart" || plantPart) && styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("flag.plantPart")}</Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.image}
              source={{ uri: `${API_URI}${flagData.plantPart?.imgUrl}` }}
            />
          </View>
          <View style={[styles.name, plantPart && styles.done]}>
            <Text style={[styles.nameTxt, plantPart && styles.selectedTxt]}>
              {plantPart ? plantPart.name : "?"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSelectedTab(optionsData[3])}
          style={[
            styles.col,
            (selectedTab.name === "location" ||
              location.left.length > 0 ||
              location.right.length > 0) &&
              styles.selected,
          ]}
        >
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("flag.location")}</Text>
          </View>
          <View style={styles.selection}>
            <View style={styles.grid}>
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
        </Pressable>
      </View>
    </View>
  );
}
