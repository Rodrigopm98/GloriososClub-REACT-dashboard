import React from 'react';

function MovieList(props){
   
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>${props.price}</td>
                <td>{props.discount}%</td>
                <td>{props.dbRelations[2]}</td>
                <td>{props.dbRelations[3]}</td>
                <td>{props.dbRelations[1]}</td>
                <td>{props.dbRelations[4].admin}</td>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;