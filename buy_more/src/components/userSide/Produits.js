import Produit from "./Produit";
import '../css/user/Produits.css'
import { useEffect, useState } from "react";
//Importation de axios 
import axios from 'axios'
import Container from "react-bootstrap/esm/Container";

import BarreNavigation from '../userSide/Navbars/NavBar'

import Header from "./header";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./footer";

// import {Pagination} from 'react-bootstrap'
const api = axios.create({
    baseURL:"http://localhost:3002/api"
})



function AllProd() {
const [listProd, setListProd] = useState([])
    useEffect(()=>{
        // getAllProducts =========
        const allProducts = (req, res)=>{
            api.get('/Products')
            .then(rep=>{

                console.log(rep.data.produits)
                setListProd(rep.data.produits)
            })

        }
                allProducts()
    })
    // =  =============== Pagination
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

    return(

        <>
        <BarreNavigation/>

        <Header></Header>
        <NavLink className="h1Titre"  as={Link} to="#" style={{margin:30}}><h1 style={{textDecoration:'underline', textAlign:'center', fontFamily:'IBM Plex Mono', fontSize:27}}>Tous nos produits...</h1></NavLink>
        <Container style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-between', marginBottom: 20,}}>
            {/* <h2>Tous les produits</h2> */}

           { listProd.map(p=><Produit Nom={p.Nom} Image1={p.Image1} Prix={p.Prix} Descripton={p.Descripton} Categorie={p.Categorie} id={p._id} key={p._id}  />)}


        </Container>

        <Footer/>

        </>

    )


}

export default AllProd;