import { Button } from 'react-bootstrap'
import {RiForbidLine} from 'react-icons/ri'
import RevoquerDroit from './revoquerDroit'
import DisplayUserInfo from './voirUser'



function OneAdm(props){
    return (
        <tr>
            <td>{props.Nom}</td>
            <td>{props.Prenom}</td>
            <td>{props.Email}</td>
            <td><span style={{color:'green', fontWeight:'bold'}}>+241</span>  {props.Telephone}</td>
            <td>{props.Adresse}</td>
            <td><DisplayUserInfo/></td>
            <td style={{justifyContent:'center',alignContent:'center'}}> <RevoquerDroit id={props.id}/></td>
        </tr>
    )
}

export default OneAdm