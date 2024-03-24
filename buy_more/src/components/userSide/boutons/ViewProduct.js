import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ViewProd from './ViewProd'

import {FaEye} from 'react-icons/fa'

function ViewProduct(props) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button variant="outline-dark" key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}style={{ fontSize: 22, transition:'.9s', borderRadius:'25%',height:50 }}>
              <FaEye className='oeil'/>
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Vue détaillée du produit <span style={{color: 'red', }}>{props.Nom} </span> </Modal.Title>
        </Modal.Header>
        <Modal.Body><ViewProd  Nom={props.Nom} Categorie={props.Categorie} Image1={props.Image1} Description={props.Description} Prix={props.Prix} id={props.id}/></Modal.Body>
      </Modal>
    </>
  );
}

export default ViewProduct;