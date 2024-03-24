import { AuthenticateContext } from "../../../controlPanel/AuthContext"
import { useContext} from "react"

import Auth from "../../../controlPanel/Authentification"
// Icone utilisateur
import {FaUserLarge,FaArrowRightFromBracket} from 'react-icons/fa6'

// import Axios pour récupérer les informations d'un utilisateur
import axios from "axios"
import { DropdownButton} from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../Profile/InfoContext"

// IsConnected est une methode qui va gerer l'affichage du botun de connexion.
// Si l'utilisateur n'est pas connecté, le bouton de connexion sera affiché. ce bouton est géré dans un autre omposant 
// Quand l'utilisateur se connecte en entrant ses informations, le bouton de connexion n'est plus affiché et à la place il y a un icone utilisateur qui est un dropdown 



// Comment faire pour verifier le token situé dans l'en-tête du document pour pouvoir afficher les informations d'un utilisateur 
function IsConnected(){
    const [userInfo,setUserInfo] = useContext(UserContext);
    
    const [authInfo] = useContext(AuthenticateContext);
    
    const api = axios.create({
        baseURL:"http://localhost:3002/api",
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    });
const FindUser = ()=>{
    api.get('/MyAccount/'+authInfo.userId)
    .then(rep=>{    
        setUserInfo(()=>({Nom:rep.data.Nom, Prenom:rep.data.Prenom, Telephone:rep.data.Telephone, Email:rep.data.Email, Adresse:rep.data.Adresse,cart:rep.data.cart, favoris:rep.data.favoris, IsAdmin: rep.data.IsAdmin,  donneesCaptured: true}))
        // console.log((rep.data))
        console.log("Voici les informations de l'utilisateur connecté actuellement")
        console.log(userInfo);
        
      })
}

    if(authInfo.isAuthenticated)
    {
        return ( 
            < >

            <DropdownButton id="dropdown-hover" title={<FaUserLarge style={{fontSise:'12%', color:'black'}}/>} style={{marginRight:12}} variant="outline-warning"> 

                    <Dropdown.ItemText style={{backgroundColor:'rgba(0,0,0,0.4)', color:'white'}}><span style={{fontSise:'12%', color:'black'}}>Signed as : </span> {userInfo.Prenom}</Dropdown.ItemText>
                    <Dropdown.Item as={Link} to="/MyAccount/:id" onClick={FindUser} >Voir le profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Liste des favoris</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/MyAccount/:id/validCart">Mon panier </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.ItemText><FaArrowRightFromBracket />{' '}Déconnexion</Dropdown.ItemText>


        </DropdownButton>
        </>   
       
      )
    }
    else{
        return(
            <Auth ></Auth>
        )
    }
}

export default IsConnected