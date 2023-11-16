import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ClearableTextInput = ({ style, ...props }) => {
  const [text, setText] = useState('');

  const clearText = () => {
    setText('');
  };

  return (
    <View style={[styles.inputView, style]}>
      <TextInput
        style={styles.inputText}
        value={text}
        onChangeText={setText}
        {...props}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
          <Image 
            source={require('../Assets/Images/cross.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

   

    inputView: {
        flexDirection:  'row',
        width: '100%',
        //backgroundColor:"#3AB4BA",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 5,
        borderColor: 'black',
        borderWidth: 2,
        
    },

    inputText: {
        height: 50,
        color: "black",
        flex:1
    },
  
    clearButton: {
       
    },

    icon: {
        width: 30,
        height:30,
    },

});

export default ClearableTextInput;

