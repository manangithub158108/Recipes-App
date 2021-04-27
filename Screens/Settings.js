import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Header, Image} from 'react-native-elements';

export default class Settings extends Component{

    state = {
        name : '',
        contact_no : '',
        email : '',
        id :'',
        username : '',
        updated_name : '',
        updated_contact_no : '',
        updated_email : '',
        updated_username : '',
    }

    componentDidMount = () => {
        firestore.collection('users').where('email', '==', firebase.auth().currentUser.email).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                var data = doc.data();
                this.setState({
                    name : data.name,
                    contact_no : data.contact_no,
                    email : data.email,
                    username : data.username,
                    id : doc.id
                })
            })
        })
    }

    updateProfile = async() => {
        await firestore.collection('users').doc(this.state.id).update({
            'email' : this.state.updated_email,
            'username' : this.state.updated_username,
            'name' : this.state.updated_name,
            'contact_no' : this.state.updated_contact_no,
        })
    }


    render(){
        return(
            <View style = {{
                backgroundColor : '#222831',
                height : '100%'
            }}>

                <Header 
                centerComponent = {<Text style = {{fontSize : 26}}> Settings </Text>}
                leftComponent = {
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.openDrawer();
                    }}>
                    <Image source = {require('../Images/hamburgerIcon.png')} style = {{
                        width : 30, 
                        height : 30,
                        alignSelf : 'center'
                    }}></Image>
                    </TouchableOpacity>
                }
                rightComponent = {
                    <TouchableOpacity onPress = {()=> {
                        this.props.navigation.navigate('Notifications');
                    }}>
                    <Image source = {require('../Images/bellIcon.png')} style = {{
                        width : 30, 
                        height : 30,
                        alignSelf : 'center'
                    }}></Image>
                    </TouchableOpacity>
                }></Header>


                <TextInput onChangeText = {(text) => {
                this.setState({
                    updated_name : text
                })
            }} placeholder = {'Enter name'} style = {style.name} defaultValue = {this.state.name}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                updated_username : text
            })
        }} placeholder = {'Enter username'} style = {style.username} defaultValue = {this.state.username}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                updated_contact_no : text
            })
        }} placeholder = {'Enter contact number'} style = {style.phone_no} defaultValue = {this.state.contact_no}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
                updated_email : text
            })
        }} placeholder = {'Enter email'} keyboardType = {'email-address'} style = {style.username} 
        defaultValue = {this.state.name}></TextInput>

            <TouchableOpacity onPress = {() => {
                this.updateProfile();
            }}>
                <Text style = {style.button}> Update Profile </Text>
            </TouchableOpacity>
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

  {/* Chahoo mein ya na , {Ashique 2}
            {/* Chords : A minor, G major, f major, G major, {Lyrics to be written}  */}        