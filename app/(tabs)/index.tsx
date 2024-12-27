import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { testPhaseAtom } from "@/store/atoms";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";

export default function Index() {
  const [phase, setPhase] = useAtom(testPhaseAtom);

  return (
    <LinearGradient colors={["#264D55", "#03070A"]} style={styles.container}>
      <TouchableOpacity onPress={() => setPhase("downloadTest")}>
        <Text style={{ color: "white" }}>SPEED TEST {phase}</Text>
      </TouchableOpacity>
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
