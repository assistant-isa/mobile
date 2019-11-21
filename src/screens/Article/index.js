import React, { Component } from 'react';
import { View, AsyncStorage, TextInput,Text, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import right from '../../../assets/images/arrow-right.png'
import colors from '../../styles/colors'
import mute from '../../../assets/images/mute.png'
import * as Speech from 'expo-speech';



class Article extends Component {

   static navigationOptions = {
         headerStyle: {
            backgroundColor: colors.purple
         },
         headerRight: () => (
            <TouchableOpacity>
               <Image source={mute} style={{ height: 20, width: 20, marginRight: 50, }} />
            </TouchableOpacity>
          ),
     
   }

  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.state = {
      inputCode: ""
    }
  }

  handleInputChange = (inputCode) => {
    this.setState({ inputCode });
    
  };

  componentDidMount() {
    Speech.speak("Qual Artigo Voce quer ver?", { language: "pt-BR", pitch: 1, rate: 1});
  }
  

  submitCode = async () => {
    
    this.props.navigation.navigate('LawScreen')
    await AsyncStorage.setItem("@ISA:Article", JSON.stringify(this.state.inputCode))
  }

  componentWillMount() {
   if (Platform.OS=='ios'){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
   }
   
   else{
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
   }

  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#9400D3', alignItems:'center'}}>
       
       <Animated.Text style={[styles.textTitle, { height: this.imageHeight }]}>Qual artigo voce quer ver? </Animated.Text>
        <ScrollView style={{flex:1}}>
      
         <KeyboardAvoidingView
         style={styles.container}
         behavior="padding"
         >
            <TextInput
               placeholder="Artigo"
               keyboardType="number-pad"
               style={styles.input}
               value={this.state.inputCode}
               onChangeText={this.handleInputChange}
            />
      </KeyboardAvoidingView>
       </ScrollView>
      <View>
         <TouchableOpacity onPress={this.submitCode} style={styles.register}>
            <Text style={styles.textNext}>Proximo</Text><Image source={right} style={{ width: 15, height: 15, }} />
         </TouchableOpacity>
      </View>
      </View>
    );
  }
};

export default Article;