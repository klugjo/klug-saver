import { getTheme } from "./utils";

export const textStyleBase = {
  fontFamily: getTheme().fontMain,
  color: getTheme().textMainColor
};

export const textStyleThin = {
  fontFamily: getTheme().fontThin,
  color: getTheme().textMainColor
};

export const textStyleHeader = {
  fontFamily: getTheme().fontMain,
  color: getTheme().textMainColor,
  fontSize: 20
};

export const viewBadgeStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 10,
  borderWidth: 0
};