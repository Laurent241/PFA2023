import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddFavList from './AjouterFavoris';
import Container from 'react-bootstrap/esm/Container'

function ViewProd(props) {
  return (
    <div  >
    <Row xs={1} md={2} className="g-4">
        <Col >
          <Card>
            <Card.Img variant="top" src={props.Image1} />
            <Card.Body>
              <Card.Title>Nom: {props.Nom}<br/>Catégorie: {props.Categorie}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

    <Card className="p-4" style={{height:'90%'}}>
      <Card.Header>Description</Card.Header>
      <Card.Body>
        
        <Card.Text>

          l vls l okS?L so ls, o v, okds vl, odks oz o dsv, dsovdvz oz vl divdvd d
           dcndondiqpiknbeoknqsocq
           ofndicpdcp p niàehfydoNQCÖBOUBDSONCZ sd dbuezb dcu bucbd ciez idq iezy d e ZD CEZ DIBCEIZBC 
           DMI DCZDIPC IEZ DI VIBV  HD DCBDIBUEFDJNOEZUNFD
           EDIEJBDON
           VKQNCOICIK
          </Card.Text>

      </Card.Body>

      <Container>

      <AddFavList/>

      </Container>
      
    </Card>

    </Row>

    </div>
  );
}

export default ViewProd;