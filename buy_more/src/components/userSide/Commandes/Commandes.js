

import {AiOutlineArrowRight} from 'react-icons/ai'


function Commande(){
    return (
        <tr>
        <td>{props.numero}</td>
        <td>{props.date}</td>
        <td>{props.nombre}</td>
        <td>{props.etat}</td>
        <td><AiOutlineArrowRight/></td>
      </tr>
    )
}

export default Commande;