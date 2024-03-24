import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



// Importation du composant isConnected 
import IsConnected from './FonctionLogin';

// Importation des icones du panier et du coeur 
import {BsFillHeartFill, BsJustify} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
import { FaCartShopping } from "react-icons/fa6"


// Le badge 
import Badge from 'react-bootstrap/Badge';

// Fichier CSS

import './NavBar.css'
import { useContext } from 'react';
import { UserContext } from '../Profile/InfoContext';
import { Button, NavLink } from 'react-bootstrap';
import AllCategories from './Categories';
import AffichageDuPanier from '../Panier/AffichageDuPanier';

function BarreNavigation() {

  const [userInfo ] = useContext(UserContext)
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:"rgba(24,12, 109,0.33)"}} >
      {/* bg-body-tertiary */}
      <Container >
        <Navbar.Brand as={Link} to='/' className='Marque'>  Buy_More </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="liens me-auto" style={{width:'100%',display:'flex', flexWrap:'wrap', justifyContent:'space-around', paddingTop: 10}}>
            <Nav.Link as={Link} to='/' className='text-light'>Accueil</Nav.Link>
            {/*  */}
            <AffichageDuPanier/>
            
            {/* <Nav.Link><FaShoppingCart style={{fontSize:20}}/><Badge bg='success'>{userInfo.cart.length}</Badge></Nav.Link> */}
            <IsConnected> <Nav.Link as={Link} to='/' className='text-light' ></Nav.Link></IsConnected>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{backgroundColor:"rgba(120,12, 109,0.36)"}} >
      <span style={{display:'flex', justifyContent:'center',alignItems:'center'} } className="livraison">
    <TbTruckDelivery style={{fontSize:20, color:'rgba(121,32,22,.9)'}}/>{' '} livraison partout au Gabon
    </span>
    </div>
    <div>
        <AllCategories/>
    </div>
    </>
  );
}

export default BarreNavigation;