import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Basket from './src/screens/Basket/index';
import Details from './src/screens/Basket/components/Details.js';
import Header from './src/screens/Basket/components/Header.js';
import mock from './mocks/basket';

export default function App() {
  const [loadedFont] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold
  });

  if (!loadedFont) { <AppLoading /> }
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
