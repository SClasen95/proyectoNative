import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Resultado from '../resultado.js';
const convertir = require("../libraryCurrency.js");

export class ConsultaScreen extends Component {


constructor(props){
    super(props);
    this.state = {
        monedaBase: "USD",
        monedaAConsultar: "ARS",
        print: false,
        conversionRates: ""
      }
      this.API = this.getAPI.bind(this);
}

conversion = function (moneda,monedaAConvertir,monedaBase) {
    var conversionRates = moneda.conversion_rates[monedaAConvertir];
    console.log("1 "+monedaBase+" equivale a "+conversionRates+" "+monedaAConvertir);
    //this.state.print=true;   //por algun motivo esto hace q el print salga doble?
    this.setState({
      conversionRates:conversionRates,
      print:true
    });
  }
  

getAPI(){
  convertir(this.state.monedaBase)
  .then((m) => {
    this.conversion(m,this.state.monedaAConsultar,this.state.monedaBase);
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
            <View className="App">
                <Text>Convertir de:</Text>
                <input type="text" name="mb" value={this.state.monedaBase} onChange={event => this.setState({monedaBase:event.target.value})}/>
                <br></br>
                <Text>Convertir a:</Text>
                <input type="text" name="mac" value={this.state.monedaAConsultar} onChange={event => this.setState({monedaAConsultar:event.target.value})}/>
                <br></br>
                <button onClick={this.API} className="btn btn-primary m-1">Consultar</button>
                <View>
                    {resultado}
                </View>
            </View>


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