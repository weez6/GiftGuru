import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native'
import COLORS from '../Shared/Colors'
import ClearableTextInput from '../Components/ClearableTextInput';
import CustomButton from '../Components/CustomButton';
import BackButton from '../Components/BackButton';



export default function SignUp(){

    return(
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {/* <TouchableOpacity activeOpacity={0.6} style={styles.arrow} >
                        <Image source={require("../Assets/Images/backArrow.png")} />
                    </TouchableOpacity> */}
                    <BackButton/>

                    <Text style={styles.mainText}>Create Account</Text>

                    <View 
                    // behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
                    // keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0} 
                    style={styles.form}
                    >
                        
                            <Text style={styles.smallText}>Name</Text>
                            <ClearableTextInput style={{backgroundColor: 'white'}} placeholderTextColor="#003f5c"/>
                            <Text style={styles.smallText}>Email</Text>
                            <ClearableTextInput style={{backgroundColor: 'white'}} placeholderTextColor="#003f5c"/>
                            <Text style={styles.smallText}>Password</Text>
                            <ClearableTextInput
                                style={{backgroundColor: 'white'}} 
                                secureTextEntry  
                                placeholderTextColor="#003f5c"
                                textContentType={'oneTimeCode'}
                            />
                            <Text style={styles.smallText}>Confirm Password</Text>
                            <ClearableTextInput style={{backgroundColor: 'white'}} secureTextEntry placeholderTextColor="#003f5c"/>

                            <CustomButton text="Register" ></CustomButton>
                        

                    </View>

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 20,
    },

    mainText: {
        marginTop: 10,
        fontSize: 25,
        letterSpacing: 1,
    },

    arrow: {
        alignSelf: 'flex-start',
        right: 7,
    },

    form: {
        flex: 1,
        width: '100%',
        //marginVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },

    smallText: {
        alignSelf: 'flex-start',
        left: 10,
        marginBottom: 5,
    },

    

});

