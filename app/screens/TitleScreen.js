import React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

function TitleScreen(props) {
  const handlePress = () => console.log("Text Clicked")
  return (
  <SafeAreaView style={styles.container}>
    <TouchableHighlight 
      onPress={() => handlePress}  // isn't working -> navigation.navigate('HomeScreen')
    >
      <Image 
        fadeDuration = {1000}
        source={require("../assets/logo.png")}
      />
    </TouchableHighlight>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary,
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

export default TitleScreen;