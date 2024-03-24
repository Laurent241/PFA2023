import { BiRightArrow } from "react-icons/bi"



function Cat(props){

    return(
        <li><BiRightArrow/>{props.NomCat} [{props.Qty}]</li>

    )
}
export default Cat