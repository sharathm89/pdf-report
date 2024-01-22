import { atom } from "recoil";

export const tableContentAtom = atom({
  key: "tableContentState",
  // default: [
  //   { title: "Digital Risk Rating", page: "01" },
  //   { title: "Risk Scorecard", page: "02" },
  //   { title: "Executive Risk Summary", page: "04" },
  //   { title: "Third Party Risk Summary", page: "14" },
  //   { title: "Risk Indicators", page: "19" },
  //   { title: "Asset Reputation", page: "20" },
  //   { title: "DNS Health", page: "32" },
  //   { title: "Network Security", page: "33" },
  //   { title: "Patching Cadence", page: "34" },
  //   { title: "Data Leakage Findings", page: "35" },
  //   { title: "Social media impersonation", page: "36" },
  // ],
  default: [],
});
