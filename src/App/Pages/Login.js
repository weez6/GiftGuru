import { StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import ClearableTextInput from '../Components/ClearableTextInput';
import COLORS from '../Shared/Colors'
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    
    const navigation = useNavigation();
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardWillShowListener = Keyboard.addListener(
            'keyboardWillShow',
            () => setKeyboardVisible(true)
        );
        const keyboardWillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardWillShowListener.remove();
            keyboardWillHideListener.remove();
        };
    }, []);

    const handleCancel = () => {
        Keyboard.dismiss();

    };

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles2.container}>
                
                <View style={styles2.topHalfContainer}>
                    <Image
                        source={require("../Assets/Images/Logo1.png")}
                        style={styles2.logo} />
                </View>


                <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
                    keyboardVerticalOffset={Platform.OS == 'ios' ? -40 : 0} 
                    style={styles2.bottomHalfContainer}
                >
                    {!keyboardVisible && (
                        <View style={styles2.textContainer}>
                            <Text style={styles2.welcomeText}>Welcome to </Text>
                            <Text style={styles2.welcomeText}>GiftGuru </Text>
                        </View>
                    )}

                    <ClearableTextInput style={{backgroundColor:'white'}} placeholder="Email" placeholderTextColor="#003f5c"/>
                    <ClearableTextInput style={{backgroundColor: 'white'}} secureTextEntry placeholder="Password" placeholderTextColor="#003f5c"/>

                    <CustomButton text='Sign in' style={{margin: 10}} />

                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles2.forgotPasswordLink}>Forgot password?</Text>
                    </TouchableOpacity>
                    
                    <View style={styles2.line}></View>
                    <View style={styles2.signupContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('SignUp')} >
                            <Text style={{fontWeight: 'bold'}} >Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>

    );
}


const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        //backgroundColor: '#f9e7e7',
        //backgroundColor: '#ffe3e1',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },

    topHalfContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 180,
        height: 180,
    },

    textContainer: {
        //paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    welcomeText: {
        fontSize: 50,
        paddingVertical: 5,
        fontWeight: 'bold',
    },

    bottomHalfContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        flex: 1,
        width: '100%',
        bottom: 70,
    },

    inputView: {
        width: '100%',
        //backgroundColor:"#3AB4BA",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        borderColor: 'black',
        borderWidth: 2,
    },

    inputText: {
        height: 50,
        color: "black"
    },

    forgotPasswordLink: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10, // Adjust the spacing as needed
    },

    line : {
        marginVertical: 20,
        height: 1,
        backgroundColor: 'gray',
        width: '100%',
    },

    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});

    // const styles = StyleSheet.create({
    //     container: {
    //       flex: 1,
    //       backgroundColor: '#f9e7e7', 
    //       alignItems: 'center',
    //       justifyContent: 'spaceBetween',
    //       padding: 20
    //     },
    //     topHalfContainer: {
    //         top: 120
    //     },
    //     logo: {
    //         width: 180,
    //         height: 180,
    //     },
    //     welcomeText: {
    //         fontSize: 50,
    //         paddingVertical: 5,
    //         fontWeight: 'bold',
    //     },
    //     descriptionText: {
    //         fontSize: 25,
    //         paddingVertical: 10,
    //         textAlign: 'center',
    //     },
    //     // #ada0a6
    //     loginButton: {
    //         backgroundColor: 'black',
    //         padding: 10,
    //         margin: 10,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: 230,
    //         height: 50,
    //         borderRadius: 10,
    //         width: '100%',
    //     },
    //     loginText: {
    //         color: 'white',
    //         //fontWeight: 'bold',
    //         fontSize: 17,
    //     },
    //     buttonContainer: {
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         top: 10,
    //     },
    //     bottomHalfContainer: {
    //         top: 170, 
    //         paddingHorizontal: 15,
    //         //backgroundColor: 'white',
    //     },
    //     textContainer:{
    //         //paddingHorizontal: 5,
    //         justifyContent:'center', 
    //         alignItems: 'center',
    //     },
    //     inputView:{
    //         width:"100%",
    //         //backgroundColor:"#3AB4BA",
    //         borderRadius:25,
    //         height:50,
    //         marginBottom:20,
    //         justifyContent:"center",
    //         padding:20
    //         },
    //         inputText:{
    //         height:50,
    //         color:"black"
    //         },
    //   });



        // <View style={styles.container}>
        //     <View style={styles.topHalfContainer}>
        //         <Image 
        //             source={require("../Assets/Images/Logo1.png")}
        //             style={styles.logo}
        //         />
        //     </View>
        //     <View style={styles.bottomHalfContainer}>
        //         <View style={styles.textContainer}>
        //             <Text style={styles.welcomeText}>Welcome to </Text>
        //             <Text style={styles.welcomeText}>GiftGuru </Text>
        //             <Text style={styles.descriptionText}>We aim to just have a really good time, just vibing all over the place</Text>
        //         </View>
        //         <View style={styles.buttonContainer}>
        //             <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
        //                 <Text style={styles.loginText}>Sign in</Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity style={[styles.loginButton, {backgroundColor: 'gray'}]} activeOpacity={0.7}>
        //                 <Text style={styles.loginText}>Create account</Text>
        //             </TouchableOpacity> 
        //         </View>
        //     </View>
        // </View>
        //     <KeyboardAvoidingView
        //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
