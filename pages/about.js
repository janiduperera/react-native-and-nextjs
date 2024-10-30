import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFontsNextJs } from "../hooks/useFontsNextJs";

export default function About() {
  const { isFontReady } = useFontsNextJs();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us Page + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "spaceMonoRegular",
  },
});
