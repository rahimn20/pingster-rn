import { SpeedTestCTA } from "@/components/Elements";
import { Header } from "@/components/Elements/Header";
import { COLORS } from "@/constants/colors";
import { testPhaseAtom } from "@/store/atoms";
import { wp } from "@/utils/stylesUtils";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const [phase, setPhase] = useAtom(testPhaseAtom);
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[COLORS.blueDianne, COLORS.ebony]}
      style={[
        styles.parentContainer,
        { paddingTop: insets.top - 10, paddingBottom: 80 },
      ]}
    >
      <Header>
        <Header.Left>
          {phase !== "completed" && phase !== "idle" && (
            <Header.Icon
              Icon={
                <Ionicons
                  name="close-outline"
                  size={24}
                  color={COLORS.white}
                />
              }
              onPress={() => setPhase("idle")}
            />
          )}
        </Header.Left>
        <Header.Center
          title="Pingster"
          titleStyle={{ color: COLORS.white + "9A" }}
        />
        <Header.Right />
      </Header>

      <View style={styles.container}>
        <SpeedTestCTA />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
