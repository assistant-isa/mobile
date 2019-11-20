import styled from 'styled-components/native'

import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   background-color: ${colors.purple};
`

export const Input = styled.TextInput`
   color: ${colors.white};
   font-size: 30px;
   font-weight: bold;
   text-align: center;
   width: ${dimensions.percentDeviceWidth(100)};
   height: ${dimensions.percentDeviceWidth(10)};
`

export const LabelInput = styled.Text`
   color: ${colors.white};
   font-size: 30px;
   text-align: center;
   margin-bottom: 20px;
   font-family: "Arial";
   font-weight: bold;
`;


export const Button = styled.TouchableOpacity`
   width: ${dimensions.percentDeviceWidth(100)};
   height: ${dimensions.percentDeviceHeight(10)};
   background-color: ${colors.black};
   justify-content: center;
   align-items: center;
   margin-top: 50px;
`

export const TextButton = styled.Text`
   font-size: 30px;
   color: ${colors.white};
`
