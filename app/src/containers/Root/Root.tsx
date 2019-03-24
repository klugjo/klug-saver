import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import KSLoading from '../../components/KSLoading';
import { IThemeConstants } from '../../typings';
import DeleteModal from '../DeleteModal';
import Swiper from '../Swiper';
import { withTheme } from '../ThemeProvider/withTheme';

export interface IRootProps {
  theme: IThemeConstants;
  loading: boolean;
};

const RootBase = ({ theme, loading }: IRootProps) => {
  return <SafeAreaView style={styles(theme).root}>
    <StatusBar
      barStyle={theme.barStyle}
    />
    <Swiper />
    <DeleteModal />
    <KSLoading isLoading={loading} />
  </SafeAreaView>;
};

export default withTheme(RootBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgroundMainColor
  }
});