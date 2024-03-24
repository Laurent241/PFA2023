import { useEffect, useState } from "react";
import { Button, ListGroup, Offcanvas } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";
import OneCategorie from "./OneCategorie";


import './Categorie.css'

// Les icones 
import {GiVacuumCleaner,GiWashingMachine} from 'react-icons/gi'
import {LuMicrowave,LuAirVent} from 'react-icons/lu'
import {RiFridgeLine} from 'react-icons/ri'

import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})

function AllCategories(){

    const [allCat,  setAllCat] = useState([])

    const [show, setShow] = useState(false);

    useEffect(()=>{
        const ToutesCategories = ()=>{
            api.get('/AllCategories')
            .then(rep=>{
                console.log(rep.data.allCategories);
                setAllCat(rep.data.allCategories)
            })
            .catch(()=>{
                console.log("Impossible !!");
            })

        }
        ToutesCategories()
    
    })


    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return(
        <>
        <Button style={{borderRadius: 0, opacity:'0.6' ,display:'flex',flexWrap:'wrap', alignItems:'flex-end'}} onClick={toggleShow} variant='danger'>
        <BsJustify style={{fontSize: 25}}/>{' '}Toutes les catégories
      </Button>

            

        <Offcanvas show={show} onHide={handleClose}  backdrop scroll='true' className="Cat">
        <Offcanvas.Header className="CatTitre" closeButton>
        <Offcanvas.Title >Toutes nos Categories </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="CatBody">
         <ul>
            {allCat.map(c=><OneCategorie NomCat={c.NomCategorie} Qty={c.NombreArticle}/>)}
           
        </ul>


        </Offcanvas.Body>

        </Offcanvas>

        </>

    )
}

export default AllCategories