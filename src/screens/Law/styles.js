import styled from 'styled-components/native'

import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   background-color: ${colors.purple};
`

export const ContainerArticle = styled.View`
   width: ${dimensions.percentDeviceWidth(100)};
   height: ${dimensions.percentDeviceHeight(20)};
   align-items: center;
   justify-content: center;
`

export const TextArticle = styled.Text`
   font-size: 20px;
   font-family: "Arial";
   font-weight: bold;
   color: ${colors.white};

`

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
