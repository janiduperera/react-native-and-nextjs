const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "expo",
    // Add more React Native / Expo packages here...
    "expo-modules-core",
    "expo-asset",
    "expo-font",
    "@react-native/assets-registry",
  ],
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  images: {
    disableStaticImages: true,
  },
};

//module.exports = nextConfig;
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [
    withFonts,
    withImages,
    [
      withExpo,
      {
        projectRoot: __dirname,
      },
    ],
  ];
  return plugins.reduce(
    (acc, plugin) => {
      if (Array.isArray(plugin)) {
        return plugin[0](acc, plugin[1]);
      }
      return plugin(acc);
    },
    { ...nextConfig }
  );
};
