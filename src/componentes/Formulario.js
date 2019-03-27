import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Formulario extends Component {

     // Crear los Refs
     ciudadRef = React.createRef();
     paisRef = React.createRef();

     buscarClima = (e) => {
          e.preventDefault();

          // leer los refs y crear el objeto
          const respuesta = {
               ciudad: this.ciudadRef.current.value,
               pais: this.paisRef.current.value
          }
          //console.log(respuesta);

          // enviar por props
          this.props.datosConsulta(respuesta);
     }


     render() { 
          return ( 
               <div className="contenedor-form">
                    <div className="container">
                         <div className="row">
                              <form onSubmit={this.buscarClima}>
                                   <div className="input-field col s12 m8 l4 offset-m2">
                                        <input id="ciudad" ref={this.ciudadRef} type="text" />
                                        <label htmlFor="ciudad">Ciudad: </label>
                                   </div>
                                   <div className="input-field col s12 m8 l4 offset-m2">
                                        <select ref={this.paisRef}>
                                             <option value="" defaultValue>Elige un país</option>
                                             <option value="AR">Argentina</option>
                                             <option value="BR">Brasil</option>
                                             <option value="CO">Colombia</option>
                                             <option value="CR">Costa Rica</option>
                                             <option value="ES">España</option>
                                             <option value="US">Estados Unidos</option>
                                             <option value="MX">México</option>
                                        </select>
                                        <label htmlFor="pais">Pais: </label>
                                   </div>
                                   <div className="input-field col s12 m6 l4 offset-m3 buscador">
                                        <input type="submit" className="waves-effect waves-light btn-large yellow accent-4 text-center" value="Buscar" />
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
           );
     }
}

Formulario.propTypes = {
     datosConsulta: PropTypes.func.isRequired
}
 export default Formulario;