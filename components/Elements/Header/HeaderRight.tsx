import { wp } from "@/utils/stylesUtils";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export interface HeaderRightProps extends PropsWithChildren {
  show?: boolean;
}

export const HeaderRight: React.FC<HeaderRightProps> = ({
  children,
  show = true,
}) => {
  if (!show) return <View style={styles.placeholder} />;

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  placeholder: {
    width: wp(6),
    height: wp(6),
  },
});
