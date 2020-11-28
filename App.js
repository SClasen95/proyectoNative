import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import Resultado from './resultado.js';
const request = require('request-promise');
const convertir = require("./libraryCurrency.js");

export default class App extends Component {
  
  render(){

    return (

      <NavigationContainer>
        <DrawerCustomNavigator />
      </NavigationContainer>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
