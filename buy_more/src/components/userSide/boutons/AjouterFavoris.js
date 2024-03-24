// import Alert from 'react-bootstrap/Alert'!;
import {BsFillHeartFill} from "react-icons/bs";
import Button from 'react-bootstrap/esm/Button';

import axios from 'axios'
import { useContext } from "react";
import { AuthenticateContext } from "../../../controlPanel/AuthContext";


function AddFavList(props){
    const [authInfo]  = useContext(AuthenticateContext)
    
    const api = axios.create({
        baseURL: "http://localhost:3000/api",
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })
    
    const AddFavorite= (data)=>{
        api.post('/home',{
            "userId":authInfo.userId,
            "produitId":data.id
        })
        .then(console.log('Produit ajouté aux favoris !!'))

    }

return(

    <Button variant="outline-danger" style={{transition:'.7s', borderRadius:'25%',height:50}} id={props.id}>
             <BsFillHeartFill  variant="outline-danger" onClick={AddFavorite}  style={{ fontSize: 20 }}>            
            </BsFillHeartFill>
    </Button>

)}

export default AddFavList;
