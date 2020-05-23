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
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Article"
        component={Article}
      />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="Law" component={Law} />
    </Stack.Navigator>
  );
}
