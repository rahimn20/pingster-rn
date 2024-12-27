import { COLORS } from "@/constants/colors";
import { testPhaseAtom } from "@/store/atoms";
import { wp } from "@/utils/stylesUtils";
import { useAtom } from "jotai";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CTA_WIDTH = wp(60);
const CTA_HEIGHT = wp(60);

export const SpeedTestCTA = () => {
  const [phase, setPhase] = useAtom(testPhaseAtom);
  let backgroundColor = COLORS.yankeesBlue;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text allowFontScaling={false} style={{ color: "white" }}>
        Start
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CTA_WIDTH,
    height: CTA_HEIGHT,
    borderRadius: CTA_WIDTH / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
