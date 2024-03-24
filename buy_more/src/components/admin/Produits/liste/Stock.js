
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import AProduct from './produit'
import { useEffect, useState } from 'react'
import NavBarAdmin from '../../NavbarAdm'

import './stock.css'


import {MdAdd} from 'react-icons/md'
import { Link } from 'react-router-dom'
import ACategorie from './Categorie'
const api=axios.create({
    baseURL:"http://localhost:3002/api"

})


function ListeProduits(){
    const [listProd, setListProd] = useState([])
    const [listCat, setListCat] = useState([])
    useEffect(()=>{
        // getAllProducts =========
        const allProducts = (req, res)=>{
            api.get('/Products')
            .then(rep=>{

                // console.log(rep.data.produits)
                setListProd(rep.data.produits)
            })

        }
                allProducts()


                // getAllCategories 
                const allCategories = (req, res)=>{
                    api.get('/AllCategories')
                    .then(rep=>{
                        setListCat(rep.data.allCategories)
                    })
                }
                allCategories()
    })

    return(
        <>
        <NavBarAdmin/>

        <Container style={{marginTop: 50}} className='table-responsive-md'>


            <h2 style={{textAlign:'center'}}> Tous les produits </h2>
                <span style={{display:'flex',justifyContent:'end', alignItems:'end'}}>
                    <Button variant='outline-success' as={Link} to='/Admin/products/create'><MdAdd/>{'    '} Ajouter un produit</Button>
                </span>

            <table className='table  mt-5 table-striped table-bordered table-hover '>
                <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Nom</th>
                    <th>Categorie</th>
                    <th>Prix (en &#8364;)</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                    <th>Afficher</th>
                </thead>
                <tbody>
                    {listProd.map(p=><AProduct Nom={p.Nom} Categorie={p.Categorie} Prix={p.Prix} key={p._id} id={p._id}/>)}

                </tbody>
            </table>

            {/* Affichage et gestion des categories  */}

            <div className='col-md-12' style={{borderBottom: '5px solid black', marginTop: 111}}></div>

            <h2 style={{textAlign:'center'}}> Toutes les categories  </h2>
            <span style={{display:'flex',justifyContent:'end', alignItems:'end'}}>
                    <Button variant='outline-warning' as={Link} to='/Admin/products/create'><MdAdd/>{'    '} Ajouter une nouvelle categorie</Button>
                </span>

            <table className='table  mt-5 table-striped table-bordered table-hover '>
                <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Nom</th>
                    <th>NombreArticle</th>
                    <th>Afficher</th>
                    <th>Supprimer</th>
                </thead>
                <tbody>
                    {listCat.map(c=><ACategorie NomCategorie={c.NomCategorie} NombreArticle={c.NombreArticle} key={c._id} id={c._id}/>)}

                </tbody>
            </table>

        </Container>
        </>
    )
}

export default ListeProduits