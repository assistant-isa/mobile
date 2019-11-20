import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { 
   Container,
   Input,
   LabelInput,
   Button,
   TextButton

} from './styles'

import colors from '../../styles/colors'


export default function Code({ navigation }) {
   const [lawCode, setLawCode] = useState("")


   handleLawCode = event => {
      setLawCode(event.target.value);
   }

   return (
      <Container>
         <LabelInput>Qual Codigo voce quer?</LabelInput>

            <View style={{ borderBottomColor: colors.white, borderBottomWidth: 5,}}>
               <Input 
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  value={lawCode}
                  onChange={handleLawCode}
               />
            </View>
            
         <Button onPress={() => navigation.navigate("ArticleScreen", { idCode: lawCode }) }>
            <TextButton>Proximo</TextButton>
         </Button>
      </Container>
   )
}


Code.navigationOptions = {
   headerStyle: {
      backgroundColor: colors.purple,
    },
}