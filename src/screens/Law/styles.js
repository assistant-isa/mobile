import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window");

import colors from "../../styles/colors";

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
    textAlign: "center",
    borderRadius: 10
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 20
  },
  register: {
    marginBottom: 20,
    width: window.width - 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#360445",
    flexDirection: "row",
    borderRadius: 10
  },
  textNext: {
    color: colors.white,
    fontSize: 20
    //fontFamily: "Arial"
  },
  textTitle: {
    fontSize: 25,
    color: colors.white,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    //fontFamily: "Arial",
    fontWeight: "bold"
  },

  containerLaw: {
    margin: 30
  },

  textLaw: {
    fontSize: 20,
    color: colors.white
  },

  titleLaw: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 30,
    color: colors.white
  }
});
