// import Container from "react-bootstrap/esm/Container";
import CatCard from "./Categorie";
import '../../css/user/Categories/AllCat.css'
// import NavLink from "react-bootstrap/esm/NavLink";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AllCat(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(

        // <div className="ACat pt-3">

        //  <NavLink href="#"> <h3>Toutes les categories...</h3></NavLink>

            <Carousel className="ACat pt-4 px-3" responsive={responsive}>   


                    <CatCard  cat ="climatiseurs.png"></CatCard>     
                    <CatCard cat ="Fours.png"></CatCard>
                  

                    <CatCard  cat ="climatiseurs.png"></CatCard>     
                    <CatCard cat ="Fours.png"></CatCard>

<CatCard  cat ="climatiseurs.png"></CatCard>     
<CatCard cat ="Fours.png"></CatCard>

<CatCard  cat ="climatiseurs.png"></CatCard>     
<CatCard cat ="Fours.png"></CatCard>
            </Carousel>
        


        // {/* </div> */}

    )
}

export default AllCat;