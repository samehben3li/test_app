export interface userData {
  id: string;
  username: string;
  email: string;
}
export interface authData {
  accessToken: string;
  user: userData;
}
export interface authContextType {
  auth: authData | null;
  setAuth: React.Dispatch<React.SetStateAction<null | authData>>;
}
export interface flagTab {
  name: string;
  imgUrl: string;
}
export interface flag {
  id: string;
  createdAt: string;
  riskCategory: flagTab;
  riskCategoryType: flagTab;
  plantPart: flagTab;
  location: {
    left: string[];
    right: string[];
  };
}
