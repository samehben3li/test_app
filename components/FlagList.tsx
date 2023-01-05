import { Text, View, ScrollView, Image } from "react-native";
import i18n from "../i18n/translations";
import { flagListStyles as styles } from "../styles";
import { flagIcon, shapeIcon } from "../assets";
import { GET_FLAGS } from "../requests/queries";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { flag } from "../types/interfaces";
import FlagCol from "./FlagCol";
import LoadingScreen from "../screens/Loading";

const locations = [
  i18n.t("flag.top"),
  i18n.t("flag.middle"),
  i18n.t("flag.bottom"),
];

const GridCol = ({ item, side }: { item: flag; side: string }) => {
  return (
    <View style={styles.gridCol}>
      {locations.map((location: string, index: number) => (
        <View
          key={index}
          style={[
            styles.gridItem,
            item.location[side].includes(location) && styles.gridSelected,
          ]}
        ></View>
      ))}
    </View>
  );
};

const LocationsText = ({ arr, side }: { arr: string[]; side: string }) => {
  return (
    <Text style={styles.locationNameTxt}>
      {side}
      {arr.map((item: string, index: number) =>
        index !== 0 ? `,${item.charAt(0)}` : item.charAt(0)
      )}
    </Text>
  );
};

const LocationCol = ({ item }: { item: flag }) => {
  return (
    <View style={styles.col}>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>{i18n.t("flag.location")}</Text>
      </View>
      <View style={styles.selection}>
        <View style={styles.locationGrid}>
          <GridCol side="left" item={item} />
          {item.plantPart?.name !== "FRUIT" && (
            <GridCol side="right" item={item} />
          )}
        </View>
      </View>
      <View style={styles.name}>
        {item.plantPart?.name !== "FRUIT" ? (
          <>
            <LocationsText
              arr={item.location?.left}
              side={`${i18n.t("flag.left")}:`}
            />
            <LocationsText
              arr={item.location?.right}
              side={`${i18n.t("flag.right")}:`}
            />
          </>
        ) : (
          <LocationsText arr={item.location?.left} side="" />
        )}
      </View>
    </View>
  );
};
const FlagDate = ({
  item,
  data,
  index,
}: {
  item: flag;
  data: any;
  index: number;
}) => {
  const currentFlagDate = new Date(Number(item.createdAt)).getDate();
  const previousFlagDate = new Date(
    Number(data?.getFlags[index - 1]?.createdAt)
  ).getDate();
  const isDifferentDay = currentFlagDate < previousFlagDate || index === 0;
  return isDifferentDay ? (
    <View style={styles.day}>
      <Text style={styles.dayText}>
        {moment(Number(item.createdAt)).format("MMM D, YYYY")}
      </Text>
    </View>
  ) : (
    <></>
  );
};

const FlagsGrid = ({ item }: { item: flag }) => {
  const { riskCategory, riskCategoryType, plantPart } = item;
  return (
    <View style={styles.grid}>
      <FlagCol item={riskCategory} name="flag.riskCategory" />
      <FlagCol item={riskCategoryType} name="flag.type" />
      <FlagCol item={plantPart} name="flag.plantPart" />
      <LocationCol item={item} />
    </View>
  );
};

export default function FlagList() {
  const { data, loading } = useQuery(GET_FLAGS, { pollInterval: 1000 });

  return loading ? (
    <LoadingScreen />
  ) : (
    <ScrollView style={styles.container}>
      {data?.getFlags?.map((item: flag, index: number) => (
        <View key={item.id}>
          <FlagDate item={item} index={index} data={data} />
          <View style={styles.flagContainer}>
            <View style={styles.header}>
              <View style={styles.flagTime}>
                <Image source={flagIcon} style={styles.img} />
                <Text style={styles.date}>
                  {moment(Number(item.createdAt)).format("hh:mm A")}
                </Text>
              </View>
              <View style={styles.flagName}>
                <Image source={shapeIcon} style={styles.shapeIcon} />
                <Text style={styles.flagNameText}>POSTS 6 - 7 | ROW 12</Text>
              </View>
            </View>
            <FlagsGrid item={item} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
