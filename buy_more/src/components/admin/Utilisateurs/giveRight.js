import { Button } from "react-bootstrap";
import {RiUserSettingsLine} from 'react-icons/ri'

import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})



function GiveRight(props){
    
    const GiveRight = async ()=>{
        api.put('/Administration/newAdd/'+props.id)
        .then(()=>{
            alert('Produit ajouté à la liste des administrateurs !!')
        })

    }

    if(props.Admin){

        return(
            <Button onClick={GiveRight} variant="secondary" disabled><RiUserSettingsLine/></Button>

        )
    }
    else{
        return (
            <Button onClick={GiveRight} variant="outline-success"><RiUserSettingsLine/></Button>
        )

    }

}

export default GiveRight