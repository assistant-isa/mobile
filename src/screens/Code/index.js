import React, { Component } from "react";
import {
  View,
  YellowBox,
  AsyncStorage,
  TextInput,
  Text,
  ScrollView,
  Image,
  Button,
  Animated,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./styles";
import right from "../../../assets/images/arrow-right.png";
import colors from "../../styles/colors";
import mute from "../../../assets/images/mute.png";
import profile from "../../../assets/images/profile.jpg";
import * as Speech from "expo-speech";

import { MaterialIcons } from "@expo/vector-icons";

YellowBox.ignoreWarnings(["Warning: Failed prop"]);

function Code({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Escolha um código</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ArticleScreen")}
          style={styles.buttonLaw}
        >
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>Constituição Federal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Consolidação das Leis do Trabalho
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLaw}>
          <Text style={styles.textButtonLaw}>
            Código de Transito Brasileiro
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Code;

Code.navigationOptions = {
  headerStyle: {
    //backgroundColor: colors.purple,
    height: 70,
  },
  headerRight: () => (
    <TouchableOpacity>
      <MaterialIcons
        name="favorite-border"
        size={20}
        style={styles.iconFavorite}
      />
    </TouchableOpacity>
  ),

  headerLeft: () => (
    <View style={styles.containerHeaderRight}>
      <TouchableOpacity>
        <Image source={profile} style={styles.imageProfile} />
      </TouchableOpacity>
      <Text style={styles.nameProfile}>Olá, Luis !</Text>
    </View>
  ),
};

/*

class Code extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.purple
    },
    headerRight: () => (
      <TouchableOpacity onPress={this.onSpeak}>
        <Image
          source={mute}
          style={{ height: 20, width: 20, marginRight: 50 }}
        />
      </TouchableOpacity>
    )
  };

  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.state = {
      inputCode: "",
      textSpeech: "hello"
    };
  }

  handleInputChange = inputCode => {
    this.setState({ inputCode });
  };

  componentDidMount() {
    Speech.speak("Qual código você quer?", {
      language: "pt-BR",
      pitch: 1,
      rate: 1
    });
  }

  submitCode = async () => {
    this.props.navigation.navigate("ArticleScreen");
    await AsyncStorage.setItem(
      "@ISA:Code",
      JSON.stringify(this.state.inputCode)
    );
  };

  componentWillMount() {
    if (Platform.OS == "ios") {
      this.keyboardWillShowSub = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardWillShow
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        "keyboardWillHide",
        this.keyboardWillHide
      );
    } else {
      this.keyboardWillShowSub = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardDidShow
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        "keyboardDidHide",
        this.keyboardDidHide
      );
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT
    }).start();
  };

  keyboardDidShow = event => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL
    }).start();
  };

  keyboardDidHide = event => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT
    }).start();
  };

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#9400D3", alignItems: "center" }}
      >
        <Animated.Text style={[styles.textTitle, { height: this.imageHeight }]}>
          Qual código você quer?{" "}
        </Animated.Text>
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TextInput
              placeholder="Código"
              keyboardType="number-pad"
              style={styles.input}
              value={this.state.inputCode}
              onChangeText={this.handleInputChange}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <View>
          <TouchableOpacity
            disabled={!this.state.inputCode}
            onPress={this.submitCode}
            style={styles.register}
          >
            <Text style={styles.textNext}>Proximo</Text>
            <Image source={right} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Code;
*/
