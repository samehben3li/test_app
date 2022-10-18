import { I18n } from "i18n-js";

const translations = {
  en: {
    welcome: "Welcome",
    email: "Email Address",
    password: "Password",
    login: "Login",
    invalidEmail: "Please enter a valid email",
    required: "Required",
    inputLonger: "Must be longer than {1}",
    inputShorter: "Must be shorter than {1}",
    TomatoTrolley: "Tomato Trolley",
    loading: "Loading...",
    riskCategory: "RISK CATEGORY",
    pestType: "PEST TYPE",
    plantPart: "PLANT PART",
    location: "LOCATION",
  },
};
const i18n = new I18n(translations);
export default i18n;
