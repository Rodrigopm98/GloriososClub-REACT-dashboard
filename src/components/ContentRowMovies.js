import React, { Component } from 'react';
import SmallCard from './SmallCard';

let productsInDataBase = {
    color: "primary",
    titulo: "Products in Data Base",
    valor: "",
    icono: "fas fa-film",
}

let usersInDateBase = {
    color: "success",
    titulo: "Users in Data Base",
    valor: "",
    icono: "fas fa-award",
}

let categories = {
    color: "warning",
    titulo: "Categories quantity",
    valor: "",
    icono: "fas fa-user",
}

let productos = [productsInDataBase, usersInDateBase, categories];


class ContentRowTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardProps: []
        }
    }
    componentDidMount() {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
                let cantidadCategorias = Object.entries(products.countByCategory)
               console.log(products)
                productos[0].valor = products.count
                productos[2].valor = cantidadCategorias.length
                fetch('/api/users')
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(users => {
                    productos[1].valor = users.meta.count;
                    this.setState({ cardProps: [productos[0], productos[1], productos[2]] })
                })
            })
            .catch(error => console.log(error))
       
    }
    render() {
        let contenido
        if (this.state.cardProps.length === 0) {
            contenido = <h3>Cargando...</h3>
        } else {
            /* console.log(this.state.productos) */
            contenido = <div className="row">
                {
                    this.state.cardProps.map((producto, index) => {
                        return <SmallCard  {...producto} key={index} />
                    })
                }
            </div>
        }
        return (
            <React.Fragment>
                {contenido}

            </React.Fragment>
        )
    }
}
export default ContentRowTop;