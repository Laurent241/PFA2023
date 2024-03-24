// Importation des boutons d'affichage et de suppression de la categorie 

import DeleteCategory from "../boutons/DeleteCategory"




function ACategorie(props){
    return(
        <tr>
            <td>{props.NomCategorie}</td>
            <td>{props.NombreArticle}</td>
            <td>Afficher</td>
            <td><DeleteCategory id={props.id}/></td>
        </tr>
    )
}

export default ACategorie
