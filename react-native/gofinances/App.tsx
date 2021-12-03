import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Signin } from './src/screens/Signin';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes'
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

export default function App() {

  let [fontsloaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsloaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle='light-content' />
          {/* <AppRoutes /> */}
          <AuthProvider>
            <Signin />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}