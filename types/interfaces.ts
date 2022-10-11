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
