import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeType } from '../../../constants/common';
import { KSCard } from '../../../components/KSCard';
import { KSRadioButtons } from '../../../components/KSRadioButtons';

export interface IThemePickerProps {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export const ThemePicker = ({ theme, changeTheme }: IThemePickerProps) => {
  return <KSCard text="THEME">
    <KSRadioButtons
      items={[
        {
          text: 'Light',
          onPress: () => changeTheme(ThemeType.Light),
          selected: theme === ThemeType.Light
        },
        {
          text: 'Dark',
          onPress: () => changeTheme(ThemeType.Dark),
          selected: theme === ThemeType.Dark
        }
      ]}
    />
  </KSCard>
};
