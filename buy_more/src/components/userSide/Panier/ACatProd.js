import { Button, ButtonGroup, Col, Container, Image } from "react-bootstrap"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6"

import axios from "axios"
import { useContext } from "react"
import { AuthenticateContext } from "../../../controlPanel/AuthContext"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Profile/InfoContext"
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})


function ACatProd(props){
    const [authInfo] = useContext(AuthenticateContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    // Retirer un article du panier 

    const RemoveElementFromCart = () =>{
        api.delete('/MyCart/'+authInfo.userId+"/"+props.id)
        .then((rep) => {
            console.log("Le produit a bien été retiré du panier !");
            console.log(props.id);
            
        }).catch((err) => {
            console.log("Le produit n'a pas été retiré du panier ! ");
            console.log(props.id);

        });
    }

    // Ajouter un article au panier 
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

    const ReduceItem = ()=>{
        api.put('/MyAccount/'+authInfo.userId+'/Mon-panier',{
            "productId": props.id
        })
        .then(()=> {

            console.log("Utilisateur "+authInfo.userId+" Connecté !!" )
            console.log("Produit " +props.id+ " réduit de 1 ");
        })
        .catch(()=>{
            console.log("Utilisateur "+authInfo.userId+" Connecté !!" )
            console.log("Le produit "+props.id+" n'a pas été réduit !!");
        })
    }


    // Réduire la quantite d'un article du panier 

    return(
        <>
        <Container style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around",  backgroundColor: "white",marginTop: 10, padding: 15}}>
            <div className="Image">
            <Col >
                 <Image src={props.image} style={{width: 40, height:50 }} />
            </Col>

            </div>
            <div className="Nom" style={{width:260}}>
                <a> {props.nom} </a>
            </div>

            <div className="SupprimerDuPanier">
                <Button variant='outline-danger' id={props.id} onClick={RemoveElementFromCart}> <FaTrash /> </Button>
            </div>

            <div className="boutonsGroupes">
            <ButtonGroup aria-label="Basic example">
                <Button variant="danger" onClick={ReduceItem}><FaMinus/> </Button>
                <Button variant="light" disabled='true'>{props.Qty}</Button>
                <Button variant="success" onClick={AddToCart}><FaPlus/></Button>
            </ButtonGroup>

            </div>
            <div className="prix" style={{color: "rgba(1,132,32,0.5)"}}>
                <h5>{props.prix}&euro;</h5>
            </div>
        </Container>
        
        </>
    )
}

export default ACatProd