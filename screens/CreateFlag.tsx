import { View, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import {
  Header,
  ScreenSwitch,
  FlagOptions,
  NewFlag,
  FlagReady,
} from "../components";
import { createFlagStyles as styles } from "../styles";
import { optionsData } from "../data/options";
import { GET_RISKS, GET_PLANT_PARTS } from "../requests/queries";
import { useQuery } from "@apollo/client";
import { flagIcon } from "../assets";
import Animated, { Keyframe, Easing } from "react-native-reanimated";

export interface option {
  id: number;
  imgUrl: string;
  name: string;
}
export interface selectedTab {
  name: string;
  title: string;
  hint: string;
  options?: option[];
  location: boolean;
}
export interface flag {
  risk: option | null;
  pest: option | null;
  plantPart: option | null;
  location: {
    left: string[];
    right: string[];
  };
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const entering = new Keyframe({
  0: {
    width: 80,
    transform: [{ translateX: 0 }, { scale: 1 }, { translateY: 0 }],
    borderRadius: 10,
    opacity: 1,
  },
  5: {
    transform: [{ translateX: 65 }, { scale: 1 }, { translateY: 0 }],
    width: 80,
    borderRadius: 50,
    easing: Easing.ease,
  },
  30: {
    transform: [{ translateX: 65 }, { scale: 1 }, { translateY: 0 }],
    width: 80,
    borderRadius: 50,
    opacity: 1,
  },
  100: {
    transform: [
      { translateX: -windowWidth },
      { scale: 0 },
      { translateY: -windowHeight * 4 },
    ],
    opacity: 0,
    easing: Easing.ease,
  },
});
const enteringImg = new Keyframe({
  0: {
    transform: [{ translateX: -60 }, { scale: 0 }],
    opacity: 0,
  },
  100: {
    transform: [{ translateX: -60 }, { scale: 1 }],
    opacity: 1,
    easing: Easing.bounce,
  },
});

export default function CreateFlagScreen({ navigation, route }) {
  const [selectedTab, setSelectedTab] = useState<selectedTab>(optionsData[0]);
  const [options, setOptions] = useState<option[]>([]);
  const [flagData, setFlagData] = useState<flag>({
    risk: null,
    pest: null,
    plantPart: null,
    location: {
      left: [],
      right: [],
    },
  });
  // whether the flag ready to submit or not (if all options submitted it is ready)
  const [ready, setReady] = useState(false);

  // if the flag is submitted this will be temporarily true to desplay success screen
  const [done, setDone] = useState(false);

  const risks = useQuery(GET_RISKS);
  const plantParts = useQuery(GET_PLANT_PARTS);

  useEffect(() => {
    let timer: any;
    if (done) {
      timer = setTimeout(() => {
        setDone(false);
        setReady(false);
        setSelectedTab(optionsData[0]);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [done]);

  useEffect(() => {
    if (risks.data) {
      if (selectedTab.name === "risk") {
        const arr = risks.data.getRiskCategories.map((item: any) => {
          return { id: item.id, name: item.name, imgUrl: item.imgUrl };
        });
        setOptions(arr);
      } else if (selectedTab.name === "pest") {
        if (flagData.risk) {
          setOptions(
            risks.data.getRiskCategories.find(
              (item: option) => item.name === flagData?.risk?.name
            ).riskCategoryTypes
          );
        } else {
          setOptions([]);
        }
      } else if (selectedTab.name === "plantPart") {
        setOptions(plantParts.data.getPlantPart);
      }
    }
  }, [selectedTab, risks]);

  useEffect(() => {
    const currentIndex = optionsData.findIndex(
      (item) => item.name === selectedTab.name
    );
    if (currentIndex < 3 && flagData.risk) {
      setSelectedTab(optionsData[currentIndex + 1]);
    }
  }, [flagData]);

  return (
    <View style={styles.container}>
      <Header home={false} />
      <ScreenSwitch navigation={navigation} route={route} />
      <View style={{ flex: 1, overflow: "hidden" }}>
        {done ? (
          <View style={styles.done}>
            <Animated.View
              entering={entering.duration(2500)}
              style={styles.doneImgContainer}
            >
              <Animated.Image
                entering={enteringImg.duration(500).delay(400)}
                source={flagIcon}
                style={styles.img}
              />
            </Animated.View>
          </View>
        ) : (
          <NewFlag
            selectedTab={selectedTab}
            flagData={flagData}
            setSelectedTab={setSelectedTab}
            setCompleted={setReady}
          />
        )}
        {
          !done && (
            <FlagOptions
              setReady={setReady}
              flagData={flagData}
              setFlagData={setFlagData}
              data={selectedTab}
              options={options}
              selectedTab={selectedTab}
              setDone={setDone}
            />
          )
          // <FlagReady
          //   done={done}
          //   setDone={setDone}
          //   setFlagData={setFlagData}
          //   setReady={setReady}
          //   flagData={flagData}
          //   ready={ready}
          // />
        }
      </View>
    </View>
  );
}
