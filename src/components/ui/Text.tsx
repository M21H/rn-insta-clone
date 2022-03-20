import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {AppColors} from './themes';

export enum AgEnum {
  H1 = 'h1',
  SUBTITLE = 'SUBTITLE',
  SUBTITLE_STRONG = 'SUBTITLE_STRONG',
}

interface Props extends TextProps {
  Ag: AgEnum;
  children?: React.ReactNode;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
}

export const Text: React.FC<Props> = props => {
  const {Ag, color, align} = props;
  return (
    <RNText
      {...props}
      style={[
        styles[Ag],
        {color: color || AppColors.black, textAlign: align || 'auto'},
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  [AgEnum.H1]: {
    fontSize: 18,
    lineHeight: 34,
    letterSpacing: 0.36,
    fontWeight: '700',
  },
  [AgEnum.SUBTITLE]: {
    fontSize: 11.5,
    lineHeight: 22,
  },
  [AgEnum.SUBTITLE_STRONG]: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 22,
  },
});
