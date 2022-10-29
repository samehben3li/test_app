import { View } from "react-native";
import { useState } from "react";
import {
  Header,
  ScreenSwitch,
  FlagOptions,
  NewFlag,
  FlagReady,
} from "../components";
import { createFlagStyles as styles } from "../styles";
import { dummyData } from "../data/dummy";

export interface option {
  id: number;
  icon: string;
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
  const [seletedTab, setSelectedTab] = useState<selectedTab>(dummyData[0]);
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
  return (
    <View style={styles.container}>
      <Header />
      <ScreenSwitch navigation={navigation} route={route} />
      <NewFlag
        selectedTab={seletedTab}
        flagData={flagData}
        setSelectedTab={setSelectedTab}
      />
      {!completed ? (
        <FlagOptions
          setCompleted={setCompleted}
          flagData={flagData}
          setFlagData={setFlagData}
          data={seletedTab}
        />
      ) : (
        <FlagReady setCompleted={setCompleted} />
      )}
    </View>
  );
}
