/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native'


if(__DEV__) {
  import('./src/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}



import AppContainer from './src/navigation/MainNavigator'


const Container = styled.View`
   flex: 1;
`;


const App = () => {
  return (
    <Container>
      <AppContainer />
    </Container>
  );
};



export default App;
