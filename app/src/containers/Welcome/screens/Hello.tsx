import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { KSButton } from '../../../components';
import { textStyleHeader } from '../../../theme/styles';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';

export interface IHelloProps {
  goNext: () => {};
  theme: IThemeConstants;
};

const HelloBase = ({ goNext, theme }: IHelloProps) => {
  return <View style={styles(theme).root}>
    <Text style={styles(theme).title}>Welcome</Text>
    <Image style={styles(theme).img} source={require('./img/welcome.png')} />
    <KSButton containerStyle={styles(theme).button} text="Continue" onPress={goNext} />
  </View>;
};

export default withTheme(HelloBase);

const styles = (theme: IThemeConstants) => {
  const imgWidth = Dimensions.get('screen').width * 0.5;
  const imgHeight = imgWidth * 487 / 586;

  return StyleSheet.create({
    title: {
      ...textStyleHeader(theme)
    },
    root: {
      flex: 1,
      backgroundColor: theme.backgroundMainColor,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    img: {
      maxWidth: imgWidth,
      maxHeight: imgHeight
    },
    button: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor: theme.underlayColor,
      padding: 10,
      marginTop: 15
    }
  })
};