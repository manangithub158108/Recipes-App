import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

export default class Signup extends Component{

    state = {
        email : '',
        password : '',
        name : '',
        contact_no : 0,
        confirm_password : '',
        username : '',
    }

    userSignup = () => {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.confirm_password
        );
        firestore.collection('users').add({
            'email' : this.state.email,
            'username' : this.state.username,
            'name' : this.state.name,
            'contact_no' : this.state.contact_no,
        })
        alert('User Signup up successfully');
    }

  render(){
    return(
      <View>
        <ImageBackground source = {require('../Images/SignupScreen.png')} style = {{
          alignSelf : 'center',
          height : '100%',
          width : '100%'
        }}>
        <ScrollView>
      <TextInput onChangeText = {(text) => {
            this.setState({
                name : text
            })
        }} placeholder = {'Enter name'} style = {style.name}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                username : text
            })
        }} placeholder = {'Enter username'} style = {style.username}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                contact_no : text
            })
        }} placeholder = {'Enter contact number'} style = {style.phone_no}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                email : text
            })
        }} placeholder = {'Enter email'} keyboardType = {'email-address'} style = {style.username}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                password : text
            })
        }} placeholder = {'Enter password'} secureTextEntry = {true} style = {style.password}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                confirm_password : text
            })
        }} placeholder = {'Enter confirm password'} secureTextEntry = {true} style = {style.password}></TextInput>

        <TouchableOpacity onPress = {() => {
            this.userSignup();
        }}>
            <Text style = {style.button}> Register </Text>
        </TouchableOpacity>
        <Image source = {require('../Images/SignupScreenlogo.png')} style = {{
            marginTop : -30,
            alignSelf : 'center',
            width : 200,
            height : 200,
            borderRadius : 30,
          }}></Image>
        </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const style = StyleSheet.create({
  name : {
      display : 'flex',
      justifyContent : 'center',
      alignSelf : 'center',
      color : '#eeeeee',
      backgroundColor : '#393e46',
      width : '80%',
      height : 50,
      marginTop : 80,
      marginBottom : 10,
      textAlign : 'center',
      fontSize : 18,
      borderRadius : 10
  },

  username : {
    display : 'flex',
    justifyContent : 'center',
    alignSelf : 'center',
    color : '#eeeeee',
    backgroundColor : '#393e46',
    width : '80%',
    height : 50,
    marginTop : 10,
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
      marginBottom : 10,
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
      marginTop : 0,
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
      marginBottom : 70,
      textAlign : 'center',
      fontSize : 20,
      borderRadius : 30
  },
})





