import React, { Component } from 'react';
import { View, TextInput,Text, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import left from '../../../assets/images/left.png'
import colors from '../../styles/colors'
import mute from '../../../assets/images/mute.png'

import api from '../../services/api'


class Law extends Component {

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
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT),
    this.state = {
      law: [],
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
    await api.get(`?codigo=18&artigo=1&parte=1`)
    .then(response => {
      console.tron.log(" LEI ", response)
      this.setState({ law: response.data}) 
    })
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
    const { law } = this.state;
    return (
      <View style={{flex:1,backgroundColor:'#9400D3', alignItems:'center'}}>
       
       <ScrollView style={{ flex: 1}}>
        {
          law.map(item => {
            return (
              <View key={item.idCod} style={styles.containerLaw}>
                <Text style={styles.textLaw}>{item.artigoTexto}</Text>
              </View>
            )
          })
        }
      </ScrollView>
      <View>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('CodeScreen')} style={styles.register}>
            <Image source={left} style={{ width: 15, height: 15, }} /><Text style={styles.textNext}>Consultar outro Artigo ?</Text>
         </TouchableOpacity>
      </View>
      </View>
    );
  }
};

export default Law;