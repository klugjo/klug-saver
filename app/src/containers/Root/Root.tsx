import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import KSLoading from '../../components/KSLoading';
import { IThemeConstants } from '../../typings';
import DeleteModal from '../DeleteModal';
import { withTheme } from '../ThemeProvider/withTheme';
import Swiper from './Swiper';

export interface IRootProps {
  theme: IThemeConstants;
  loading: boolean;
  tutorialDone: boolean;
};

const RootBase = ({ theme, loading, tutorialDone }: IRootProps) => {
  return <SafeAreaView style={styles(theme).root}>
    <StatusBar
      barStyle={theme.barStyle}
    />
    <Swiper tutorialDone={tutorialDone} />
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
