//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, { Component } from 'react';

//Importar nuestro componente
import Genre from './Genre';

class GenresInDb extends Component {
  constructor() {
    super()
    this.state = {
      categoriesList: []
    }
  }
  //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
  //Montaje
  componentDidMount() {
    fetch('/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
        let categoria = Object.keys(products.countByCategory)
        let categorias = categoria.map((cat)=>{
          return cat = {name: (cat.toUpperCase())}

        })
        this.setState({ categoriesList:  categorias })
      })
      .catch(error => console.log(error))

  }


  fondo() {
    let fondoCaja = document.querySelector('.fondoCaja');
    fondoCaja.classList.toggle('bg-secondary');
  }


  render() {
    let contenido
    if (this.state.categoriesList.length === 0) {
      contenido = <h3>Cargando...</h3>
    } else {
      /* console.log(this.state.productos) */
      contenido = <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4 " >
          <div className="card-header py-3">
            <h6 onMouseOver={() => this.fondo()} className="m-0 font-weight-bold text-gray-800 titulo">Categories in Data Base</h6>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
              {
                //console.log(this.state.genresList)
                this.state.categoriesList.map((genre, index) => {
                  return <Genre  {...genre} key={index} />

                })
              }
            </div>
          </div>
        </div>
      </div>
    }
    return (
      <React.Fragment>
        {contenido}


      </React.Fragment>
    )
  }
}
export default GenresInDb;

