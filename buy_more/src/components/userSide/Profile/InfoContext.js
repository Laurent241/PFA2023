import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    
    const [userInfo, setUserInfo] = useState({Nom:'', Prenom:'', Telephone:'', Email:'', Adresse:'',cart:[], favoris:[], IsAdmin:'',  donneesCaptured: false})

    
    return(
        <UserContext.Provider value={[userInfo,setUserInfo]}>
            {props.children}
        </UserContext.Provider>
    )

}