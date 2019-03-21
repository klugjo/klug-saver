import React from 'react';
import { KSCard } from '../../../components/KSCard';
import { KSRadioButtons } from '../../../components/KSRadioButtons';
import { ThemeType } from '../../../constants/common';
import { IThemeConstants } from '../../../typings';

export interface IThemePickerProps {
  theme: IThemeConstants;
  changeTheme: (theme: ThemeType) => void;
};

export const ThemePicker = ({ theme, changeTheme }: IThemePickerProps) => {
  return <KSCard text="THEME">
    <KSRadioButtons
      items={[
        {
          text: 'Light',
          onPress: () => changeTheme(ThemeType.Light),
          selected: theme.type === ThemeType.Light
        },
        {
          text: 'Dark',
          onPress: () => changeTheme(ThemeType.Dark),
          selected: theme.type === ThemeType.Dark
        }
      ]}
    />
  </KSCard>
};
