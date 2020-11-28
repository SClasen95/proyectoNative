
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {ConsultaScreen} from "../Screens/ConsultaScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, InfoScreen,ConsultaScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Info" component={InfoScreen} />
                <Drawer.Screen name="Consulta" component={ConsultaScreen} />
            </Drawer.Navigator>
        );
    }
    
}

