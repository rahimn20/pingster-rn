import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { LatencyIcon, LatencyOutline } from "@/assets/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,

        tabBarBackground: () => (
          <BlurView intensity={50} tint="dark" style={styles.blurTabBar} />
        ),
        tabBarActiveTintColor: "#12F9ED",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Speed",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "speedometer" : "speedometer-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ping"
        options={{
          tabBarLabel: "Pings",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <LatencyIcon width={size} height={size} fill={color} />
            ) : (
              <LatencyOutline width={size} height={size} fill={color} />
            ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    borderWidth: 0,
    position: "absolute",
    bottom: 0,
    height: 80,
    paddingTop: 4
  },
  blurTabBar: {
    borderWidth: 0,
    ...StyleSheet.absoluteFillObject,
    height: 80
  },
});
