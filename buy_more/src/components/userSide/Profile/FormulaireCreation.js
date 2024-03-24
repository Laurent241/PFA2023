// Fichier de création d'un compte utilisateur 

import {useForm} from 'react-hook-form';
import { Container } from "react-bootstrap";

// Insertion de useNavigate 
import { useNavigate } from 'react-router-dom';

// Importer Axios
import axios from 'axios';
import BarreNavigation from '../Navbars/NavBar';
import { useContext, useState } from 'react';
import { AuthenticateContext } from '../../../controlPanel/AuthContext';
import { UserContext } from './InfoContext';
const api = axios.create({
    baseURL:"http://localhost:3002/api"
})


function SignIn(){
    const {register, handleSubmit} = useForm()
    const [authInfo, setAuthInfo] = useContext(AuthenticateContext)
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    const SubmitSgnInInformation = async(data)=>{
        // Ici on va récupérer les informations du formulaire pour créer un nouvel utilisateur 
        api.post('/signup',{
            "Nom":data.Nom,
            "Prenom":data.Prenom,
            "Telephone":data.Telephone,
            "Adresse":data.Adresse,
            "Email":data.Email,
            "Password":data.Password
        })
        .then(()=>{
            // Ici on va récupérer les informations du nouvel utilisateur pour faire appel à la méthode de connexion
                api.post('/login', {
                "Email":data.Email,  
                "Password":data.Password 
            })
            .then(async response=>{
                // *********** Dans cette partie on doit enregistrer le token et le userId et récupérer les informations de l'utilisateur 
                console.log("Nouveau compte connecté");
                // console.log(response);
                setAuthInfo(() =>({token:response.data.token, userId:response.data.userId, isAuthenticated:true}))
                setUserInfo(()=>({Nom: data.Nom, Prenom: data.Prenom, Adresse: data.Adresse, Email: data.Email, Telephone: data.Telephone , donneesCaptured: true }))
                navigate('/')
            })
            .catch(()=>{
                console.log("Impossible de connecter le nouveau compte !");
            })
         })
         .catch(()=>{
            console.log("La création du nouveau compte est impossible !!");
         })
        
    }

    return(
        <>
        <BarreNavigation/>

        <Container >
            <h1 style={{textAlign:'center'}}>Créer un compte</h1>
            
                  <form onSubmit={handleSubmit(SubmitSgnInInformation)} className='col-md-11' style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'space-between',backgroundColor:"rgba(130,123,92,0.1)", margin:13, padding:12, borderRadius: 21}}>
                     {/* Le Nom */}
                    <div className="form-group ">
                        <label>Nom <span style={{color:'red'}}>*</span></label>
                        <input {...register('Nom')} type="text" className="form-control" placeholder='====================================== Entrez votre nom =======================================' required/>
                    </div>

                    {/* Le Prenom */}
                    
                    <div className="form-group">
                        <label>Prénom <span style={{color:'red'}}>*</span></label>
                        <input {...register('Prenom')} type="text" className="form-control" placeholder='==================================== Entrez votre prénom =======================================' required/>
                    </div>

                    {/* Numero de telephone */}
                    <div className="form-group">
                        <label>Téléphone  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Telephone')} type="tel" className="form-control" placeholder='====================================== +241 xxx-xx-xx-xx =========================================' maxLength={8} required/>
                   </div>

                    {/* Adresse */}
                    <div className="form-group">
                        <label>Adresse de livraison  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Adresse')} type="text" className="form-control" placeholder='=================================== Votre adresse de livraison ici ===================================' required/>
                    </div>

                       {/* Email */}
                       <div className="form-group">
                        <label>Email  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Email')} type="email" className="form-control" placeholder='======================================== Votre Email ========================================' centered required/>                   
                    </div>

                    {/* Mot de passe  */}
                    <div className="form-group">
                        <label>Mot de passe  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Password')} type="password" className="form-control" required/>
                    </div>
                <button type="submit" className="btn btn-success mt-4 col-md-12" style={{justifyContent:'center', alignItems:'center'}}>Valider</button>
        </form>
         </Container>
         </>

    )

    }

    export default SignIn;


