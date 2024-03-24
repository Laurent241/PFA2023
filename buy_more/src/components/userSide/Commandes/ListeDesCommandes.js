import {useState} from 'react'
import { useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3002/api"
})

function ListeCommandes(props) {

    const [listCom, setLisCom] = useState([])

    useEffect(() =>{
        const allCommandes = async(req,res)=>{
            api.get('/mesCommandes')
            .then(rep=>{
                console.log(rep.data)
                setLisCom(rep.data)
            })

        }  
        allCommandes()
    
    })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Date de commande</th>
          <th>Nombre d'articles</th>
          <th>Etat de la commande</th>
          <th>Prix total</th>
          <th>Plus de détails</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </Table>
  );
}

export default ListeCommandes;