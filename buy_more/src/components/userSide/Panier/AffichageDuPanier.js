

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthenticateContext } from "../../../controlPanel/AuthContext"
import { UserContext } from "../Profile/InfoContext"
import { Badge, Button, Offcanvas } from "react-bootstrap"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import ACatProd from "./ACatProd"


function AffichageDuPanier(){
    const [userInfo] = useContext(UserContext)
    const [authInfo] = useContext(AuthenticateContext)
    const [articles, setArticles] = useState([])
    const [quantite, setQuantite] = useState()

    const [show, setShow] = useState(false)
    const handleClose = ()=>{setShow(false)}

    useEffect(()=>{

        
    })
    const handleOpen = ()=>{
        setShow(true)
        api.get('/MyAccount/'+authInfo.userId+'/Mon-panier')
        .then(rep=>{
            console.log('Affichage du panier ');
            console.log(rep.data.ArticlesPanier)
            setArticles(rep.data.ArticlesPanier.article)
            setQuantite(rep.data.ArticlesPanier.quantity)
        })
        .catch(()=>{
            alert("Aucun compte utilisateur connecté !!")
        })
    }


    // const [userInfo] = UserContext(UserContext) 
    
    const api = axios.create({
        baseURL: "http://localhost:3002/api", 
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })

    // const AfficherLePanier = async()=>{
    //     api.get('/MyAccount/'+authInfo.userId+'/Mon-panier')
    //     .then(()=>{
    //         console.log('Affichage du panier ');
    //     })
    // }
    return (
        <>
        <Button  variant="outline-success" onClick={handleOpen}><FaCartShopping/><Badge>{userInfo.quantity}</Badge></Button>

        <Offcanvas show={show} onHide ={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mon Panier</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>

            {articles.map(AP => (<ACatProd key={AP._id} id={AP.prod} nom={AP.nom} image={AP.image} prix={AP.prixT} Qty={AP.Qty} />))}


            <h6 style={{position:'absolute', bottom:'20%'}}><span style={{color: "green", fontSize: "1.4em"}}> {quantite} </span> article(s) dans le panier </h6>

            <Button variant="success" style={{borderRadius: "6%", position:'absolute', bottom:'5%', left: "30%"}} as={Link} to="/MyAccount/:id/validCart">Valider votre panier</Button>
        </Offcanvas.Body>
        </Offcanvas>
        
        </>

    )
}

export default AffichageDuPanier