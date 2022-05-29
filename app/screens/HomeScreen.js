import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <SafeAreaView style={container}> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems : "center",
    },
})

export default HomeScreen;