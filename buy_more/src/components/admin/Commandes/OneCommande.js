
import {AiOutlineArrowRight} from 'react-icons/ai'
import ChangeStatus from './ChangeStatus'


function OneCommande(props){
    return (
        <tr>
        <td>{props.Numero}</td>
        <td>{props.UserId}</td>
        <td>{props.dateL}</td>
        <td>{props.Quantity}</td>
        <td>{props.Statut}</td>
        <td>{props.Prix}</td>
        <td><ChangeStatus id={props.id} Statut={props.Statut}/></td>
        <td><AiOutlineArrowRight/></td>
      </tr>
    )
}

export default OneCommande