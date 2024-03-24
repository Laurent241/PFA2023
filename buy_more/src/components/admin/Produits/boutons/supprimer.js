import { Button } from 'react-bootstrap'
import {FaTrash} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})


function DeleteProduit(props){

    const navigate = useNavigate()

    const Delete = async()=>{
        api.delete('/Administration/Prod/'+props.id)
        .then(()=>{
            console.log('produit supprimé avec succes');
            navigate('/Admin/manageProduits')
        })
    }

    return(

        <Button onClick={Delete} variant='outline-danger'><FaTrash></FaTrash></Button>
    )
}

export default DeleteProduit