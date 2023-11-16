import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ text, style, ...props }) => {
    
    return (
    <TouchableOpacity 
        style={[styles.button, style]} 
        activeOpacity={0.6} 
        {...props}
    >
        <Text style={styles.text}>{text}</Text>

    </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        width: '100%', 
    },

    text: {
        color: 'white',
        //fontWeight: 'bold',
        fontSize: 17,
    },

  });

  export default CustomButton;