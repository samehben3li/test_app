import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import i18n from "../i18n/translations";
import { flagReadyStyles as styles } from "../styles";
import { helpIcon, lunaHelperIcon } from "../assets";
import GestureRecognizer from "react-native-swipe-gestures";
import { flag } from "../screens/CreateFlag";
import { CREATE_FLAG } from "../requests/mutations";
import { useMutation } from "@apollo/client";
import Animated, {
  SlideInDown,
  SlideOutDown,
  FadeIn,
  SlideInUp,
  StretchInY,
  FadeInUp,
  FadeInDown,
  StretchInX,
  Easing,
  StretchOutX,
  StretchOutY,
  FadeOutDown,
} from "react-native-reanimated";

const AnimatedGesture = Animated.createAnimatedComponent(GestureRecognizer);

interface Props {
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  flagData: flag;
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setFlagData: React.Dispatch<React.SetStateAction<flag>>;
  ready: boolean;
}

export default function FlagReady({
  setReady,
  flagData,
  setFlagData,
  setDone,
  done,
  ready,
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
  return !done && ready ? (
    <Animated.View style={styles.container}>
      <Animated.View
        entering={StretchInY.springify()}
        exiting={StretchOutY}
        style={styles.topPart}
      >
        <View style={styles.triangle}></View>
        <View style={styles.helpContainer}>
          <View style={styles.header}>
            <Animated.Image
              entering={StretchInX.delay(500).springify()}
              exiting={StretchOutX.delay(500).springify()}
              source={lunaHelperIcon}
              style={styles.imgWide}
            />
            <Animated.Image
              entering={FadeInDown.delay(1000).easing(Easing.ease)}
              exiting={FadeOutDown.delay(1000).easing(Easing.ease)}
              source={helpIcon}
              style={styles.imgIcon}
            />
          </View>
          <Animated.Text
            entering={FadeInDown.delay(1100).easing(Easing.ease)}
            exiting={FadeOutDown.delay(1100).easing(Easing.ease)}
            style={styles.helpText}
          >
            {i18n.t("flagReady.makeChangesHelp")}
          </Animated.Text>
        </View>
      </Animated.View>
      <AnimatedGesture
        entering={SlideInDown.duration(600)}
        exiting={SlideOutDown.duration(600)}
        onSwipeDown={() => setReady(false)}
        style={styles.bottomPart}
      >
        <Animated.Text
          entering={FadeInDown.delay(1200).easing(Easing.ease)}
          style={styles.confirmText}
        >
          {i18n.t("flagReady.confirmSelection")}
        </Animated.Text>
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
        <Animated.Text
          entering={SlideInDown.delay(1300).easing(Easing.ease)}
          style={styles.hint}
        >
          {i18n.t("flagReady.swipeHint")}
        </Animated.Text>
      </AnimatedGesture>
    </Animated.View>
  ) : (
    <></>
  );
}
