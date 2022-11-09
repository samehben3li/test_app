import { Text, View, ScrollView, Image } from "react-native";
import i18n from "../i18n/translations";
import { flagListStyles as styles } from "../styles";
import { flagIcon } from "../assets";
import { GET_FLAGS } from "../requests/queries";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { flag } from "../types/interfaces";
import FlagCol from "./FlagCol";
import LoadingScreen from "../screens/Loading";

export default function FlagList() {
  const { data, loading } = useQuery(GET_FLAGS, { pollInterval: 1000 });
  const locations = [
    i18n.t("flag.top"),
    i18n.t("flag.middle"),
    i18n.t("flag.bottom"),
  ];
  return loading ? (
    <LoadingScreen />
  ) : (
    <ScrollView style={styles.container}>
      {data?.getFlags?.map((item: flag, index: number) => (
        <View key={item.id}>
          {(new Date(Number(item.createdAt)).getDate() <
            new Date(Number(data?.getFlags[index - 1]?.createdAt)).getDate() ||
            index === 0) && (
            <View style={styles.day}>
              <Text style={styles.dayText}>
                {moment(Number(item.createdAt)).format("MMM D, YYYY")}
              </Text>
            </View>
          )}
          <View style={styles.flagContainer}>
            <View style={styles.header}>
              <Image source={flagIcon} style={styles.img} />
              <Text style={styles.date}>
                {moment(Number(item.createdAt)).format("hh:mm A")}
              </Text>
            </View>
            <View style={styles.grid}>
              <FlagCol item={item.riskCategory} name="flag.riskCategory" />
              <FlagCol item={item.riskCategoryType} name="flag.type" />
              <FlagCol item={item.plantPart} name="flag.plantPart" />
              <View style={styles.col}>
                <View style={styles.title}>
                  <Text style={styles.titleTxt}>{i18n.t("flag.location")}</Text>
                </View>
                <View style={styles.selection}>
                  <View style={styles.locationGrid}>
                    <View style={styles.gridCol}>
                      {locations.map((location: string, index: number) => (
                        <View
                          key={index}
                          style={[
                            styles.gridItem,
                            item.location?.left.includes(location) &&
                              styles.gridSelected,
                          ]}
                        ></View>
                      ))}
                    </View>
                    <View style={styles.gridCol}>
                      {locations.map((location: string, index: number) => (
                        <View
                          key={index}
                          style={[
                            styles.gridItem,
                            item.location?.right.includes(location) &&
                              styles.gridSelected,
                          ]}
                        ></View>
                      ))}
                    </View>
                  </View>
                </View>
                <View style={styles.name}>
                  <Text style={styles.locationNameTxt}>
                    LEFT:
                    {item.location?.left.map(
                      (item: string, index: number) => ` ${item.charAt(0)}`
                    )}
                  </Text>
                  <Text style={styles.locationNameTxt}>
                    RIGHT:
                    {item.location?.right.map(
                      (item: string, index: number) => ` ${item.charAt(0)}`
                    )}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
