import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from "../styles/createFlag.style";
import ScreenSwitch from "../components/screenSwitch";
import FlagOptions from "../components/flagOptions";
import NewFlag from "../components/newFlag";
import { dummyData } from "./dummy";

export interface option {
  id: number;
  icon: any;
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
  location: option | null;
}

export default function CreateFlagScreen({ navigation }) {
  const [seletedTab, setSelectedTab] = useState<selectedTab>(dummyData[0]);
  const [flagData, setFlagData] = useState<flag>({
    risk: null,
    pest: null,
    plantPart: null,
    location: null,
  });
  useEffect(() => {
    console.log(flagData);
  }, [flagData]);
  return (
    <View style={styles.container}>
      <Header />
      <ScreenSwitch navigation={navigation} />
      <NewFlag
        selectedTab={seletedTab}
        flagData={flagData}
        setSelectedTab={setSelectedTab}
      />
      <FlagOptions
        flagData={flagData}
        setFlagData={setFlagData}
        data={seletedTab}
      />
    </View>
  );
}
