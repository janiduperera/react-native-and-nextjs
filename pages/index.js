import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFontsNextJs } from "../hooks/useFontsNextJs";
import Card from "../components/card";

export default function App() {
  const { isFontReady } = useFontsNextJs();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Card
        heading={"NextJS Web Heading"}
        messageText={"Body Text from NextJs"}
      />
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
    fontSize: 16,
    fontFamily: "robotoBold",
  },
});
