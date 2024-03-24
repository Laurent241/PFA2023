import { Button } from 'react-bootstrap'
import {RiForbidLine} from 'react-icons/ri'

import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})


function RevoquerDroit(props){

    const RemoveRight = () => {

       if(window.confirm("Voulez-vous vraiment supprimer ce compte de la liste des administrateurs ?")){
           api.put('/Administration/'+props.id)
           .then((rep)=>{
              
               console.log( rep.data)
           })

       }
    }



    return(
        <Button variant='outline-danger' onClick={RemoveRight}><RiForbidLine style={{fontSize: 23}}/></Button>
    )
}

export default RevoquerDroit