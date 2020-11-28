import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import {Resultado} from '../resultado.js';
const convertir = require("../libraryCurrency.js");

export class ConsultaScreen extends Component {


constructor(props){
    super(props);
    this.state = {
        monedaBase: "",
        monedaAConsultar: "",
        print: false,
        conversionRates: ""
      }
      this.API = this.getAPI.bind(this);
}

conversion = function (moneda,monedaAConvertir) {
    var conversionRates = moneda.data.conversion_rates[monedaAConvertir];
    this.setState({
      conversionRates:conversionRates,
      print:true
    });
  }
  

getAPI(){
  convertir(this.state.monedaBase)
  .then((m) => {
    this.conversion(m,this.state.monedaAConsultar);
  }).catch((err) => {
    console.log(err);
  });
  
}


    render(){
        let resultado;
        if(this.state.print){
            resultado =  <Resultado conversionRates={this.state.conversionRates} monedaBase={this.state.monedaBase} monedaAConsultar={this.state.monedaAConsultar}/> 
        }

        return(
            <View>
                <Text>Convertir de:</Text>
                <TextInput  onChangeText={text => this.setState({monedaBase:text})}/>
                <Text>Convertir a:</Text>
                <TextInput  onChangeText={text => this.setState({monedaAConsultar:text})}/>
                <Button title="Consultar" onPress={this.API}>
                  </Button>
                <View>
                    {resultado}
                </View>
            </View>


        );
    }
    
}
export default ConsultaScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });