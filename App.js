import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>App</Text>
      <WebView
        originWhitelist={["*"]}
        allowFileAccess={true}
        source={
          Platform.OS === "android"
            ? { uri: 'file:///android_asset/faceDetect.html' }
            : './faceDetect.html'
        }
        domStorageEnabled={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        mixedContentMode="always"
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

})