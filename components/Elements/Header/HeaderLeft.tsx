import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { wp } from "@/utils/stylesUtils";

interface HeaderLeftProps extends PropsWithChildren {
  show?: boolean;
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({
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
    alignItems: "flex-start",
  },
  placeholder: {
    width: wp(6),
    height: wp(6),
  },
});
