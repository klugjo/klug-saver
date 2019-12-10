import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { withTheme } from '../containers/ThemeProvider/withTheme';
import { IThemeConstants } from '../typings';

export interface IKSLoadingProps {
  isLoading: boolean;
  theme: IThemeConstants;
};

export const KSLoadingBase = ({ theme, isLoading }: IKSLoadingProps) => {
  if (!isLoading) {
    return null;
  }

  return <View style={styles(theme).root}>
    <View style={styles(theme).container}>
      <ActivityIndicator size="large" color={theme.textMainColor} />
    </View>
  </View>;
};

export default withTheme(KSLoadingBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.9,
    backgroundColor: theme.backgroundMainColor
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});