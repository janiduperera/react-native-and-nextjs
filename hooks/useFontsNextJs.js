import * as Font from "expo-font";
import { useEffect, useState } from "react";

// Check on loading fonts.
//https://stackoverflow.com/questions/62884091/importing-expo-fonts-and-assets-in-expo-web-and-nextjs
export const useFontsNextJs = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  const loadFontAsync = async () => {
    try {
      await Font.loadAsync({
        robotoBold: require("../assets/fonts/Roboto-Black.ttf"),
        spaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
      });
    } catch (error) {
      console.log("Font Load Error:", error);
    } finally {
      setIsFontReady(true);
    }
  };

  useEffect(() => {
    loadFontAsync();
  }, []);

  return {
    isFontReady,
  };
};
