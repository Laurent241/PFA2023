import Image from 'react-bootstrap/Image';
import '../../css/user/Categories/Categorie.css'
// import NavLink from 'react-bootstrap/esm/NavLink';

const CatCard = (props) => {
  return <Image href="#" className="imageCat mb-lg-5 mt-4 col-sm-3 col-md-3 col-xl-4  col-lg-3  " src={"assets/img/"+props.cat} alt="Ceci est une image " style={{}} fluid />;
}

export default CatCard;