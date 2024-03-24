import { useForm } from "react-hook-form"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthenticateContext } from "../../../controlPanel/AuthContext"
import NavBarAdmin from "../NavbarAdm"
import { useNavigate } from "react-router-dom"
import { Alert, Container } from "react-bootstrap"

import './AjoutProd.css'
import AddCategorie from "./AjoutCategorie"
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})



function CreationProduit(){
    const{ register, handleSubmit} = useForm()
    const [authInfo] = useContext(AuthenticateContext)
    const [allCat, setAllCategories] = useState([])
    const [option, setOption] = useState()
    const [messageNewProd, setMessageNewProd] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{

        const AllCategories = (req, res, )=>{
            api.get('/AllCategories')
            .then(rep=>{
              
                // console.log(rep.data.allCategories)
                setAllCategories(rep.data.allCategories)
            })
        }
        AllCategories()
    })

    

    const FormSubmited = async (data)=>{
        api.post('/Administration/addProd', {
            "Prix": data.Prix, 
            "Image1":data.Image1, 
            "Nom": data.Nom, 
            "Description": data.Description, 
            "NomCategorie": data.NomCategorie

            })
        .then(()=>{
            setMessageNewProd('Nouveau produit créé avec succès !!')
            setOption('success')
            // console.log('Nouveau Produit créé')
            navigate('/Admin/manageProduits')

            setTimeout(()=>{
                setMessageNewProd(null);
            }, 4000)

        })
        .catch(()=>{
            setMessageNewProd('Erreur lors de la création du nouveau produit!!')
            setOption('danger')
            navigate('/Admin/products/create')

            setTimeout(()=>{
                setMessageNewProd(null);
            }, 4000)

            
        })
    }



    return(

        <div className="FormulaireCreation">
            <NavBarAdmin/>
            {messageNewProd && <Alert variant={option} className="col-md-12" dismissible transition='fade' style={{fontWeight: 'bold'}}>{messageNewProd}</Alert>}

        <h1>Nouveau produit </h1>
            <div className="formulaires col-md-12">

        <form onSubmit={handleSubmit(FormSubmited)} className="col-md-6 mb-4">
            <div className="form-group">
                <label>Nom {' '}</label>
                <input {...register('Nom')} type="text" className="form-controls" required/>
            </div>

            <div className="form-group">
                <label>Categorie{' '} </label>
                <select {...register('NomCategorie')} style={{width: "95%", border:'1px solid green'}}  required>
                   {allCat.map(C=>(<option key={C._id} value={C.NomCategorie}>{C.NomCategorie}</option>))}

                </select>
                {/* <input  type="text" className="form-controls" required/> */}
            </div>

            <div className="form-group">
                <label>Prix {' '}</label><br/>
                <input {...register('Prix')} type="number" className="form-controls" required/>
            </div>

            <div className="form-group">
                <label>Description {' '}</label><br/>
                <input {...register('Description')} type="text" className="form-controls" required/>
            </div>

            <div className="form-group">
                <label>Image: {' '}</label><br/>{' '}
                <input {...register('Image1')} type="text" className="form-controls" required/>
            </div>

            <button type="submit" className="btn btn-success mt-2">Enregistrer</button> 

        </form>

        <AddCategorie/>
        
        </div>
        </div>
    )
}

export default CreationProduit