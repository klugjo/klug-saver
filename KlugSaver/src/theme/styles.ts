import { getTheme } from "./utils";

export const textStyleBase = {
  fontFamily: theme.fontMain,
  color: theme.textMainColor
};

export const textStyleThin = {
  fontFamily: theme.fontThin,
  color: theme.textMainColor
};

export const textStyleHeader = {
  fontFamily: theme.fontMain,
  color: theme.textMainColor,
  fontSize: 20
};

export const viewBadgeStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 10,
  borderWidth: 0
};

export const dropShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
}