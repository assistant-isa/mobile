import React, { Component } from 'react';
import { View, AsyncStorage, TextInput,Text, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import left from '../../../assets/images/left.png'
import colors from '../../styles/colors'
import mute from '../../../assets/images/mute.png'
import api from '../../services/api'
import * as Speech from 'expo-speech';

class Law extends Component {

   static navigationOptions = {
         headerStyle: {
            backgroundColor: colors.purple
         },
         headerRight: () => (
            <TouchableOpacity onPress={() => Speech.stop()}>
               <Image source={mute} style={{ height: 20, width: 20, marginRight: 50, }} />
            </TouchableOpacity>
          )
   }

  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT),
    this.state = {
      law: [],
      onSpeak: ""
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
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

  async componentDidMount(){

    const getCodeLaw = await AsyncStorage.getItem('@ISA:Code')

    const getIdArticle = await AsyncStorage.getItem("@ISA:Article")

    const code = await JSON.parse(getCodeLaw)

    const article = await JSON.parse(getIdArticle)

    const response = await api.get(`?codigo=${code}&artigo=${article}&parte=0`)
    this.setState ({ law: response.data, onSpeak: response.data.artigoTexto })

    Speech.speak(response.data[0].nomeCodigo, { language: "pt-BR"});
    Speech.speak(response.data[0].artigoTexto, { language: "pt-BR"});
    
  }

  handleNewCode = () => {
    Speech.stop()
    this.props.navigation.navigate('CodeScreen')
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
    const { law } = this.state
    return (
      <View style={{flex:1, backgroundColor:'#9400D3', alignItems:'center'}}>
       
       <ScrollView style={{ flex: 1 }}>
        {
        law.map(function(item, i){
              return (
              <View style={styles.containerLaw} key={i}>
                  <Text style={styles.titleLaw}>{item.nomeCodigo}</Text>
                  <Text style={styles.textLaw}>{item.artigoTexto}</Text>
              </View>
            );
          })
        }
      </ScrollView>
      <View>
         <TouchableOpacity onPress={this.handleNewCode} style={styles.register}>
            <Image source={left} style={{ width: 15, height: 15, }} /><Text style={styles.textNext}>Consultar outro Artigo ?</Text>
         </TouchableOpacity>
      </View>
      </View>
    );
  }
};

export default Law;