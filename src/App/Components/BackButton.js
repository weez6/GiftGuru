import React from 'react';
import {  TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ style, ...props } ) => {

    const navigation = useNavigation();

    defaultOnPress = () => {
        navigation.goBack()
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            style={[styles.arrow, style]} 
            // onPress={props.onPress? onPress : defaultOnPress}
            onPress = {props.onPress || defaultOnPress}
            {...props}
        >
            <Image source={require("../Assets/Images/backArrow.png")} />

        </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-start',
        right: 7,
    },

  });


  export default BackButton;