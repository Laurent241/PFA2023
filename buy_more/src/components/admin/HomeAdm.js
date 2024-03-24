import { Alert, Card, Container, NavLink } from "react-bootstrap";
import ListProd from "../userSide/ListeProducts";
import NavBarAdmin from "./NavbarAdm";
import { Link } from "react-router-dom";
import { AuthenticateContext } from "../../controlPanel/AuthContext";
import { UserContext } from "../userSide/Profile/InfoContext";
import { useContext } from "react";


function HomeAdm(){


    const [authInfo] = useContext(AuthenticateContext)
    const [userInfo] = useContext(UserContext)

    if(userInfo.IsAdmin)
    {

    return(
        <div style={{    background:'linear-gradient(45deg,  rgba(2,23,123,0.4), rgba(121,9,67,0.4), rgba(222,121,32,0.4))', height:'100vh' }}>
        <NavBarAdmin />
        <Container className=" col-md-12" style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around',marginTop:70}} >

            <NavLink as={Link} to='/Admin/orders'>
            <Card className="col-md-5 mb-4" style={{height:190, width:400, padding:'13%', borderRadius:0}} border='info' bg="danger">

                <Card.Header style={{boxShadow:'2px 3px 3px black', fontSize:22}}>Gestion des commandes </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
            </NavLink>

            <NavLink as={Link} to='/Admin/allAccounts'>

             <Card className="col-md-5 mb-4" style={{height:190, width:400, padding:'13%', borderRadius:0}} bg='secondary' border='secondary'>

                <Card.Header style={{ background:'rgba(201,200,228, 0.5)',boxShadow:'2px 3px 3px black', fontSize:22}}>Gestion des administrateurs</Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>

            </NavLink>


            <NavLink as={Link} to='/Admin/manageProduits'>

             <Card className="col-md-5 mb-4" style={{height:190, width:400, padding:'13%', borderRadius:0}} bg="warning" >

                <Card.Header style={{boxShadow:'2px 3px 3px black',color:'black',  textShadow:'3px 2px 3px white', fontSize:22}}>Gestion des produits </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>

            </NavLink>

                <NavLink as={Link} to='/Admin/users'>
             <Card className="col-md-5 mb-4" style={{height:190, width:400, padding:'13%', borderRadius:0}} bg="success">

                <Card.Header  style={{ background:'rgba(10,121,111, 0.5)', borderRadius:'none',boxShadow:'2px 3px 3px black', color:'white', textShadow:'3px 2px 3px black', fontSize:22}}>Gestion des utilisateurs </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
            </NavLink>

        </Container>
        
        </div>
    )
    
        
}

else{
    return(
        <Alert variant="danger">Vous n'êtes pas un administrateur </Alert>
    )
}
}

export default HomeAdm;