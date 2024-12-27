import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient colors={["#264D55", "#03070A"]} style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
