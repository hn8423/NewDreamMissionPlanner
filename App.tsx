/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import WebView from 'react-native-webview'
import useGetStyle from './hooks/use-style'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  //style
  //style
  //style
  const {getStyles, styles} = useGetStyle({
    wrapper: {flex: 1},
  })
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={[styles.wrapper]}>
      <WebView
        source={{uri: 'https://newdream.link'}}
        userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
      />
    </SafeAreaView>
  )
}

export default App
