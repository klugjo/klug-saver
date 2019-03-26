import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KSButton } from '../../../components';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';

export interface IHelloProps {
  goNext: () => {};
  theme: IThemeConstants;
};

const HelloBase = ({ goNext, theme }: IHelloProps) => {
  return <View style={styles(theme).root}>
    <Text>Welcome</Text>
    <KSButton text="Continue" onPress={goNext} />
  </View>;
};

export default withTheme(HelloBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  }
});