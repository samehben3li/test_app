import { Text, View, ScrollView, Image } from "react-native";
import { useEffect } from "react";
import i18n from "../i18n/tanslations";
import styles from "../styles/flagList.style";
import flagIcon from "../assets/flag.png";
import { GET_FLAGS } from "../requests/queries";
import { useQuery } from "@apollo/client";
import { API_URI } from "@env";
import moment from "moment";

export default function FlagList() {
  const { data, loading, error } = useQuery(GET_FLAGS, { pollInterval: 1000 });
  useEffect(() => {
    if (data) {
      const date = new Date(Number(data.getFlags[13].createdAt));
      console.log(moment(date).format("MMMM Do YYYY, h:mm:ss a"));
      console.log(date.getDate());
      console.log(date.toLocaleTimeString());
    }
  }, [data]);
  const locations = [i18n.t("top"), i18n.t("middle"), i18n.t("bottom")];
  return (
    <ScrollView style={styles.container}>
      {data?.getFlags?.map((item, index) => (
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
              <View style={styles.col}>
                <View style={styles.title}>
                  <Text style={styles.titleTxt}>{i18n.t("riskCategory")}</Text>
                </View>
                <View style={styles.selection}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${API_URI}${item.riskCategory?.imgUrl}` }}
                  />
                </View>
                <View style={styles.name}>
                  <Text style={styles.nameTxt}>{item.riskCategory?.name}</Text>
                </View>
              </View>
              <View style={styles.col}>
                <View style={styles.title}>
                  <Text style={styles.titleTxt}>{i18n.t("pestType")}</Text>
                </View>
                <View style={styles.selection}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${API_URI}${item.riskCategoryType?.imgUrl}`,
                    }}
                  />
                </View>
                <View style={styles.name}>
                  <Text style={styles.nameTxt}>
                    {item.riskCategoryType?.name}
                  </Text>
                </View>
              </View>
              <View style={styles.col}>
                <View style={styles.title}>
                  <Text style={styles.titleTxt}>{i18n.t("plantPart")}</Text>
                </View>
                <View style={styles.selection}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${API_URI}${item.plantPart?.imgUrl}` }}
                  />
                </View>
                <View style={styles.name}>
                  <Text style={styles.nameTxt}>{item.plantPart?.name}</Text>
                </View>
              </View>
              <View style={styles.col}>
                <View style={styles.title}>
                  <Text style={styles.titleTxt}>{i18n.t("location")}</Text>
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
                    LEFT:{" "}
                    {item.location?.left.map(
                      (item: string, index: number) => `${item.charAt(0)}`
                    )}
                  </Text>
                  <Text style={styles.locationNameTxt}>
                    RIGHT:{" "}
                    {item.location?.right.map(
                      (item: string, index: number) => `${item.charAt(0)}`
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
