import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import {Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import {LottieView} from 'lottie-react-native';
import { ScrollView } from 'react-native';

export default class SplashScreen extends Component{
    render(){
        return(
            <View style = {{
                height : '100%'
            }}>

            <ImageBackground source = {require('../Images/SplashScreen.png')} style = {style.image}>

                <ScrollView>
                    
                        <Text style = {style.email}> My Recipes App </Text>
                        <Text style = {style.password}> This is a recipe app where you can easily get all the recipes at your finger tips 
                            without any difficulty, Moreover you can also add your own recipes which can help other people to 
                            make delecious recipes. Hope that you like it !!
                        </Text>
                        <TouchableOpacity onPress = {() => {
                            this.props.navigation.navigate('UserAuth');
                        }}>
                            <Text style = {style.button}> Get started </Text>
                        </TouchableOpacity>

                </ScrollView>
                    
                </ImageBackground>

                </View>
            
        )
    }
}

const style = StyleSheet.create({

    image : {
        width : '100%',
        height : '100%',
        backfaceVisibility : 'hidden',
        
    },
    
        email : {
            display : 'flex',
            justifyContent : 'center',
            alignSelf : 'center',
            color : '#ffac41',
            backgroundColor : '#2d132c',
            width : '70%',
            height : 80,
            marginTop : 100,
            marginBottom : 150,
            textAlign : 'center',
            fontSize : 25,
            borderRadius : 10,
            textAlignVertical : 'center'
        },
    
        phone_no : {
            display : 'flex',
            justifyContent : 'center',
            alignSelf : 'center',
            color : '#eeeeee',
            backgroundColor : '#393e46',
            width : '80%',
            height : 100,
            marginTop : 10,
            marginBottom : 50,
            textAlign : 'center',
            fontSize : 18,
            borderRadius : 10
        },
    
        password : {
            display : 'flex',
            justifyContent : 'center',
            alignSelf : 'center',
            color : '#ffac41',
            backgroundColor : '#2d132c',
            width : '80%',
            height : 350,
            marginTop : -100,
            marginBottom : 70,
            textAlign : 'center',
            fontSize : 21,
            borderRadius : 10,
            textAlignVertical : 'center',
            paddingLeft : 20,
            paddingRight : 20,
            
        },
    
        button : {
            display : 'flex',
            justifyContent : 'center',
            alignSelf : 'center',
            color : '#acdbdf',
            backgroundColor : 'black',
            width : '80%',
            height : 60,
            marginTop : 80,
            marginBottom : 20,
            textAlign : 'center',
            fontSize : 20,
            borderRadius : 30,
            textAlignVertical : 'center'
        },
    })