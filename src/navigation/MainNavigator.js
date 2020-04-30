import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Article from "../screens/Article";
import Law from "../screens/Law";
import Code from "../screens/Code";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Law" component={Law} /> */}
    </Stack.Navigator>
  );
}
