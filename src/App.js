import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';


class App extends Component {
  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
  }
  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    
    // leer la url y agregar el API key
    const appID = '2a65c18305b85ca81f0e2c8bdac556fa';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    //console.log(url);

    // query con fetch api
    
    fetch(url)
      .then(respuesta => {
        //console.log(respuesta)
        return respuesta.json();
      })
      .then(datos => {
        //console.log(datos)
        this.setState({
          resultado: datos
        })
      })
      .catch(error => {
      console.log(error)
    })
    // consultar con fetch
  }
  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
      }
  }
  render() {

    const error = this.state.error;

    let resultado;

    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    } else {
      resultado = <Clima resultado={this.state.resultado}/>
    }

    return (
      <div className="App">
        <Header
          titulo='Clima WebWeather'
        />
        <Formulario
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
       
    );
  }
}

export default App;
