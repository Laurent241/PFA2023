import React, { useContext,useState } from "react";

import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import {useForm} from 'react-hook-form';
import { Container } from "react-bootstrap";
import axios from 'axios';
import { AuthenticateContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import SignIn from "../components/userSide/Profile/FormulaireCreation";


import  {FaRegUser} from 'react-icons/fa'
import { Nav } from "react-bootstrap";
import { UserContext } from "../components/userSide/Profile/InfoContext";


const api = axios.create({
    baseURL:"http://localhost:3002/api"
})
function Auth(){

    // Reglage du composant Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // 


    const {register, handleSubmit} = useForm()
    const [authInfo, setAuthInfo] = useContext(AuthenticateContext)
const navigate = useNavigate()
    const SubmitFormAuth = async(data) =>{
        api.post('/login', {
            "Email":data.Email,  
            "Password":data.Password 
        })
        .then(rep=>{
            console.log(rep.data)
            setAuthInfo(() =>({token:rep.data.token, userId:rep.data.userId, isAuthenticated:true}))
            localStorage.setItem("authToken", rep.data)
            const auth = localStorage.getItem("authToken")
            console.log(auth);
            navigate('/')
            setShow(false)
        })
    }
    return (

        <>
         <Button variant="outline-light" onClick={handleShow} style={{borderRadius:0}}>
            <FaRegUser style={{fontSize: 23}}></FaRegUser>{' '}
            Mon compte

         </Button>

        
            <Container>    

                <Modal show={show} onHide={handleClose} style={{height:'100%', width:'100%',position:'absolute', left:'50%', top: '50%', transform:'translate(-50%,-50%)', backdropFilter:'blur(30px)', backgroundColor:'rgba(230,21,232, 0.2)', borderRadius:0}} >
                     <Modal.Header closeButton>
                        <Modal.Title>Connectez-vous !!</Modal.Title>
                     </Modal.Header>
                         <Modal.Body>
                <form >
                  

                    {/* Email */}
                    <div className="form-group">
                        <label>Email</label>
                        <input {...register('Email')} type="email" className="form-control" required/>                   
                    </div>

                    {/* Mot de passe  */}
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input {...register('Password')} type="password" className="form-control" required/>
                    </div>
                    {/* <button type="submit" className="btn btn-success mt-2">Valider</button> */}
              </form>
                    </Modal.Body>
                    <Modal.Footer style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
                        <Nav.Link as={Link} to='/signup' onClick={handleClose} style={{textDecoration:'underline' , color:'green'}}>Créer votre compte ici</Nav.Link>
                        <Button variant="secondary" onClick={handleClose}>
                             Fermer
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit(SubmitFormAuth)}>
                            Se connecter
                         </Button>
                    </Modal.Footer>
                 </Modal>

            </Container>
     </>

                
    )
}

export default Auth;



  {/* Le Nom */}
                    {/* <div className="form-group">
                        <label>Nom</label>
                        <input {...register('Nom')} type="text" className="form-control" required/>
                    </div> */}
                    {/* Le Prenom */}
{/*                     
                    <div className="form-group">
                        <label>Prénom</label>
                        <input {...register('Prenom')} type="text" className="form-control" required/>
                    </div> */}

                    {/* Numero de telephone */}
                    {/* <div className="form-group">
                        <label>Téléphone</label>
                        <input {...register('Telephone')} type="tel" className="form-control" required/>
                   </div> */}

                    {/* Adresse */}
                    {/* <div className="form-group">
                        <label>Adresse de livraison</label>
                        <input {...register('Adresse')} type="text" className="form-control" required/>
                    </div> */}