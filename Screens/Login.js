import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { ImageBackground } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import ToastAndroid from 'react-native';

export default class Login extends Component{

    state = {
        email : '',
        password : ''
    }

    userLogin = () => {
            const login = firebase.auth().signInWithEmailAndPassword(
                this.state.email, this.state.password
            ).then((response) => {
                alert('User logged in Successfully');
                this.props.navigation.navigate('Home');
            })
    }

  render(){
    return(
      <View>
          <ImageBackground source = {require('../Images/LoginScreen.png')} style = {{
              alignSelf : 'center',
              height : '100%',
              width : '100%'
          }}>
              <KeyboardAvoidingView>
        <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} placeholder = {'Enter Email'} keyboardType = {'email-address'} style = {style.email}></TextInput>
        <TextInput onChangeText = {(text) => {
            this.setState({
                password : text
            })
        }} placeholder = {'Enter Password'} secureTextEntry = {true} style = {style.password}></TextInput>
        <TouchableOpacity onPress = {() => {
            this.userLogin();
        }}>
            <Text style = {style.button}> Login </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        <Image source = {require('../Images/LoginScreenlogo.png')} style = {{
                  marginTop : 100,
                  alignSelf : 'center',
                  width : 200,
                  height : 200,
                  borderRadius : 30,
              }}></Image>
        </ImageBackground>
      </View>
    )
  }
}

const style = StyleSheet.create({
    email : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 50,
        marginTop : 150,
        marginBottom : 10,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10
    },

    phone_no : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 50,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10
    },

    address : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 200,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },

    password : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 50,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10
    },

    button : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#00adb5',
        width : '80%',
        height : 40,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },
})



