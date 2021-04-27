import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Card, Header } from 'react-native-elements';
import firebase from 'firebase';
import firestore from '../config';
import { TextInput } from 'react-native';

export default class recipe_details extends Component{

    state = {
        recipe_name : this.props.navigation.getParam('details')['recipe_name'],
        recipe_description : this.props.navigation.getParam('details')['recipe_description'],
        steps : this.props.navigation.getParam('details')['steps'],
        ingredients : this.props.navigation.getParam('details')['ingredients'],
        uid : '',
        docID : ''
    }

    componentDidMount = () => {
        firestore.collection('recipes').where('recipe_name', '==', this.state.recipe_name).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                var recipe_data = doc.data();
                this.setState({
                    uid : recipe_data.uid,
                    docID : doc.id
                })
            })
        })
    }

    IncrementRatings = async() => {
        await firestore.collection('recipes').doc(this.state.docID).update({
            'ratings' : firebase.firestore.FieldValue.increment(1),
        })
    }

    DecrementRatings = async() => {
        await firestore.collection('recipes').doc(this.state.docID).update({
            'ratings' : firebase.firestore.FieldValue.increment(-1),
        })
    }

    render(){
        return(
            <View style = {{
                backgroundColor : '#206a5d',
                height : '100%',
            }}>
                <ScrollView>

                <Header 
                centerComponent = {<Text style = {{fontSize : 26}}> Recipe details </Text>}
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
                }
                ></Header>

                        <Card title = {'Recipe name'} containerStyle = {{borderRadius : 30, 
                            height : 150, 
                            backgroundColor : '#81b214'
                        }}
                        titleStyle = {{
                            fontSize : 30,
                            fontWeight : 'bold',
                            color : 'black'
                        }}>
                            <TextInput defaultValue = {this.state.recipe_name} style = {style.recipe_name} 
                            multiline = {true} editable = {false} scrollEnabled = {true}></TextInput>
                        </Card>

                        <Card title = {'Recipe description'} containerStyle = {{borderRadius : 30, 
                            backgroundColor : '#81b214',
                            height : '15%'
                        }}
                        titleStyle = {{
                            fontSize : 30,
                            fontWeight : 'bold',
                            color : 'black'
                        }}>
                        <TextInput defaultValue = {this.state.recipe_description} style = {style.recipe_description} multiline
                         editable = {false} scrollEnabled = {true}></TextInput>
                        </Card>

                        <Card title = {'Steps to follow'} containerStyle = {{borderRadius : 30, 
                            height : '30%', 
                            backgroundColor : '#81b214'
                        }}
                        titleStyle = {{
                            fontSize : 30,
                            fontWeight : 'bold',
                            color : 'black'
                        }}>
                        <TextInput defaultValue = {this.state.steps} style = {style.steps} multiline editable = {false}
                        scrollEnabled = {true} ></TextInput>
                        </Card>

                        <Card title = {'Ingredients required'} containerStyle = {{borderRadius : 30, 
                            height : '10%', 
                            backgroundColor : '#81b214'
                        }}
                        titleStyle = {{
                            fontSize : 30,
                            fontWeight : 'bold',
                            color : 'black'
                        }}>
                        <TextInput defaultValue = {this.state.ingredients} style = {style.ingredients}
                        multiline  editable = {false} scrollEnabled = {true}></TextInput>
                        </Card>

                        <Card title = {"Chef's Email"} containerStyle = {{borderRadius : 30, 
                            height : 150, 
                            backgroundColor : '#81b214'
                        }}
                        titleStyle = {{
                            fontSize : 30,
                            fontWeight : 'bold',
                            color : 'black'
                        }}>
                        <TextInput defaultValue = {this.state.uid} style = {style.recipe_name} multiline  editable = {false}
                        scrollEnabled = {true}></TextInput>
                        </Card>


                        <Text style = {{
                            fontSize : 25,
                            color : 'black',
                            marginTop : 30,
                            marginBottom : 30,
                            textAlign : 'center'
                        }}> How would like to rate this recipe ? </Text>
                        <TouchableOpacity onPress = {() => {
                            this.IncrementRatings();
                        }}>
                            <Image source = {require('../Images/thumbsup.png')} style = {{
                                height : 100,
                                width : 100,
                                alignSelf : 'center',
                                marginTop : 10,
                                marginBottom : 10
                            }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {
                            this.DecrementRatings();
                        }}>
                            <Image source = {require('../Images/thumbsdown.png')} style = {{
                                height : 100,
                                width : 100,
                                alignSelf : 'center',
                                marginBottom :200,
                            }}></Image>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    recipe_name : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#000000',
        width : '80%',
        height : 50,
        marginTop : 0,
        marginBottom : 10,
        textAlign : 'center',
        fontSize : 25,
        borderRadius : 10
    },
  
    recipe_description : {
      display : 'flex',
      justifyContent : 'center',
      alignSelf : 'center',
      color : '#000000',
      width : '80%',
      height : 170,
      marginBottom : 10,
      textAlign : 'center',
      fontSize : 20,
      borderRadius : 10
  },

  ingredients : {
    display : 'flex',
    justifyContent : 'center',
    alignSelf : 'center',
    color : '#000000',
    width : '80%',
    height : 50,
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
    color : '#000000',
    width : '80%',
    height : 350,
    marginTop : 10,
    marginBottom : 10,
    textAlign : 'center',
    fontSize : 18,
    borderRadius : 10
},
  
    
  })