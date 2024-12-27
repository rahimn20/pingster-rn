import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";

export default function PingScreen() {
  return (
    <LinearGradient colors={["#264D55", "#03070A"]} style={styles.container}>
      <Text style={styles.text}>Ping screen</Text>
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
