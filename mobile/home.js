import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/card";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "robotoBold",
        }}
      >
        Home screen
      </Text>
      <Button
        title="Go to About Us"
        onPress={() => navigation.navigate("About")}
      />
      <Card
        heading={"Native platform Heading"}
        messageText={"Body Text from Native Platform"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "black",
  },
});
