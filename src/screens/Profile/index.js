import React from "react";
import { View, Text, Image } from "react-native";
import adriano from "../../../assets/images/pp.jpeg";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerPicture}>
        <Image style={styles.imageProfile} source={adriano} />
        <Text style={styles.textProfile}>Adriano</Text>
      </View>

      <View style={styles.containerDetails}>
        <View style={styles.detail}>
          <Text style={styles.textDetail}>Adriano Silva Matos</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.textDetail}>adriano@email.com</Text>
        </View>
      </View>

      <View style={styles.containerFooter}>
        <TouchableOpacity style={styles.buttonsFooter}>
          <FontAwesome5 name="sign-out-alt" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;
