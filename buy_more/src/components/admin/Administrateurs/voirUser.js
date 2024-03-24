import {FaRegEye} from 'react-icons/fa';
import axios from 'axios';
import { Button } from 'react-bootstrap';
const api = axios.create({
    baseURL:"http://localhost:3002/api"
})

function DisplayUserInfo(){

    const Affichage = () =>{
        api.get('/Admin/allAccounts')
        .then(()=>{console.log("Afficage des informations du compte ")})
    }

    return(
        <Button variant='dark' onClick={Affichage}><FaRegEye></FaRegEye></Button>
    )
}

export default DisplayUserInfo