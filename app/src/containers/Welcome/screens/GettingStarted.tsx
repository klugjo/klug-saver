import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { textStyleBase } from '../../../theme/styles';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import Base from './Base';

export interface IGettingStartedProps {
  goNext: () => {};
  theme: IThemeConstants;
};

const GettingStartedBase = ({ goNext, theme }: IGettingStartedProps) => {
  return <Base goNext={goNext} title="Getting Started">
    <View style={styles(theme).root}>
      <Text style={styles(theme).title}>Swipe right and left to navigate the 4 screens</Text>
      <Text style={styles(theme).text}>1. Add new expense screen</Text>
      <Text style={styles(theme).text}>2. List of latest expenses</Text>
      <Text style={styles(theme).text}>3. Summary and Analytics</Text>
      <Text style={styles(theme).text}>4. Backup and Settings</Text>
    </View>
  </Base>;
};

export default withTheme(GettingStartedBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.backgroundMainColor
  },
  title: {
    ...textStyleBase(theme),
    marginBottom: 40
  },
  text: {
    marginLeft: 10,
    marginBottom: 20,
    ...textStyleBase(theme)
  }
});