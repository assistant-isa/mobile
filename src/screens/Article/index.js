import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { 
   Container,
   Input,
   LabelInput,
   Button,
   TextButton,
   ContainerInput

} from './styles'

import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'


export default function Article({ navigation }) {
   const [lawArticle, setLawArticle] = useState("")


   handleLawArticle = event => {
      setLawArticle(event.target.value);
   }


   return (
      <Container>
         <LabelInput>Qual artigo voce quer ver ?</LabelInput>

         <View style={{ borderBottomColor: colors.white, borderBottomWidth: 2, margin: 30, }}>
            <Input
            
               value={lawArticle}
               onChange={handleLawArticle}
            
            
            />
         </View>

         <Button onPress={() => navigation.navigate("LawScreen", { idArticle: lawArticle})}>
            <TextButton>Proximo</TextButton>
         </Button>


      </Container>
   )
}


Article.navigationOptions = {
   headerStyle: {
      backgroundColor: colors.purple,
    },
}