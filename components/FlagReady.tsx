import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import i18n from "../i18n/translations";
import { flagReadyStyles as styles } from "../styles";
import { helpIcon, lunaHelperIcon } from "../assets";
import GestureRecognizer from "react-native-swipe-gestures";
import { flag } from "../screens/CreateFlag";
import { CREATE_FLAG } from "../requests/mutations";
import { useMutation } from "@apollo/client";

interface Props {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  flagData: flag;
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
}

export default function FlagReady({
  setCompleted,
  flagData,
  setFlagData,
  setDone,
  done,
}: Props) {
  const [createFlag] = useMutation(CREATE_FLAG);
  const [loading, setLoading] = useState(false);
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
  if (!done) {
    return (
      <View style={styles.container}>
        <View style={styles.topPart}>
          <View style={styles.triangle}></View>
          <View style={styles.helpContainer}>
            <View style={styles.header}>
              <Image source={lunaHelperIcon} style={styles.imgWide} />
              <Image source={helpIcon} style={styles.imgIcon} />
            </View>
            <Text style={styles.helpText}>
              {i18n.t("flagReady.makeChangesHelp")}
            </Text>
          </View>
        </View>
        <GestureRecognizer
          onSwipeDown={() => setCompleted(false)}
          style={styles.bottomPart}
        >
          <Text style={styles.confirmText}>
            {i18n.t("flagReady.confirmSelection")}
          </Text>
          <Pressable
            onPress={submit}
            style={[
              styles.btn,
              {
                opacity: !loading ? 1 : 0.5,
              },
            ]}
          >
            <Text style={styles.btnText}>{i18n.t("flagReady.createFlag")}</Text>
          </Pressable>
          <Text style={styles.hint}>{i18n.t("flagReady.swipeHint")}</Text>
        </GestureRecognizer>
      </View>
    );
  }
}
