import React from 'react';
import { KSCard } from '../../../components/KSCard';
import { KSRadioButtons } from '../../../components/KSRadioButtons';
import { ThemeType } from '../../../constants/common';
import darkTheme from '../../../theme/dark';
import lightTheme from '../../../theme/light';
import { withTheme } from '../../../theme/withTheme';
import { IThemeConstants } from '../../../typings';

export interface IThemePickerProps {
  theme: IThemeConstants;
  setTheme: (theme: IThemeConstants) => void;
};

const ThemePickerBase = ({ theme, setTheme }: IThemePickerProps) => {
  return <KSCard text="THEME">
    <KSRadioButtons
      items={[
        {
          text: 'Light',
          onPress: () => setTheme(lightTheme),
          selected: theme.type === ThemeType.Light
        },
        {
          text: 'Dark',
          onPress: () => setTheme(darkTheme),
          selected: theme.type === ThemeType.Dark
        }
      ]}
    />
  </KSCard>
};

export const ThemePicker = withTheme(ThemePickerBase);
