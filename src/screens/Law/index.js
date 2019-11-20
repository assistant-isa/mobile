/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from "react-native"
import { 
   Container, 
   ContainerArticle,
   Button,
   TextButton,
   TextArticle

} from './styles'

import colors from '../../styles/colors'
import api from '../../services/api'

export default function Law({ navigation }) {

   const [data, setData] = useState([])
   const getLawCode = navigation.getParam("idCode")
   const getLawArticle = navigation.getParam("idArticle")

   
   useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(`?codigo=18&artigo=1&parte=1`)
        setData(result.data)
        console.tron.log(" LEI ", result)
         
      };
      fetchData();
    }, []);

   return (
      <Container>
               {data.map(item => (
                  <ScrollView key={item.idCod} style={{ margin: 30, marginVertical: 30   }}>
                        <TextArticle>{item.artigoTexto}</TextArticle>
                  </ScrollView>
               ))}
     
         <Button onPress={() => navigation.navigate("CodeScreen")}>
            <TextButton>Consultar outro artigo?</TextButton>
         </Button>
      </Container>
   )
}

Law.navigationOptions = {
   headerStyle: {
      backgroundColor: colors.purple,
   },

}
