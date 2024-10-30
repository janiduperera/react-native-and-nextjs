//Using expo font for custom font within the native app
import { Text } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import AboutScreen from "./about";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [fontsLoaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        // Loading Fonts for native app
        await Font.loadAsync({
          robotoBold: require("../assets/fonts/Roboto-Black.ttf"),
          spaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch ({ message }) {
        // This will be called if something is broken
        console.log(`Error loading font: ${message}`);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // This allows to fix the font scaling bug on IOS
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
