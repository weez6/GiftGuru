import { StyleSheet, Text, View, Safe, SafeAreaView, Image, Button, TextInput } from 'react-native';
import Login from './App/Pages/Login';
import SignUp from './App/Pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// function HomeScreen({ navigation }) {
//   return(
//     <View style={styles.appContainer}>
//       <Login route={navigation}/>
//     </View>
//   );
// }

// function SignUpScreen() {
//   return(
//     <View style={styles.appContainer}>
//       <SignUp />
//     </View>
//   );
// }

export default function App() {
  // App () is the root component which is rendered in app

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  dummyText : {
    margin:16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16
  },
  
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput : {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  }
});
