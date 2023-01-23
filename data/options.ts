import i18n from "../i18n/translations";
export const optionsData = [
  {
    name: "risk",
    title: i18n.t("flag.riskCategory"),
    hint: i18n.t("options.riskCategoryHint"),
    location: false,
    options: [],
  },
  {
    name: "pest",
    title: i18n.t("flag.type"),
    hint: i18n.t("options.typeHint"),
    location: false,
    options: [],
  },
  {
    name: "plantPart",
    title: i18n.t("flag.plantPart"),
    hint: i18n.t("options.plantPartHint"),
    location: false,
    options: [],
  },
  {
    name: "location",
    title: i18n.t("flag.location"),
    hint: i18n.t("options.locationHint"),
    location: true,
  },
];
