import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import {Alert, Button} from 'react-bootstrap'

import './NavbarAdm.css'

// =====================  Importation des icones 
// *** Settings
import {TfiSettings} from 'react-icons/tfi'
// *** Admin
import {GrUserSettings, GrPowerCycle} from 'react-icons/gr'
// *** Liste
import {AiOutlineUnorderedList} from 'react-icons/ai'
// *** Grid
import {FiGrid} from 'react-icons/fi'
// *** Profile 
import {RiUserSettingsFill} from 'react-icons/ri'
import { useContext } from 'react';
import { UserContext } from '../userSide/Profile/InfoContext';
import { AuthenticateContext } from '../../controlPanel/AuthContext';

function NavBarAdmin(){
    const [authInfo] = useContext(AuthenticateContext)
    const [userInfo] = useContext(UserContext)

    if(userInfo.IsAdmin  === true)
    {

   
        return(

            <>
            <Navbar expand="lg" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/Admin/home' className='titreAdm' >Admin Buy_More <TfiSettings/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light' />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto" style={{width:'100%',display:'flex', flexWrap:'wrap', justifyContent:'space-around', paddingTop: 10}}>
                        <Nav.Link href="/Admin/home" className='liensAdm'>Accueil</Nav.Link> 
                        <Nav.Link href="/Admin/manageProduits" className='liensAdm'>Produits</Nav.Link>            
                        <Nav.Link href="/Admin/users" className='liensAdm'>Utilisateurs</Nav.Link>            
                        <Nav.Link as={Link} to='/Admin/allAccounts' className='liensAdm'>Administrateurs</Nav.Link>            
                        <Nav.Link as={Link} to='/Admin/orders' className='liensAdm'>Commandes</Nav.Link>                       
                        
                        </Nav>
                        <Button variant='outline-light'>    <RiUserSettingsFill />  </Button>
                    </Navbar.Collapse>


                </Container>

            </Navbar>
            <Button variant='light' style={{position: "absolute", right: 13, top: "12%"}} as={Link} to='/'><GrPowerCycle style={{fontWeight: 500}}></GrPowerCycle></Button>
            </>
    )
}

else{
    return(
        <Alert variant="warning"> Vous n'êtes pas un administrateur</Alert>
    )
}
}


export default NavBarAdmin;
