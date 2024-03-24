

import Button from "react-bootstrap/esm/Button";

// Importation des icones 

import {BsFillHeartFill,BsFillCartPlusFill} from "react-icons/bs";

// Vue du produit

// import ViewProduct from './boutons/ViewProduct';
import ViewProduct from "./boutons/ViewProduct";
import { Link } from 'react-router-dom';
import { useState } from 'react';
//Importation de axios 
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import AddFavList from "./boutons/AjouterFavoris";

import '../css/user/Produit.css'
import AjouterPanier from "./boutons/AjouterPanier";

  const api = axios.create({
    baseURL:"http://localhost:3002/api"
  })

// Dans ce fichier Produit.js, l'objectif est de définir l'affichage d'une carte pour la preésentation d'un produit dans le catlogue.
// Pour cela on va importer le composant Card de react-bootstrap.
// Une carte d'un produit est composée d'une image du produit, d'un nom, d'un prix, de trois boutons (Ajouter au panier,  voir le produit et ajouter aux favoris )


function Produit(props) {

  const [Id, setId] = useState()
  
  const GetId = ()=>{
      setId(document.getElementById(props.id).id);
      // console.log('/Prod/'+Id)
      api.get('/Prod/'+document.getElementById(props.id).id)
      .then(()=>{
        console.log('Affichage du produit réussi '+Id);
      })
  };


 
   
 
  return (
    // style={{ width: '18rem' }}   
    <Card  className='card col-md-5 col-xs-10   col-xl-5 col-lg-5' id={props.id} style={{margin:10, boxShadow: '1px 2px 2px black', borderRadius:0, overflow: 'hidden' }}>
      <Card.Img variant="top" src={props.Image1} style={{width:"95%",marginTop:4, height: 300, position: 'relative', top: 0, left: '1%', cursor:'pointer', padding: 5 }}   />
      {/* <Card.Body>
      </Card.Body> */}
      <ListGroup className="">
        <ListGroup.Item style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between', fontWeight: 'bolder', fontSize: 19, borderRadius: 'none'  }}><span> {props.Nom}</span>{' '}<span>{props.Prix}&euro;</span></ListGroup.Item>
      </ListGroup>
      <Card.Body style={{display:'flex', flexWrap:'wrap',justifyContent: 'space-around', backgroundColor:'rgba(176, 84, 118, 0.07)'}}>
      <ViewProduct Nom={props.Nom} Categorie={props.Categorie} Image1={props.Image1} Description={props.Description} Prix={props.Prix} onClick={GetId} />
         <AddFavList id={props.id}/> 
         <AjouterPanier id={props.id}/>
      </Card.Body>
    </Card>
  );
}

export default Produit;