import {IoLogoFacebook} from "react-icons/io";
import {BsTwitter} from "react-icons/bs"
import {BiRightArrow} from "react-icons/bi"
import {AiFillInstagram} from 'react-icons/ai'
import '../css/user/footer.css'
import { useEffect, useState } from "react";
import Cat from "./Cat";
//  CSS

import axios from "axios";
import OneCategorie from "./Navbars/OneCategorie";
const api = axios.create({
    baseURL: "http://localhost:3002/api"
})


function Footer(){

    const [allCats, setAllCats] = useState([])

    useEffect(()=>{
        const ToutesCategorie = ()=>{
            api.get('/AllCategories')
            .then(rep=>{
                console.log(rep.data.allCategories);
                setAllCats(rep.data.allCategories)
            })
            .catch(()=>{
                console.log("Impossible !!");
            })

        }
        ToutesCategorie()
    
    })




    return(

        <div className="All text-dark p-5 " style={{display: "flex", flexWrap:"wrap", justifyContent:"space-around", marginTop: "10%"}}>
            <div className="Categorie ">
                <h6> Nos categories</h6>
                <ul>
                    {allCats.map(c=>  <Cat NomCat={c.NomCategorie} Qty={c.NombreArticle} />)}
                </ul>
            </div>
            <div className="Categorie " style={{height: 200,width: 350, display:"flex", flexWrap:"wrap", flexDirection:"column", justifyContent:"space-around"}}>
                <h6>Informations legales</h6>
                    <ul>
                        <li><BiRightArrow/>Donnees personnelles et coockies</li>
                        <li><BiRightArrow/>Notre politique</li>
                        <li><BiRightArrow/>Mentions legales</li>

                    </ul>
                    <div className="Categorie rs col-md-3 col-sm-3 col-xl-3" style={{width: 240,  marginTop: 20, position:'relative',  bottom:0   }}>
                {/* <h6>Nous contacter</h6> */}
                <ul>
                    <li><IoLogoFacebook className="iconsRS" style={{color: 'rgba(34, 84, 223, 0.993)', fontSize:30}}></IoLogoFacebook></li>
                    <li><AiFillInstagram className="iconsRS" style={{backgroundColor: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', fontSize:30}}></AiFillInstagram></li>
                    <li><BsTwitter className="iconsRS" style={{color: 'rgba(105, 163, 225, 0.993)', fontSize:30}}></BsTwitter></li>
                </ul>
            </div>
            </div>
            <div className="Categorie " style={{borderRight: 'none'}}>

                <h6>Decouvrez notre boutique</h6>
                <ul>
                     <li><BiRightArrow/>Engagements</li>
                     <li><BiRightArrow/>Mode de paiement et livraison</li>
                     <li><BiRightArrow/>Politique de retour</li>
                     <li><BiRightArrow/>FAQ</li>

                </ul>
            </div>

           

                    <p style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>&copy; Réalisé par <span> Okouyi Kongo Laurent </span></p>

        </div>
    )
}

export default Footer