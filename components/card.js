import { Image, StyleSheet, Text, View } from "react-native";

export default function Card({ heading, messageText }) {
  const reactLogo = require("../assets/images/react-logo.png");

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{heading}</Text>
      <Text style={styles.messageText}>{messageText}</Text>
      <Image style={styles.imgStyle} source={reactLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
  headingText: {
    fontSize: 16,
    fontFamily: "robotoBold",
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 14,
    fontFamily: "spaceMonoRegular",
    paddingBottom: 5,
  },
  imgStyle: {
    width: 100,
    height: 100,
  },
});
