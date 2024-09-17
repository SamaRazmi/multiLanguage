"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import DarkTheme from "@/styles/dark";
import LightTheme from "@/styles/light";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  ...LightTheme,
  typography: {
    fontFamily: `"IRANYekan", ${roboto.style.fontFamily}, Arial, sans-serif`,
  },
});

export default theme;
