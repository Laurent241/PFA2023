

import {AiOutlineArrowRight} from 'react-icons/ai'


function ACommande(props){
    return (
        <tr>
        <td>{props.dateL}</td>
        <td>{props.Quantity}</td>
        <td>{props.Statut}</td>
        <td>{props.Prix}</td>
        <td><AiOutlineArrowRight/></td>
      </tr>
    )
}

export default ACommande;