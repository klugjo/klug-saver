import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import Base from './Base';

export interface IGettingStartedProps {
  goNext: () => {};
  theme: IThemeConstants;
};

const GettingStartedBase = ({ goNext, theme }: IGettingStartedProps) => {
  return <Base goNext={goNext} title="Getting Started">
    <Text>Swipe right and left to navigate the 4 screens</Text>
    <Text>1. Add new expense screen</Text>
    <Text>2. List of latest expense</Text>
    <Text>3. Summary and Analytics</Text>
    <Text>4. Backup and Settings</Text>
  </Base>;
};

export default withTheme(GettingStartedBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  }
});