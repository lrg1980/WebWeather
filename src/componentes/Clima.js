import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {

     mostrarResultado = () => {

          // obtener los datos de la consulta
          const { name, weather, main } = this.props.resultado;
          // Si no hay nombre, info de clima y info de max y min de temp, devuelve nulo.
          if (!name || !weather || !main) return null;

          const kelvin = 273.15;
          const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
          const alt = `clima de ${name}`;
          return (
               <div className="row">
                    <div className="resultado col s12 m8 l6 offset-m3 offset-l3">
                         <div className="card-panel light-blue align-center">
                              <span className="white-text align-center">
                                   <h2>Resultado del clima: <b>{name}</b></h2> 
                                        
                                   <p className="temperatura">
                                        Actual: {(main.temp - kelvin).toFixed(1)} &deg;C
                                        <img src={urlIcono} alt={alt} />
                                   </p>
                                   <p> Max. {(main.temp_max - kelvin).toFixed(1)} &deg;C</p>
                                   <p> Min. {(main.temp_min - kelvin).toFixed(1)} &deg;C</p>
                              </span>                         
                         </div>

                    </div>
               </div>
               
          )
     }
     
     render() { 
          //console.log(this.props.resultado);
          return (
               <div className="container">
                    {this.mostrarResultado()}
               </div>
            );
     }
}
 
Clima.propTypes = {
     resultado: PropTypes.object.isRequired
}
export default Clima;