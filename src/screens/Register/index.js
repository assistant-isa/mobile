import React, { useRef, useState, useEffect } from "react";
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
  Animated,
} from "react-native";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";

function Register({ navigation }) {
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  const [toValue, setToValue] = useState(0);
  const offset = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(offset, {
      toValue: toValue,
    }).start(() => {
      setFocus(toValue);
    });
  }, [toValue]);

  const setFocus = (toValue) => {
    switch (toValue) {
      case 0:
        emailRef.current.focus();
        break;

      case 100:
        nameRef.current.focus();
        break;

      default:
        Keyboard.dismiss();
        break;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {toValue === 0 ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Digite seu Email</Text>
            <TextInput
              ref={emailRef}
              placeholder="Email"
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() => setToValue(100)}
              style={styles.btnLogin}
            >
              <Text>Proximo</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      ) : null}

      {toValue === 100 ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Digite seu Nome</Text>
            <TextInput
              ref={nameRef}
              placeholder="Nome"
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Code")}
              style={styles.btnLogin}
            >
              <Text>Proximo</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default Register;
