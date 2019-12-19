import React from 'react';

const HolaMundo = () => {
    const Hello = '¡Hola Mundo!';
    const isTrue = true;
    return(
        //en react se coloca className para asignar una clase ya que class es una palabra recervada de javascript, de esta 
        //manera es como se estara asignando en jsx
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial De React</h2>
            <img src="http://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    )
}

export default HolaMundo;