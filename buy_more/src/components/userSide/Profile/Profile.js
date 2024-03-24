import { useContext } from "react";
import { UserContext } from "./InfoContext";
import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import BarreNavigation from "../Navbars/NavBar";


import "./Profile.css"
import Footer from "../footer";
import { Link } from "react-router-dom";

function MonProfile(){
    const [userInfo] = useContext(UserContext)

    if(userInfo.IsAdmin  === true){


    return(
        <>
        <BarreNavigation/>
        <h1> Informations du profil</h1>

        <div style={{display: "flex", flexWrap:"wrap", justifyContent: "space-around"}}>

        <div style={{position:'center'}} className="info col-md-6 ">
       
            <div className="Nom">
                <label>Nom</label> : {userInfo.Nom}
                </div> 

            <div className="Prenom">
                <label>Prenom</label> : {userInfo.Prenom}
             </div>


            <div className="Numero">
                <label>Numéro de telephone</label> : {userInfo.Telephone}
            </div>

            <div className="Email">
                <label>Email</label> :{userInfo.Email}
            </div>
            <div className="Adresse">
                <label>Adresse de livraison</label> :{userInfo.Adresse}
            </div>    

             </div> 


              <ListGroup className="col-md-4 liensProfile ">
                <ListGroup.Item action variant="danger" active> Informations du comptes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/orders/:id"> Vos commandes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/updateAccount/:id"> Modifier le compte </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/Admin/home"> Mode Administrateur </ListGroup.Item>
              </ListGroup>
              </div>



              <Footer/>
         
        </>
    )
    
        
}

    else{
        return(

            <>
               <BarreNavigation/>
        <h1> Informations du profil</h1>

        <div style={{display: "flex", flexWrap:"wrap", justifyContent: "space-around"}}>

        <div style={{position:'center'}} className="info col-md-6 ">
       
            <div className="Nom">
                <label>Nom</label> : {userInfo.Nom}
                </div> 

            <div className="Prenom">
                <label>Prenom</label> : {userInfo.Prenom}
             </div>


            <div className="Numero">
                <label>Numéro de telephone</label> : {userInfo.Telephone}
            </div>

            <div className="Email">
                <label>Email</label> :{userInfo.Email}
            </div>
            <div className="Adresse">
                <label>Adresse de livraison</label> :{userInfo.Adresse}
            </div>    

             </div> 


              <ListGroup className="col-md-4 liensProfile ">
                <ListGroup.Item action variant="danger" active> Informations du comptes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/orders/:id"> Vos commandes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/updateAccount/:id"> Modifier le compte </ListGroup.Item>

              </ListGroup>
              </div>



              <Footer/>
         
        </>
    )
    

    }

}

export default MonProfile;