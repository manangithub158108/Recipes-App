import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';

export default class Notifications extends Component{

    state = {
        all_notifications : [],
    }

    componentDidMount = () =>{
        firestore.collection('notifications').where('uid', '==', firebase.auth().currentUser.email).onSnapshot((snapshot) => {
            var all_notifications = snapshot.docs.map((doc) => {doc.data()});
            this.setState({
                all_notifications : all_notifications
            })
        })
    }

    renderItem = ({item}) => (
        <ListItem
        title = {item.recipe_name}
        subtitle = {item.recipe_description}
        rightElement = {
            <TouchableOpacity onPress = {() => {
                alert('notfication read successfully');
            }}>
                <Text> Mark as read </Text>
            </TouchableOpacity>
        }></ListItem>
    )

    render(){
        return(
            <View>
                <Header 
                centerComponent = {<Text style = {{fontSize : 26}}> Notifications </Text>}
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

                <FlatList
                data = {
                    this.state.all_notifications
                }
                renderItem = {this.renderItem}></FlatList>
            </View>
        )
    }
}