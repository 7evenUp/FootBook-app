import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { createAppStore } from './src/redux'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/themes/default'

import AppNavigator from './src/navigation/AppNavigator'

const store = createAppStore()

export default function App () {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.otf'),
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    )
  }
}