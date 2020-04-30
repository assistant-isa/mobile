import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  containerPicture: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  containerIcon: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 30,
  },

  imageProfile: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },

  textProfile: {
    fontSize: 50,
    marginTop: 30,
  },

  containerDetails: {
    marginVertical: 40,
    marginHorizontal: 45,
  },

  detail: {
    borderBottomWidth: 1,
    borderBottomColor: "#531",
    marginVertical: 20,
  },

  textDetail: {
    fontSize: 20,
  },

  containerFooter: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 20,
  },

  buttonsFooter: {
    marginVertical: 25,
  },
});
