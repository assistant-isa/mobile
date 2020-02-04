import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Article from "../screens/Article";
import Law from "../screens/Law";
import Code from "../screens/Code";

const HomeStack = createStackNavigator(
  {
    ArticleScreen: {
      screen: Article
    },

    CodeScreen: {
      screen: Code
    },

    LawScreen: {
      screen: Law
    }
  },
  {
    initialRouteName: "CodeScreen"
  }
);

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
