import DeleteProduit from "../boutons/supprimer"


function AProduct(props){

    return(
        <tr>
            <td>{props.Nom}</td>
            <td>{props.Categorie}</td>
            <td>{props.Prix}</td>
            <td>Modifier</td>
            <td><DeleteProduit id={props.id}/></td>
            <td>Afficher</td>
          
        </tr>
    )
}

export default AProduct