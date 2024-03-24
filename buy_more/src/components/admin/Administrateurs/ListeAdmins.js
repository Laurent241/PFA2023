import { useEffect, useState } from "react"
import axios from 'axios'
import NavBarAdmin from "../NavbarAdm"
import { Button, Container } from "react-bootstrap"
import { MdAdd } from "react-icons/md"
import OneAdm from "./OneAdmin"

const api= axios.create({
    baseURL: "http://localhost:3002/api"
})



function ListeAdmin(){
    const [listUsers, setListUsers] = useState([])
    const [listAdmins, setListAdmins] = useState([])

    useEffect(()=>{
        // getAllProducts =========
        const allAdmins = async()=>{
            api.get('/Admin/allAccounts')
            .then(rep=>{
                let shouldBreakUp = false
                const tableau = []

                setListUsers(rep.data.comptes)

                
                listUsers.forEach(e => {
                    if(shouldBreakUp) return;
                    if(e.IsAdmin){
                        if(!listAdmins.includes(e)){
                            tableau.push(e)
                        }
                        else{
                            shouldBreakUp = true;
                        }
                    }
                    
                });
                console.log("liste des Administrateurs =====");
                setListAdmins(tableau)
                console.log(listAdmins);
            })

        }
                allAdmins()
    })
 
    return(
        <>

        <NavBarAdmin/>

        <Container style={{marginTop: 50}} className='table-responsive-md'>


            <h2 style={{textAlign:'center'}}> Tous les administrateurs </h2>
                <span style={{display:'flex',justifyContent:'end', alignItems:'end'}}>
                    {/* <Button variant='outline-warning'><MdAdd/>{'    '} Ajouter un administrateur</Button> */}
                </span>

            <table className='table  mt-5 table-striped table-bordered table-hover '>
                <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Telepone</th>
                    <th>Adresse</th>
                    <th>Afficher</th>
                    <th>Révoquer le droit</th>

                </thead>
                <tbody>
                    {listAdmins.map(A => <OneAdm Nom={A.Nom} Prenom={A.Prenom} Email={A.Email} Telephone={A.Telephone} Adresse={A.Adresse} key={A._id} id={A._id} />)}

                </tbody>
            </table>
        </Container>
        
        
        </>
    )
}

export default ListeAdmin