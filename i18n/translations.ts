import { I18n } from "i18n-js";

const translations = {
  en: {
    login: {
      login: "Login",
      welcome: "Welcome",
      email: "Email Address",
      password: "Password",
      invalidEmail: "Please enter a valid email",
      required: "Required",
      inputLonger: "Must be longer than {1}",
      inputShorter: "Must be shorter than {1}",
    },
    header: {
      TomatoTrolley: "Tomato Trolley",
    },
    utils: {
      loading: "Loading...",
    },
  },
};
const i18n = new I18n(translations);
export default i18n;
