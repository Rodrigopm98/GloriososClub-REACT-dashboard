import React, { Component } from 'react';
import MovieList from './MovieList';

class Movie extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount() {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(productos => {
                this.setState({ products: productos.products })
            })
            .catch(error => console.log(error))

    }


    render() {

        let contenido
        if (this.state.products.length === 0) {
            contenido = <h3>Cargando...</h3>
        } else {
            /* console.log(this.state.productos) */
            contenido = <div>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">All products in the Database</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Sport</th>
                                        <th>Brand</th>
                                        <th>Size</th>
                                        <th>Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        //console.log(this.state.movies)
                                        this.state.products.map((movie, index) => {
                                            return <MovieList  {...movie} key={index} />
                                        })
                                    }
                                </tbody>

                            </table>
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
export default Movie;
