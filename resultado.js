import React from "react";
import {Text} from 'react-native';
export class Resultado extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<Text>1 {this.props.monedaBase} equivale a {this.props.conversionRates} {this.props.monedaAConsultar}</Text>);
    }

}
export default Resultado;


