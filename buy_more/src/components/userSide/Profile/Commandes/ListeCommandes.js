
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthenticateContext } from "../../../../controlPanel/AuthContext"
import { Alert, Container, ListGroup } from "react-bootstrap"
import ACommande from "./ACommande"
import BarreNavigation from "../../Navbars/NavBar"
import Footer from "../../footer"
import { Link } from "react-router-dom"


function ListCommandes(){
    const [authInfo] = useContext(AuthenticateContext)
    const [ListCom, setListCom] = useState([])
    
    const api  = axios.create({
        baseURL: "http://localhost:3002/api", 
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    
    })

    useEffect(()=>{

        const CommandeUser = ()=>{
            api.get('/MyAccount/orders/'+authInfo.userId)
            .then(rep=>{
                setListCom(rep.data.UserCommande)
                console.log("Affichage des commandes de l'utilisateur réussi !");
                console.log(ListCom);
            })
            .catch(()=>{
                console.log("Affichage des commandes de l'utilisateur échoué !");
            })
    
        }

        CommandeUser()

    })

 
    return(
        <>

        <BarreNavigation/>
        <ListGroup className="col-md-4 liensProfile ">
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/:id" > Informations du comptes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/orders/:id" active> Vos commandes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/updateAccount/:id" > Modifier le compte </ListGroup.Item>
            </ListGroup>

        <Container>
            <h1>Toutes vos commandes </h1>

            <table className='table  mt-5 table-striped table-bordered table-hover '>
                    <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Date lancement de la commande</th>
                    <th>Nombre d'articles</th>
                    <th>Etat de la commande</th>
                    <th>Prix total</th>
                    <th>Plus de détails</th>
                </thead>
                <tbody>
                    {ListCom.map(com => <ACommande dateL={com.DateLancement} Quantity = {com.Quantite} Statut={com.Statut} Prix={com.PrixTot} key={com._id} />)}

                </tbody>

                </table>
        </Container>

        
     

            <Footer/>

        </>
    )


        
}


export default ListCommandes