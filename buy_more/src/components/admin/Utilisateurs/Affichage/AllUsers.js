
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { MdAdd } from 'react-icons/md'
import OneUser from './OneUser'
import NavBarAdmin from '../../NavbarAdm'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../userSide/Profile/InfoContext'
import { AuthenticateContext } from '../../../../controlPanel/AuthContext'


const api = axios.create({
    baseURL: "http://localhost:3002/api"
})



function AllUsers(){
    const [authInfo] = useContext(AuthenticateContext)
    const [userInfo] = useContext(UserContext)

    

    const [listUsers, setListUsers] = useState([])

    useEffect(()=>{
        api.get('/Admin/allAccounts')
        .then(rep=>{
            setListUsers(rep.data.comptes)
        })
    })


    if(userInfo.IsAdmin === true)
    {

    return(
        <>
        <NavBarAdmin/>
        <h1>Liste des utilisateurs</h1>

        <Container style={{marginTop: 50}} className='table-responsive-md'>
                <span style={{display:'flex',justifyContent:'end', alignItems:'end'}}>
                    <Button variant='outline-secondary' as={Link} to="#"><MdAdd/>{'    '} Ajouter un compte utilisateur</Button>
                </span>

            <table className='table  mt-5 table-striped table-bordered table-hover '>
                <thead style={{background:'rgba(0,0,0,0.7', color:'white',padding:115, alignItems:'center'}}>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Telepone</th>
                    <th>Adresse</th>
                    <th>Afficher</th>
                    <th>supprimer</th>
                    <th>Nommer adminstrateur</th>

                </thead>
                <tbody>
                    {listUsers.map(A => <OneUser Nom={A.Nom} Prenom={A.Prenom} Email={A.Email} Telephone={A.Telephone} Adresse={A.Adresse} id={A._id} key={A._id} Admin={A.IsAdmin}/>)}

                </tbody>
            </table>
        </Container>
        </>
    )
    }
    else{
        return(
            <Alert variant="danger">Vous n'êtes pas un administrateur </Alert>
        )
    }
}

export default AllUsers