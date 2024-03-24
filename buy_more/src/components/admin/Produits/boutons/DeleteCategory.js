

import axios from "axios"
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})

function DeleteCategory(props){
    const navigate = useNavigate()

    const deleteCategory =(req, res)=>{
       if( window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?"))
        {
            api.delete('/deleteCat/'+props.id)
            .then(()=>{
                console.log("Catégorie supprimée avec succès !!");
                navigate('/Admin/manageProduits')
            })
        }
    }

    return (
        <>
        <Button variant="warning" onClick={deleteCategory}><FaTrash/></Button>
        </>
    )
}

export default DeleteCategory