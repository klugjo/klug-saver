import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import Base from './Base';

export interface IHelloProps {
  goNext: () => {};
  theme: IThemeConstants;
};

const HelloBase = ({ goNext, theme }: IHelloProps) => {
  return <Base goNext={goNext} title="Welcome">
    <Image style={styles(theme).img} source={require('./img/welcome.png')} />
  </Base>;
};

export default withTheme(HelloBase);


const styles = (theme: IThemeConstants) => {
  const imgWidth = Dimensions.get('screen').width * 0.5;
  const imgHeight = imgWidth * 487 / 586;

  return StyleSheet.create({
    img: {
      maxWidth: imgWidth,
      maxHeight: imgHeight
    }
  })
};