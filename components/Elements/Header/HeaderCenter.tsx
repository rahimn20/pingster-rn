import React from "react";
import { View, StyleSheet, TextStyle, StyleProp } from "react-native";
import { Text } from "../Text";
import { FONT_FAMILIES, FONT_SIZES } from "@/constants";
import { COLORS } from "@/constants/colors";

interface HeaderCenterProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const HeaderCenter: React.FC<HeaderCenterProps> = ({
  title,
  titleStyle,
  children,
}) => {
  return (
    <View style={styles.centerView}>
      {title ? (
        <Text style={[styles.headerText, titleStyle]}>{title}</Text>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 2,
  },
  headerText: {
    fontFamily: FONT_FAMILIES.RobotoMedium,
    fontSize: FONT_SIZES.bodyMedium,
    color: COLORS.white,
    textAlign: "center",
    width: "100%",
  },
});
