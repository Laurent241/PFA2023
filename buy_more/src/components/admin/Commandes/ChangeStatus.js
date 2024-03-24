import {AiOutlineArrowRight, AiOutlineCheckSquare} from 'react-icons/ai'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})


function ChangeStatus (props){
    const navigate = useNavigate()

    const change = ()=>{
        api.put('/Admin/AllOrder/Order/'+props.id)
        .then(()=>{
            console.log("Le statut de la commande "+props.id+" a été modifé ! ");
            navigate('/Admin/orders')
        })
        .catch(()=>{
            console.log("Modification du statut impossible !!");
        })
    }

    
    if(props.Statut === 'En attente')
    {

        return(
                <>
                <Button onClick={change} variant='outline-info' id={props.id} Statut={props.Statut}>
                    <AiOutlineCheckSquare style={{fontSize: 30}}/>
                </Button>
                </>
        )
    }


    else if(props.Statut === 'En cours')
    {

        return(
                <>
                <Button onClick={change} variant='outline-success' id={props.id} Statut={props.Statut}>
                    <AiOutlineCheckSquare style={{fontSize: 30}}/>
                </Button>
                </>
        )
    }


    if(props.Statut === 'Livré')
    {

        return(
                <>
                <Button onClick={change} variant='danger' id={props.id} Statut={props.Statut} disabled>
                    <AiOutlineCheckSquare style={{fontSize: 30}}/>
                </Button>
                </>
        )
    }
}

export default ChangeStatus