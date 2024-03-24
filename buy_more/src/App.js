// eslint-disable-next-line
// Importation de bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation des routes 
import {Routes, Route, Outlet} from 'react-router-dom'

// Importation du fichier CSS lié au composant App.js
import './App.css';

// Importation des autres composants 

// ***Barre de navigation user
import BarreNavigation from './components/userSide/Navbars/NavBar';
// *** Importation du composant header 
// import Header from './components/userSide/header'

// *** Importation du composant de carte produit
import AllProd from './components/userSide/Produits';

// **** Vue detaillee
import ViewProduct from './components/userSide/boutons/ViewProduct';
 
// 
import { AuthProvider, AuthenticateContext } from './controlPanel/AuthContext';

// 
import { UserProvider } from './components/userSide/Profile/InfoContext';

// Le composant de creation d'un compte
import SignIn from './components/userSide/Profile/FormulaireCreation';
import MonProfile from './components/userSide/Profile/Profile';
import { useContext, useEffect } from 'react';
import AddFavList from './components/userSide/boutons/AjouterFavoris';


// eslint-disable-next-line
// Les composants administrateurs 
import HomeAdm from './components/admin/HomeAdm';
import NavBarAdmin from './components/admin/NavbarAdm';
import ListeProduits from './components/admin/Produits/liste/Stock';
import ListeAdmin from './components/admin/Administrateurs/ListeAdmins';
import CreationProduit from './components/admin/Produits/AjoutProd';
import AllUsers from './components/admin/Utilisateurs/Affichage/AllUsers';
import AffichageDuPanier from './components/userSide/Panier/AffichageDuPanier';
import ArticleDuPanier from './components/userSide/Panier/ListeArticles';
import ModifierLeProfile from './components/userSide/Profile/Modification du profile/ModificationDuProdfile';
import ListCommandes from './components/userSide/Profile/Commandes/ListeCommandes';
import Orders from './components/admin/Commandes/manageCommandes';
import ValidCart from './components/userSide/Profile/Commandes/Passer une Commande/Validationdupanier';
import ValidAdresse from './components/userSide/Profile/Commandes/Passer une Commande/ValidAdresse';


function App() { 

  // const [authInfo, setAuthInfo] = useContext(AuthenticateContext)
  // useEffect(()=>{
  //   const authToken = localStorage.getItem("authToken")
  //   if (authToken){

  //     setAuthInfo(authToken)
  //   }

  // },[])
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
<Outlet/>
      {/* +++++++++++++ Routes ************ */}
<Routes>
  <Route path='/' element={<AllProd/>}/>
  <Route path='/Prod/:id'element={<ViewProduct/>}/>
  <Route path='/signup' element={<SignIn/>}/>
  <Route path='/MyAccount/:id' element={<MonProfile/>} />
  <Route path='/' element={<AddFavList/>}/>
  <Route path='/MyAccount/:id/Mon-panier' element={<ArticleDuPanier/>}/>
  <Route path='/MyAccount/updateAccount/:id' element={<ModifierLeProfile/>}/>
  <Route path='/MyAccount/orders/:id' element={<ListCommandes/>}/>
  <Route path='/MyAccount/:id/validCart' element={<ValidCart/>}/>
  <Route path='/MyAccount/:id/validCommande' element={<ValidAdresse/>}/>


  {/* Routes liees à l'administrateur */}
  <Route path='/Admin' element={<NavBarAdmin/>}/>
  <Route path='/Admin/home' element={<HomeAdm/>}/>
  <Route path='/Admin/manageProduits' element={<ListeProduits/>}/>
  <Route path='/Admin/allAccounts' element={<ListeAdmin/>}/>
  <Route path='/Admin/products/create' element={<CreationProduit/>}/>
  <Route path='/Admin/users' element={<AllUsers/>}/>
  <Route path='/Admin/orders' element={<Orders/>} />
</Routes>
{/* <Route path='/login' element={<Auth/>}/> */}

      
      </UserProvider>
      </AuthProvider>
      
      </div>
    );
}

export default App;
