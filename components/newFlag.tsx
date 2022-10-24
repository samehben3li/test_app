import { Text, View, Image, Pressable } from "react-native";
import { API_URI } from "@env";
import i18n from "../i18n/tanslations";
import styles from "../styles/newFlag.style";
import newFlagIcon from "../assets/newFlag.png";
import { selectedTab, flag } from "../screens/createFlag";
import { optionsData } from "../screens/options";

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
  const locations = [i18n.t("top"), i18n.t("middle"), i18n.t("bottom")];
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
            <Text style={styles.titleTxt}>{i18n.t("riskCategory")}</Text>
          </View>
          <View style={styles.selection}>
            <Image
              style={styles.image}
              source={{ uri: `${API_URI}${flagData.risk?.imgUrl}` }}
            />
          </View>
          <View style={[styles.name, risk && styles.done]}>
            <Text style={[styles.nameTxt, risk && styles.selectedTxt]}>
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
            <Text style={styles.titleTxt}>{i18n.t("pestType")}</Text>
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
            <Text style={styles.titleTxt}>{i18n.t("plantPart")}</Text>
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
            <Text style={styles.titleTxt}>{i18n.t("location")}</Text>
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
              <Text>
                LEFT:{" "}
                {location.left.map(
                  (item: string, index: number) => `${item.charAt(0)}`
                )}
                {"\n"}
              </Text>
              <Text>
                RIGHT:{" "}
                {location.right.map(
                  (item: string, index: number) => `${item.charAt(0)}`
                )}
              </Text>
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
