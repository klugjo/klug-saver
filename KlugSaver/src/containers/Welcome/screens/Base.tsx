import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { KSButton } from '../../../components';
import { textStyleHeader } from '../../../theme/styles';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';

export interface IBaseProps {
  goNext: () => {};
  theme: IThemeConstants;
  title: string;
  children?: ReactNode;
};

const Base = ({ goNext, title, theme, children }: IBaseProps) => {
  return <View style={styles(theme).root}>
    <View style={styles(theme).titleContainer}>
      <Text style={styles(theme).title}>{title}</Text>
    </View>
    <View style={styles(theme).content}>
      {children}
    </View>
    <View style={styles(theme).buttonContainer}>
      <KSButton containerStyle={styles(theme).button} text="Continue" onPress={goNext} />
    </View>
  </View>;
};

export default withTheme(Base);


const styles = (theme: IThemeConstants) => {
  const imgWidth = Dimensions.get('screen').width * 0.5;
  const imgHeight = imgWidth * 487 / 586;

  return StyleSheet.create({
    titleContainer: {
      flexBasis: 150,
      justifyContent: 'center'
    },
    title: {
      ...textStyleHeader(theme)
    },
    root: {
      flex: 1,
      backgroundColor: theme.backgroundMainColor,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    content: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    img: {
      maxWidth: imgWidth,
      maxHeight: imgHeight
    },
    buttonContainer: {
      flexBasis: 150,
      justifyContent: 'center'
    },
    button: {
      padding: 10,
      marginTop: 15
    }
  })
};