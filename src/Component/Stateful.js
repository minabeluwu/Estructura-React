import React, { Component } from 'react';

//Aqui es donde vamos a tener parte de la logica donde va a estar el ciclo de vida de nuestra aplicacion donde estan
//los estados asi como tambien los eventos que vamos a manejar y luego en el render es donde vamos a tener el html
//que vamos a empujar a nuestra aplicacion.  
class Stateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'Hola Mundo'
        }
    }
    render() {
        return(
            <h1>{this.state.hello}</h1>
        )
    }
} 

export default Stateful; 