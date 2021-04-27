import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Header, SearchBar, Card } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default class Home extends Component{

    state = {
        all_recipes : [],
        searchText : '',
    }

    componentDidMount = () => {
        firestore.collection('recipes').onSnapshot((snapshot) => {
            var all_recipes = snapshot.docs.map((doc) => doc.data());
            this.setState({
                all_recipes : all_recipes
            })
        })
    }

    renderItem = ({item}) => (
        <View>
            <Card title = {item.recipe_name}>
                <Text style = {{ textAlign : 'center', marginBottom : 30}}> {item.recipe_description} </Text>
                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate('recipe_details', {'details' : item});
                }}>
                    <Text style = {{ alignSelf : 'center', 
                        backgroundColor : 'orange', 
                        justifyContent : 'center',
                        color : 'black',
                        textAlign : 'center',
                        height : 30,
                        width : '30%'
                    }}> Read more </Text>
                </TouchableOpacity>
            </Card>
        </View>
    )

    // function for searching the user
    searchUser = (recipe) => {
        
    }

    render(){
        return(
            <View>

                <ScrollView>
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

                <SearchBar 
                placeholder = {'Search recipes ...'} 
                onChangeText = {(text) => {
                    this.setState({
                        searchText : text
                    })
                    this.searchUser(text)}} 
                    value = {this.state.searchText}
                ></SearchBar>

                {
                    this.state.all_recipes 
                    ? (
                    <FlatList
                        data = {this.state.all_recipes}
                        renderItem = {this.renderItem}>
                    </FlatList>
                    )
                    : (<Text> There are no recipes currently </Text>)
                }
                
                </ScrollView>
            </View>
        )
    }
}