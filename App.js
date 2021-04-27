// ma'am now filtering is not working 
// and also the uploading image for the recipes is not working 


import React, {Component} from 'react';
import { Image } from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import contentComponent from './contentComponent';
import addRecipe from './Screens/addRecipe';
import Home from './Screens/Home';
import Login from './Screens/Login';
import MyRecipes from './Screens/MyRecipes';
import Notifications from './Screens/Notifications';
import recipe_details from './Screens/recipe_details';
import Settings from './Screens/Settings';
import Signup from './Screens/Signup';
import SplashScreen from './Screens/SplashScreen';

export default class App extends Component{

  render(){
    return(
      <AppContainer/>
    )
  }
}

const UserAuth = createBottomTabNavigator({
  Login : {
    screen : Login,
    navigationOptions : {
      tabBarIcon : <Image source = {require('./Images/LoginIcon.png')} style = {{
        width : 31,
        height : 31,
        alignSelf : 'center',
      }}></Image>
    }
  },

  Signup : {
    screen : Signup,
    navigationOptions : {
      tabBarIcon : <Image source = {require('./Images/SignupIcon.png')} style = {{
        width : 31,
        height : 31,
        alignSelf : 'center',
      }}></Image>
    }
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Home : {
    screen : Home,
    navigationOptions : {
      tabBarIcon : <Image source = {require('./Images/HomeIcon.png')} style = {{
        width : 31,
        height : 31,
        alignSelf : 'center',
      }}></Image>,
      tabBarLabel : 'Home'
    }
  },
  addRecipe : {
    screen : addRecipe,
    navigationOptions : {
      tabBarIcon : <Image source = {require('./Images/AddRecipe.png')} style = {{
        width : 31,
        height : 31,
        alignSelf : 'center',
      }}></Image>,
      tabBarLabel : 'Add recipe'
    }
  }
})

const DrawerNavigator = createDrawerNavigator({
  BottomTabNavigator : {
    screen : BottomTabNavigator,
    navigationOptions : {
      drawerLabel : 'Home'
    }
  },

  MyRecipes : {
    screen : MyRecipes,
    navigationOptions : {
      drawerLabel : 'My recipes'
    }
  },

  Notifications : {
    screen : Notifications,
    navigationOptions : {
      drawerLabel : 'Notifications'
    }
  },

  Settings : {
    screen : Settings,
    navigationOptions : {
      drawerLabel : 'Settings'
    }
  },

  recipe_details : {
    screen : recipe_details,
    navigationOptions : {
      drawerLabel : 'Recipe details'
    }
  }
},

{
  contentComponent : contentComponent
},
{
  initialRouteName : 'Home'
})

const SwitchNavigator = createSwitchNavigator({
  SplashScreen : {
    screen : SplashScreen
  },

  UserAuth : {
    screen : UserAuth
  },

  DrawerNavigator : {
    screen : DrawerNavigator
  },
})

const AppContainer = createAppContainer(SwitchNavigator);

