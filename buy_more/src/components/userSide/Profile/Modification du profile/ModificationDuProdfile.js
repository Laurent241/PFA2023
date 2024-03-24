import { useForm } from "react-hook-form"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthenticateContext } from "../../../../controlPanel/AuthContext"
import { UserContext } from "../InfoContext"
import BarreNavigation from "../../Navbars/NavBar"
import { Alert, Container, ListGroup, Spinner } from "react-bootstrap"

import "./ModificationProfile.css"
import { Link, useNavigate } from "react-router-dom"



function ModifierLeProfile(){
    const [authInfo, setAuthInfo] = useContext(AuthenticateContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    // Parametres de l'alerte 
    const [option, setOption] = useState()
    const [messageModification, setMessageModification] = useState(null)

    const navigate = useNavigate()


    // Le spinner 
    
    const [loading, setLoading] = useState(false)
    
    // 


    
    const api = axios.create({
        baseURL: "http://localhost:3002/api", 
        headers: {
            Authorization: `Bearer ${authInfo.token}`,
        },
    })

    const  {register, handleSubmit} = useForm()

    const UpdateProfile = async (data)=>{
        // Le nom 
        if(data.Nom !== userInfo.Nom && data.Nom !== '')
        { data.Nom = data.Nom }
         else{data.Nom = userInfo.Nom}

        //  Le prenom 
        if(data.Prenom !== userInfo.Prenom && data.Prenom !== '')
        {data.Prenom = data.Prenom} 
        else{data.Prenom = userInfo.Prenom}

        // Email
        if(data.Email !== userInfo.Email && data.Email !== '')
       { data.Email = data.Email }
        else{data.Email = userInfo.Email}

        // Adresse
        if(data.Adresse !== userInfo.Adresse && data.Adresse !== '')
        {data.Adresse = data.Adresse} 
        else{data.Adresse = userInfo.Adresse}

        // Telephone
        if(data.Telephone !== userInfo.Telephone && data.Telephone !== '')
       { data.Telephone = data.Telephone }
        else{ data.Telephone = userInfo.Telephone}




        api.put('/updateAccount/'+authInfo.userId,{
            "Nom":data.Nom,
            "Prenom":data.Prenom,
            "Telephone":data.Telephone,
            "Adresse":data.Adresse,
            "Email":data.Email,

        })
        .then((rep)=>{
            console.log("La modification a bien été effectuée ! ");
            console.log(data.Nom);
            console.log(data.Prenom);
            console.log(data.Adresse);
            console.log(data.Telephone);
            console.log(data.Email);
            setUserInfo(()=>({Nom: data.Nom, Prenom: data.Prenom, Adresse: data.Adresse, Telephone: data.Telephone, Email: data.Email, donneesCaptured: true }))

            setLoading(true)

            setMessageModification("La modification du profil a été effectuée avec succes; Vous allez être redirigé vers la page d'accueil !")
            setOption("success")
            
            setTimeout(()=>{
                navigate('/MyAccount/:id')
                setMessageModification(null)
                setLoading(false)
            }, 4500)
        })
        .catch(()=>{
            console.log("Problème lors de la modification du compte ");

            setMessageModification("La modification du profil a échoué !")
            setOption("danger")
            
            setTimeout(()=>{
                navigate('/MyAccount/:id')
                setMessageModification(null)
            }, 4500)
        })

    }



    return(
         <>
        <BarreNavigation/>

        {(messageModification && loading) &&  <Alert variant={option} className="col-md-12" dismissible transition='fade' style={{textAlign: "center", fontWeight: 'bold'}}> <Spinner animation="border" variant={option} size="xl"/> {messageModification}</Alert>}


            <h1 style={{textAlign:'center'}}>Modifier votre compte </h1>
        <Container className="modification">
            
                  <form onSubmit={handleSubmit(UpdateProfile)} className='col-md-6' style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'space-between', margin:13, padding:12, borderRadius: 21}}>
                     {/* Le Nom */}
                    <div className="form-group ">
                        <label>Nom <span style={{color:'red'}}>*</span></label>
                        <input {...register('Nom')} type="text" className="form-control" placeholder={userInfo.Nom} /> 
                    </div>

                    {/* Le Prenom */}
                    
                    <div className="form-group">
                        <label>Prénom <span style={{color:'red'}}>*</span></label>
                        <input {...register('Prenom')} type="text" className="form-control" placeholder={userInfo.Prenom} />
                    </div>

                    {/* Numero de telephone */}
                    <div className="form-group">
                        <label>Téléphone  <span style={{color:'red'}} >*</span></label>
                        <input {...register('Telephone')} type="tel" className="form-control" placeholder={userInfo.Telephone} maxLength={8} />
                   </div>

                    {/* Adresse */}
                    <div className="form-group">
                        <label>Adresse de livraison  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Adresse')} type="text" className="form-control" placeholder={userInfo.Adresse} />
                    </div>

                       {/* Email */}
                       <div className="form-group">
                        <label>Email  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Email')} type="email" className="form-control" placeholder={userInfo.Email} />                   
                    </div>

                    {/* Mot de passe  */}
                    {/* <div className="form-group">
                        <label>Mot de passe  <span style={{color:'red'}}>*</span></label>
                        <input {...register('Password')} type="password" className="form-control" required/>
                    </div> */}
                <button type="submit" className="btn btn-danger mt-4 col-md-12" style={{justifyContent:'center', alignItems:'center', opacity:.8}}>Valider les modifications </button>
        </form>


        
           <ListGroup className="col-md-4 liensProfile ">
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/:id" > Informations du comptes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/orders/:id"> Vos commandes </ListGroup.Item>
                <ListGroup.Item action variant="danger" as={Link} to="/MyAccount/updateAccount/:id" active> Modifier le compte </ListGroup.Item>
            </ListGroup>

         </Container>
         </>

    )
}

export default ModifierLeProfile