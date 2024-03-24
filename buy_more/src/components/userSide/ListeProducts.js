



function ListProd(props){

    return(

        <table className="striped " bordered hover   >
            <tr>
                <th>Nom Produit</th>
                <th>Prix</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            <tr>
                <td>{props.NomProd}</td>
                <td>{props.PrixProd}</td>
                <td>{props.boutonModifier}</td>
                <td>{props.boutonSupprimer}</td>
            </tr>
        </table>

    )
}

export default ListProd;