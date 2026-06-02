import type { ExpoConfig } from "expo/config";

const APP_ENV = process.env.EXPO_PUBLIC_APP_ENV ?? "development";
const IS_DEV = APP_ENV === "development";
const IS_STAGING = APP_ENV === "staging";

const getAppName = () => {
  if (IS_DEV) return "app-env-demo (Dev)";
  if (IS_STAGING) return "app-env-demo (Staging)";
  return "app-env-demo";
};

const getUniqueIdentifier = () => {
  if (IS_DEV) return "com.example.appenvdemo.dev";
  if (IS_STAGING) return "com.example.appenvdemo.staging";
  return "com.example.appenvdemo";
};

const config: ExpoConfig = {
  name: getAppName(),
  slug: "app-env-demo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "appenvdemo",
  userInterfaceStyle: "automatic",
  ios: {
    icon: "./assets/expo.icon",
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
    package: getUniqueIdentifier(),
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#208AEF",
        android: {
          image: "./assets/images/splash-icon.png",
          imageWidth: 76,
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
  },
};

export default config;
