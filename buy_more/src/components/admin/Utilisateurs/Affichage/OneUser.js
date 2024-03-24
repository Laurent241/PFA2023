
import { Button } from 'react-bootstrap'
import {RiUserSettingsLine} from 'react-icons/ri'
import GiveRight from '../giveRight'
import DisplayUserInfo from '../../Administrateurs/voirUser'


function OneUser(props){

    return(
        <>
         <tr>
            <td>{props.Nom}</td>
            <td>{props.Prenom}</td>
            <td>{props.Email}</td>
            <td><span style={{color:'green', fontWeight:'bold'}}>+241</span> {props.Telephone}</td>
            <td>{props.Adresse}</td>
            <td><DisplayUserInfo/></td>
            <td>Suprimer</td>
            <td><GiveRight id={props.id} Admin={props.Admin}/></td>

        </tr>
         </>
    )
}

export default OneUser