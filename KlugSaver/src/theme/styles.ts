import { getTheme } from "./utils";

export const textStyleBase = {
  fontFamily: getTheme().fontMain,
  color: getTheme().textMain
};

export const textStyleThin = {
  fontFamily: getTheme().fontThin,
  color: getTheme().textMain
};

export const textStyleHeader = {
  fontFamily: getTheme().fontMain,
  color: getTheme().textMain,
  fontSize: 20
};