
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthenticateContext } from "../../../controlPanel/AuthContext"
import NavBarAdmin from "../NavbarAdm"
import { Alert, Container } from "react-bootstrap"
import OneCommande from "./OneCommande"
import { UserContext } from "../../userSide/Profile/InfoContext"

function Orders(){
    const [authInfo ] = useContext(AuthenticateContext)
    const [userInfo] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    
    const api = axios.create({
        baseURL: "http://localhost:3002/api", 
        headers: {
            Authorization: `Bearer ${authInfo.token}`
        }
    })

    useEffect(()=>{

        const AllOrders = (req, res)=>{
            api.get('/Admin/AllOrders')
            .then(rep => {
                // console.log(rep.data.commandes);
                setOrders(rep.data.commandes)


            })
            .catch(()=>{
                console.log("Problème lors de l'affichage des commandes ! ");
            })
        }
        AllOrders()
    })

    if(userInfo.IsAdmin){
       
    return(
        <>
        <NavBarAdmin/>


        <Container>
            <h1>Liste de toutes les commandes</h1>


            <table className='table  mt-5 table-striped table-bordered table-hover '>
                    <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Commande N° </th>
                    <th>Id de l'utilisateur </th>
                    <th>Date lancement </th>
                    <th>Nombre d'articles</th>
                    <th>Etat de la commande</th>
                    <th>Prix total</th>
                    <th>Valider le Statut </th>
                    <th>Plus de détails</th>
                </thead>
                <tbody>

                    {orders.map(ord => <OneCommande key={ord._id} UserId={ord.UserId} dateL={ord.DateLancement} Quantity={ord.Quantite} Statut={ord.Statut} Prix={ord.PrixTot} Numero={ord.Numero}id={ord._id} />)}

                </tbody>

                </table>


        </Container>
        </>
    )
     
}
else{
    return(
        <Alert variant="dark"> Vous n'^tes pas un administrateur !!</Alert>
    )
}
}

export default Orders