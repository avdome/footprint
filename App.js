import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

// You can import from local files

// or any pure javascript modules available in npm


export default function App() {
  const handlePress = () => console.log("Text Clicked")
  return (
    <SafeAreaView style={styles.container}>
      < Image 
      fadeDuration = {1000}
      source={require("./app/assets/logo.png")} / >

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems : "center",
    //padding: 8,
  },
  //paragraph: {
   // margin: 24,
   // fontSize: 18,
   // fontWeight: 'bold',
    //textAlign: 'center',
 // },
});
