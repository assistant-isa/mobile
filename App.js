/* eslint-disable prettier/prettier */
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

if (__DEV__) {
  import("./src/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

import AppContainer from "./src/navigation/MainNavigator";

const Container = styled.View`
  flex: 1;
`;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </NavigationContainer>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
