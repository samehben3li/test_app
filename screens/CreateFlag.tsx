import { View, Image } from "react-native";
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
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";

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
  const [completed, setCompleted] = useState(false);
  const [done, setDone] = useState(false);
  const risks = useQuery(GET_RISKS);
  const plantParts = useQuery(GET_PLANT_PARTS);
  useEffect(() => {
    let timer: any;
    if (done) {
      timer = setTimeout(() => {
        setDone(false);
        setCompleted(false);
        setSelectedTab(optionsData[0]);
      }, 3000);
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
              entering={ZoomIn}
              exiting={ZoomOut}
              style={styles.doneImgContainer}
            >
              <Image source={flagIcon} style={styles.img} />
            </Animated.View>
          </View>
        ) : (
          <NewFlag
            selectedTab={selectedTab}
            flagData={flagData}
            setSelectedTab={setSelectedTab}
          />
        )}
        {!completed ? (
          <FlagOptions
            setCompleted={setCompleted}
            flagData={flagData}
            setFlagData={setFlagData}
            data={selectedTab}
            options={options}
          />
        ) : (
          <FlagReady
            done={done}
            setDone={setDone}
            setFlagData={setFlagData}
            setCompleted={setCompleted}
            flagData={flagData}
          />
        )}
      </View>
    </View>
  );
}
