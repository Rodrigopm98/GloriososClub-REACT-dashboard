import React, { Component } from 'react'

let productInDataBase = {
  color:   "primary",
  titulo: "Movies in Data Base",
  valor: 21,
  icono: "fas fa-film",
}

let amount ={
  color:   "success",
  titulo: "Total awards",
  valor: 79,
  icono: "fas fa-award",
}

let user = {
  color:   "warning",
  titulo: "Actors quantity",
  valor: 49,
  icono: "fas fa-user",
}

let productos = [productInDataBase,amount,user];

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardProps: []
    }
  }
  componentDidMount(){
  fetch('/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
       
        /* productos[0].valor = products.count */
      
        this.setState({ cardProps: [productos[0].color] })
      })
      .catch(error => console.log(error)) 
  }
  render() {
    let contenido
    if (this.state.cardProps.length === 0) {
      contenido = <h3>Cargando...</h3>
    } else {
      /* console.log(this.state.productos) */
      contenido = <p>{this.state.cardProps}</p>
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