import { StyleSheet, Dimensions } from "react-native";

const widthComponent = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },

  innerHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },

  btnFirstAccess: {
    height: 50,
    width: 120,
  },

  textFirstAccess: {
    fontSize: 15,
  },

  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },

  btnLogin: {
    height: 70,
    borderWidth: 2,
    borderColor: "#F6BE67",
    justifyContent: "center",
    alignItems: "center",
  },
});
