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

export const viewBadgeStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 10,
  borderWidth: 0
};