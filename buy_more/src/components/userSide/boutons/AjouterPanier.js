import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthenticateContext } from "../../../controlPanel/AuthContext"


import axios from "axios";
import { BsFillCartPlusFill } from "react-icons/bs";



function AjouterPanier (props){
    const [authInfo] = useContext(AuthenticateContext)
    
    const api = axios.create({
        baseURL: "http://localhost:3002/api",
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })

    const AddToCart = (data) =>{
        api.post('/Ajouter-au-panier/'+authInfo.userId,{
            "productId": props.id
        })
        .then(()=> {

            console.log("Utilisateur "+authInfo.userId+" Connecté !!" )
            console.log("Produit " +props.id+ " ajouté au panier ");
        })
        .catch(()=>{
            console.log("Utilisateur "+authInfo.userId+" Connecté !!" )

            console.log("Le produit "+props.id+" n'a pas été ajouté au panier !!");
        })
    }

    return(
        <Button variant="outline-success" style={{transition:'.7s', borderRadius:'25%',height:50}} id="productId" value={props.id} onClick={AddToCart}> <BsFillCartPlusFill style={{ fontSize: 20 }}/></Button>
        )
}

export default AjouterPanier