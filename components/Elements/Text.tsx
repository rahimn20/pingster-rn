import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
}
export const Text = ({ children, ...restProps }: TextProps) => {
  return (
    <RNText {...restProps} allowFontScaling={false}>
      {children}
    </RNText>
  );
};
