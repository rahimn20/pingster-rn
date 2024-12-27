import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { testPhaseAtom } from "@/store/atoms";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";
import { SpeedTestCTA } from "@/components/Elements";
import { COLORS } from "@/constants/colors";

export default function Index() {
  return (
    <LinearGradient
      colors={[COLORS.blueDianne, COLORS.ebony]}
      style={styles.container}
    >
      <SpeedTestCTA />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
