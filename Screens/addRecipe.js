import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Image } from 'react-native';
import { Button } from 'react-native';

export default class addRecipe extends Component{

    state = {
        recipe_name : '',
        recipe_description : '',
        ingredients : '',
        steps : '',
        uid : firebase.auth().currentUser.email,
    }

    add_recipe = () => {
        firestore.collection('recipes').add({
            'recipe_name' : this.state.recipe_name,
            'recipe_description' : this.state.recipe_description,
            'ingredients' : this.state.ingredients,
            'steps' : this.state.steps,
            'uid' : this.state.uid,
            'ratings' : 0
        })

        firestore.collection('notifications').add({
            'recipe_name' : this.state.recipe_name,
            'created' : firebase.firestore.FieldValue.serverTimestamp(),
            'recipe_description' : this.state.recipe_description,
            'message' : 'Mark as read',
        })
        
        alert('Recipe added successfully');
    }

    render(){
        return(
            <View>

               <Header 
                centerComponent = {<Text style = {{fontSize : 26}}> Home </Text>}
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

            <ImageBackground source = {require('../Images/AddRecipeScreen.png')} style = {{
                alignSelf : 'center',
                height : '100%',
                width : '100%'
            }}>

                
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        recipe_name : text
                    })
                }} placeholder = {'Enter recipe name'} style = {style.recipe_name}></TextInput>

                <TextInput onChangeText = {(text) => {
                    this.setState({
                        recipe_description : text
                    })
                }} placeholder = {'Enter recipe description'} multiline = {true} style = {style.recipe_description}></TextInput>

                <TextInput onChangeText = {(text) => {
                    this.setState({
                        ingredients : text
                    })
                }} placeholder = {'Enter ingredients'} multiline = {true} style = {style.ingredients}></TextInput>

                <TextInput onChangeText = {(text) => {
                    this.setState({
                        steps : text
                    })
                }} placeholder = {'Enter steps'} multiline = {true} style = {style.steps}></TextInput>

                <TouchableOpacity onPress = {() => {
                    this.add_recipe();
                }}>
                    <Text style = {style.button}> Add recipe </Text>
                </TouchableOpacity>
                </ImageBackground>

                <ScrollView></ScrollView>

            </View>
        )
    }
}

const style = StyleSheet.create({
    recipe_name : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 50,
        marginTop : 50,
        marginBottom : 10,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10
    },

    recipe_description : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 250,
        marginTop : 10,
        marginBottom : 10,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10,
    },

    ingredients : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 250,
        marginTop : 10,
        marginBottom : 10,
        textAlign : 'center',
        fontSize : 18,
        borderRadius : 10
    },

    steps : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 250,
        marginTop : 10,
        marginBottom : 10,
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