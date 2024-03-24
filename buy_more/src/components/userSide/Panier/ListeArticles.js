import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Profile/InfoContext"
import { Alert, Button } from "react-bootstrap"

import axios from "axios"
import { AuthenticateContext } from "../../../controlPanel/AuthContext"



function ArticleDuPanier(){
    const [authInfo] = useContext(AuthenticateContext)
    const api = axios.create({
        baseURL:'http://localhost:3002/api',
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })
    const [userInfo] = useContext(UserContext)
    const [articlesDuPanier, setArticlesDuPanier] = useState([])

    useEffect(()=>{
        // Affichage des articles du panier 
        const AllCartProducts = (req, res) =>{
            api.get('/MyAccount/'+authInfo.userId+'/Mon-panier')
            .then(rep=>{
                console.log(rep.data);
            })
        }
        AllCartProducts()

    })


    if (userInfo.cart.quantity == 0)
    return (

       <>
       <Alert variant="warning"> Votre panier est vide pour le moment </Alert>

       <Button variant='outline-warning'> Commencez à acheter </Button>


       </>

    )

    else{
        return (
            <>
            <h1> Votre panier </h1>
            
            </>
        )

    }
}

export default ArticleDuPanier
