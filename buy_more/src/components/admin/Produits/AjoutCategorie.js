import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Alert } from "react-bootstrap"

const api = axios.create({
    baseURL: "http://localhost:3002/api"
})



function AddCategorie (){
    const{ register, handleSubmit} = useForm()
    const [allCat, setAllCategories] = useState([])
    const [creationCategorie, setCreationCategorie] = useState(null)
    const [option, setOption] = useState()
    const navigate = useNavigate()


    useEffect(()=>{
        const tableau = []

        const AllCategories = (req, res, )=>{
            api.get('/AllCategories')
            .then(rep=>{
                console.log(rep.data.allCategories);
                rep.data.allCategories.forEach(e => {
                    tableau.push(e)
                    console.log(e);

                });
                setAllCategories(tableau)
            })
        }
        AllCategories()
    })

    const NewCat = async (data)=>{
        api.post('/AddCat', {
            "NomCategorie": data.NomCategorie
        })
        .then(() =>{
            console.log('Nouveau catalogue créé')
            setCreationCategorie('Nouvelle categorie créé avec succès !!')
            setOption('success')
            navigate('/Admin/products/create')

            setTimeout(()=>{
                setCreationCategorie(null);
            }, 3000)


        })
        .catch(()=>{
            setCreationCategorie('La catégorie n\'a pas été créée !!')
            navigate('/Admin/products/create')
            setOption('danger')

            setTimeout(()=>{
                setCreationCategorie(null);
            }, 3000)
        })
    }


    return(
        <>



        
        <form onSubmit={handleSubmit(NewCat)} className="NewCategorie col-md-5">
            <legend className="TitreNewCat">Création d'une nouvelle catégorie</legend>
            <div className="form-group">
                <label>Nom de la nouvelle categorie {' '}</label>
                <input {...register('NomCategorie')} type="text" className="form-controls" />
            </div>
            <button type="submit" className="btn btn-outline-warning mt-4">Créer la nouvelle catégorie</button> 
        </form>
        {creationCategorie && <Alert variant={option} className="col-md-12" dismissible transition='scale' style={{position: 'absolute', top: '10%', right:0}}>{creationCategorie}</Alert>}
        </>

    )
}

export default AddCategorie