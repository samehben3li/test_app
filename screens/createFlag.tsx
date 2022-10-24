import { View } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from "../styles/createFlag.style";
import ScreenSwitch from "../components/screenSwitch";
import FlagOptions from "../components/flagOptions";
import NewFlag from "../components/newFlag";
import FlagReady from "../components/flagReady";
import { optionsData } from "./options";
import { GET_RISKS, GET_PLANT_PARTS } from "../requests/queries";
import { useQuery } from "@apollo/client";

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
  const risks = useQuery(GET_RISKS);
  const plantParts = useQuery(GET_PLANT_PARTS);
  // useEffect(() => {
  //   if (risks.data) {
  //     setOptions(risks.data.getRiskCategories);
  //   }
  // }, [risks]);
  useEffect(() => {
    // console.log(options);
  }, [options]);
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
      <Header />
      <ScreenSwitch navigation={navigation} route={route} />
      <NewFlag
        selectedTab={selectedTab}
        flagData={flagData}
        setSelectedTab={setSelectedTab}
      />
      {!completed ? (
        <FlagOptions
          setCompleted={setCompleted}
          flagData={flagData}
          setFlagData={setFlagData}
          data={selectedTab}
          options={options}
        />
      ) : (
        <FlagReady setCompleted={setCompleted} flagData={flagData} />
      )}
    </View>
  );
}
