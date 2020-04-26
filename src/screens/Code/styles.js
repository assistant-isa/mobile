import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window");

import colors from "../../styles/colors";

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    //backgroundColor: colors.purple,
    flex: 1,
    alignItems: "center",
  },

  input: {
    height: 50,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
    textAlign: "center",
    borderRadius: 10,
  },

  scrollView: {
    flex: 1,
  },

  buttonLaw: {
    marginTop: 20,
    width: window.width - 30,
    height: window.height / 9,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#7159c1",
  },

  containerTitle: {
    width: window.width - 20,
  },

  textTitle: {
    fontSize: 25,
    //color: colors.white,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 10,
    //fontFamily: "Arial",
    fontWeight: "bold",
  },

  textButtonLaw: {
    fontSize: 15,
    color: colors.white,
  },

  containerHeaderRight: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },

  imageProfile: {
    borderRadius: 25,
    height: 50,
    width: 50,
    marginRight: 20,
  },

  nameProfile: {
    fontSize: 17,
  },

  iconFavorite: {
    height: 20,
    width: 20,
    marginRight: 50,
  },

  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },

  register: {
    marginBottom: 20,
    width: window.width - 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#360445",
    flexDirection: "row",
    borderRadius: 10,
  },
  textNext: {
    color: colors.white,
    fontSize: 25,
    //fontFamily: "Arial"
  },
});
