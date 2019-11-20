import Reactotron from 'reactotron-react-native'


const tron = Reactotron.configure()
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect();

    console.tron = tron

    tron.clear()