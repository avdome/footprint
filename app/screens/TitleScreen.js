import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

function TitleScreen(props) {
  const handlePress = () => console.log("Text Clicked")
  return (
  <SafeAreaView style={styles.container}>
    <Image 
      fadeDuration = {1000}
      source={require("../assets/logo.png")}/>
  </SafeAreaView>
  );
}

export default TitleScreen;

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
})