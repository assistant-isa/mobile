import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  StyleSheet,
} from "react-native";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>ISA</Text>
          <TextInput placeholder="Email" style={styles.textInput} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Code")}
            style={styles.btnLogin}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
