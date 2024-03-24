import { Button, Container, Row } from "react-bootstrap"
import BarreNavigation from "../../../Navbars/NavBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../InfoContext"
import Footer from "../../../footer"

import axios from "axios"
import { AuthenticateContext } from "../../../../../controlPanel/AuthContext"
import ACatProd from "../../../Panier/ACatProd"
import { Link } from "react-router-dom"


function ValidCart(){
    const [userInfo] = useContext(UserContext)
    const [authInfo] = useContext(AuthenticateContext)
    const [cart, setCart] = useState([])
    const [quantite, setQuantite] = useState()

    const api = axios.create({
        baseURL: "http://localhost:3002/api", 
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })

    useEffect(()=>{

        const HandleOpen = ()=>{
            api.get('/MyAccount/'+authInfo.userId+'/Mon-panier')
            .then(rep=>{
                console.log('Affichage du panier ');
                console.log(rep.data.ArticlesPanier)
                setCart(rep.data.ArticlesPanier.article)
                setQuantite(rep.data.ArticlesPanier.quantity)
            })
            .catch(()=>{
                alert("Aucun compte utilisateur connecté !!")
            })
        }
        HandleOpen()
    })




    return( 
    <>
       <BarreNavigation/>

       <Container>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}> <span style={{borderRadius: "50%",border:'1px solid black', backgroundColor: "rgba(121,32,22,.4)", margin: 5, width: 30, textAlign:'center'}}>1</span><span style={{borderBottom: "6px solid rgba(121,32,22,.4)"}}>Validation du panier</span><span style={{borderRadius: "50%", margin: 5, width: 30, textAlign:'center',border:'1px solid black'}}>2</span><span>Information du paiement</span><span style={{borderRadius: "50%", margin: 5, width: 30, textAlign:'center',border:'1px solid black'}}>3</span><span>Validation de la commande</span></div>
       </Container>

        <Container style={{ backgroundColor:"rbga(12,132,23,0.5)"}}>
            <h1> Mon panier </h1>
            <div style={{ backgroundColor:"rgba(120,12, 100,0.10)" , padding: 40, justifyContent: 'space-around'}}>
           <span>Il y a actuellement [{quantite}] d'articles dans le panier </span> 
                {cart.map(c=><ACatProd image={c.image} id={c.prod} prix={c.prixT} Qty={c.Qty} nom={c.nom} key={c._id}  />)}
            </div>


            <div style={{margin: 15, display:"flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <Button variant="danger" as={Link} to="/" className="col-md-6"> Continuer vos achats </Button>
        <Button variant="outline-success" className="col-md-5" as={Link} to="/MyAccount/:id/validCommande">Valider le panier</Button>
         </div>
        </Container>



       <Footer/>

    </>
    )
}

export default ValidCart