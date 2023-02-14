import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#212529",
      scrollHandle: "#343a40",
      scrollHandleHover: "#2e3338",
      primary: "#09bc8a",
      secondary: "#fdc500",
      text: {
        100: "#f8f9fa",
        200: "#e9ecef",
        300: "#dee2e6",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#f8f9fa",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: " #08aa7c",
      secondary: "#ff9f1c",
      text: {
        200: "#212529",
        100: "#171a1c",
        300: "#2d3339",
      },
    },
  },
};

export default theme;
