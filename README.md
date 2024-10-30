<div align="center">

  <h3 align="center">Next Js set up with React Native</h3>

   <div align="center">
    This project is set up to work with React Native and Next Js. With minimum configuration, it can be used to build a native app and a NextJs web app. 
    </div>
</div>

You can not run both NextJS and Native at the same time. The following configuration is needed before starting it on each platform.
With the following configuration, a common code can be used for both projects.

### 🏁 Commands for Starting on Web (NextJs)

When targeting web, you'll need to use the Next.js CLI instead of Expo CLI:
To run on the web with Next js. Run the following commands,

- **1. Install necessary packages**
- ✅ `npm install expo-modules-core expo-asset expo-font @react-native/assets-registry`

- **2. Make the following change to the code in App.js. Line.No:5 should be commented out and Line.No:2 should be uncommented**

  - ✅ `export { default } from "./pages"`
  - ✅ `//export { default } from "./mobile/_layout"`

- **3. Starting web**

  - ✅ `npx next dev`

- **4. Building web**

  - ✅ `npx next build`

### 🏁 Commands for Starting on Native IOS and Android (Expo)

- **1. Uninstall the following packages. They are not needed for the Native Apps**
- ✅ `npm uninstall expo-modules-core expo-asset expo-font @react-native/assets-registry`

- **2. Make the following change to the code in App.js. Line.No:2 should be commented out and Line.No:5 should be uncommented**

  - ✅ `//export { default } from "./pages"`
  - ✅ `export { default } from "./mobile/_layout"`

- **3. Starting on Expo Go**

  - ✅ `npx expo start`
