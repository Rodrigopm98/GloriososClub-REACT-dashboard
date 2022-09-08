import React, {Component} from 'react';
/* import imagenFondo from '../assets/images/mandalorian.jpg'; */
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
const images = require.context('C:/Users/Peralta/OneDrive/Escritorio/DHC13/grupo 8 Gloriosos club/Grupo_8_GloriososClub/public/images', true)

class ContentRowTop extends Component{
    constructor(props) {
        super(props);
        this.state = {
          lastProduct: []
        }
      }
      componentDidMount(){
      fetch('/api/products')
          .then(respuesta => {
            return respuesta.json()
          })
          .then(products => {
           
            let ultimo = products.products.length -1;
           /* console.log("../assets/image/"+products.products[ultimo].image ) */
            this.setState({ lastProduct: products.products[ultimo] })
          })
          .catch(error => console.log(error)) 
      }
    render(){
        let contenido
    if (this.state.lastProduct.length === 0) {
      contenido = <h3>Cargando...</h3>
    } else {
        let imagen = this.state.lastProduct.image;
     /*  let imagen = "../assets/images/"+this.state.lastProduct.image; */
      
      contenido = <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard - Gloriosos Club</h1>
      </div>
  
      {/*<!-- Content Row Movies-->*/}
      <ContentRowMovies />
      {/*<!-- End movies in Data Base -->*/}
      

      {/*<!-- Content Row Last Movie in Data Base -->*/}
      <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={images(`./${imagen}`)} alt=" Star Wars - Mandalorian "/>
                      </div>
                      <p>{this.state.lastProduct.name} </p>
            
                  </div>
              </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <GenresInDb />

          {/*<!--End Genres In Db-->*/}		
      </div>
  </div>
    }
        
  return (
    <React.Fragment>
				{contenido}
				
				

        </React.Fragment>
  )}
}

export default ContentRowTop