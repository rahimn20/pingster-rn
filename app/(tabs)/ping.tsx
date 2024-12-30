import { Header } from "@/components/Elements/Header";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PingScreen() {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#264D55", "#03070A"]}
      style={[
        styles.container,
        { paddingTop: insets.top - 10, paddingBottom: 80 },
      ]}
    >
      <Header>
        <Header.Left />
        <Header.Center
          title="Game pings"
          titleStyle={{ color: COLORS.white + "9A" }}
        />
        <Header.Right />
      </Header>

      <View style={{ flex: 1 }} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
