import React, { Component } from 'react'

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: []
    }
  }
  componentDidMount(){
  fetch('/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
        //console.log(products)
        this.setState({ productos: products.products })
      })
      .catch(error => console.log(error)) 
  }
  render() {
    let contenido
    if (this.state.productos.length == 0) {
      contenido = <h3>Cargando...</h3>
    } else {
      /* console.log(this.state.productos) */
      contenido = <p>{this.state.productos[0].name}</p>
    }
    /* console.log(this.state.productos ) */
    return (
      <React.Fragment>
        {contenido}
        


      </React.Fragment>
    )
  }
}

export default Productos