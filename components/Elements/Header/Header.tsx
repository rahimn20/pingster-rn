import React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import { HeaderContext } from "@/context/components";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderCenter } from "./HeaderCenter";
import { HeaderRight } from "./HeaderRight";
import { HeaderIcon } from "./HeaderIcon";

interface HeaderProps {
  children: React.ReactNode;
  defaultLeftIcon?: ImageSourcePropType;
  defaultLeftOnPress?: () => void;
}

export const Header: React.FC<HeaderProps> & {
  Left: typeof HeaderLeft;
  Center: typeof HeaderCenter;
  Right: typeof HeaderRight;
  Icon: typeof HeaderIcon;
} = ({ children, defaultLeftIcon, defaultLeftOnPress }) => {
  return (
    <HeaderContext.Provider value={{ defaultLeftIcon, defaultLeftOnPress }}>
      <View style={styles.headerView}>{children}</View>
    </HeaderContext.Provider>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    zIndex: 10,
  },
});

Header.Left = HeaderLeft;
Header.Center = HeaderCenter;
Header.Right = HeaderRight;
Header.Icon = HeaderIcon;
