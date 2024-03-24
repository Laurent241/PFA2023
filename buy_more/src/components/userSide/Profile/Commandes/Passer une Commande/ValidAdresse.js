import { useContext, useEffect, useState } from "react"
import BarreNavigation from "../../../Navbars/NavBar"
import { Alert, Button, Card, Container } from "react-bootstrap"
import { UserContext } from "../../InfoContext"

import axios from "axios"
import { AuthenticateContext } from "../../../../../controlPanel/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const api = axios.create({
    baseURL: "http://localhost:3002/api"
})




function  ValidAdresse(){
    const [userInfo, setUserInfo]= useContext(UserContext)
    const [authInfo] = useContext(AuthenticateContext)
    const  [total, setTotal] = useState()
    const [cv, setcv] = useState(null)
    const [option, setOption] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        const SousTotal=()=>{
            let totaux = []
            userInfo.cart.article.forEach (e => {
                totaux.push(e.prixT)
            });
            let somme = 0
    
             totaux.forEach(ligne=> {
               somme =somme + ligne
            })
            setTotal(somme)
    
        }
            SousTotal()
    })

    const MakeOrder = ()=>{
        api.post('/MyAccount/MakeOrder/'+authInfo.userId)
        .then(()=>{
            // alert('Commande passée avec succès !')
            setcv(" Commande passée avec succès ! Vous allez être dirigé vers la page d'accueil dans 5 secondes !")
            setOption('success')
            setTimeout(()=>{
                
                setcv(null)
                navigate('/')
            }, 5000)
        })
        .catch(()=>{
            setcv(" Commande a échoué ! Vous allez être dirigé vers la page d'accueil dans 5 secondes !")
            setOption('danger')

            setTimeout(()=>{
                
                setcv(null)
                navigate('/')
            }, 5000)
        })
    }

    if(cv === null)
    {
        
            return(
                    <>
                    <BarreNavigation/>
        
                    <Container>
                     <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}> <span style={{borderRadius: "50%",border:'1px solid black', backgroundColor: "rgba(121,32,22,.4)", margin: 5, width: 30, textAlign:'center'}}>1</span><span style={{borderBottom: "6px solid rgba(121,32,22,.4)"}}>Validation du panier</span><span style={{borderRadius: "50%", margin: 5, width: 30, textAlign:'center',border:'1px solid black', backgroundColor:"rgba(121,32,22,.4)"}}>2</span><span style={{borderBottom: "6px solid rgba(121,32,22,.4)"}}>Information du paiement</span><span style={{borderRadius: "50%", margin: 5, width: 30, textAlign:'center',border:'1px solid black'}}>3</span><span>Validation de la commande</span></div>
                    </Container>
        
        
                    <Container>
                        <h1>Récapitulatif</h1>
        
                        <div style={{display: "flex", flexDirection:"column", justifyContent: "space-around", borderRadius: 32,backgroundColor: "rgba(145, 43, 132, 0.2)", height: 200, alignContent: "center", padding:15, boxShadow: "2px 2px 3px black"}}>
                          <div> <span> Nombre d'articles</span> : {userInfo.cart.quantity}</div>
                          <div> <span> Moyen de paiement</span>: Cash à la livraison</div>
                          <div>  <span> Frais de livraison</span>: 0.00</div>
        
                          <div>  <span> Total</span>:  {total}</div>
                        </div>
        
                        <Button variant="danger" style={{borderRadius: 10,justifyContent:"center", alignContent: "center", position: "relative", left: "14%", marginTop: 30}} className="col-md-9" onClick={MakeOrder} as={Link} to="/MyAccount/orders/:id">Passer commande </Button>
                    </Container>
             
                    
                    </>
        
            )


    }

    else{
        return(
            <>
            {cv && <Alert variant={option} style={{textAlign: 'center'}}> {cv}</Alert>}
            </>
            
        )
    }
}

export default ValidAdresse