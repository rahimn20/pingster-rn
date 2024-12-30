import { Text } from "@/components/Elements/Text";
import { FONT_FAMILIES, FONT_SIZES } from "@/constants";
import { COLORS } from "@/constants/colors";
import { testPhaseAtom } from "@/store/atoms";
import { TestPhase } from "@/utils/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAtom } from "jotai";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const CTA_WIDTH = 230;
const CTA_HEIGHT = 230;

export const SpeedTestCTA = () => {
  const [phase, setPhase] = useAtom(testPhaseAtom);
  const isDisabled = phase === "downloadTest" || phase === "uploadTest";

  const animationConfig = {
    duration: 500,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = withTiming(
      new Map<TestPhase, string>([
        ["idle", COLORS.yankeesBlue],
        ["downloadTest", COLORS.darkSlateGray],
        ["uploadTest", COLORS.cyberGrape],
        ["completed", COLORS.yankeesBlue],
      ]).get(phase)!,
      animationConfig
    );

    return {
      backgroundColor,
    };
  }, [phase]);

  const renderContent = () => {
    switch (phase) {
      case "idle":
        return <Text style={styles.text}>GO!</Text>;
      case "downloadTest":
        return (
          <AntDesign
            name="arrowdown"
            size={64}
            color={COLORS.middleBlueGreen}
          />
        );
      case "uploadTest":
        return <AntDesign name="arrowup" size={64} color={COLORS.paleViolet} />;
      case "completed":
        return <Text>Test Completed</Text>;
    }
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity
        disabled={isDisabled}
        activeOpacity={0.8}
        onPress={() => setPhase("downloadTest")}
        style={styles.touchable}
      >
        {renderContent()}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CTA_WIDTH,
    height: CTA_HEIGHT,
    borderRadius: CTA_WIDTH / 2,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 50px rgba(10, 12, 27, 0.8)",
  },
  touchable: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: {
    fontFamily: FONT_FAMILIES.RobotoRegular,
    color: COLORS.white,
    fontSize: FONT_SIZES.h3,
  },
});
