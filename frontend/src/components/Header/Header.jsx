import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setLogOut } from "../../redux/reducers/userAuthSlice"
import { resetProfile } from "../../redux/reducers/profileSlice"
import logo from "../../assets/img/argentBankLogo.webp"

export default function Header() {
   const token = useSelector((state) => state.userAuth.token)
   const profile = useSelector((state) => state.profile)
   const dispatch = useDispatch()

   const handleLogout = () => {
      dispatch(setLogOut({})) // Réinitialise le token et l'état d'authentification
      dispatch(resetProfile()) // Réinitialise le profil utilisateur
   }

   return (
      <header>
         <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
               <img
                  className="main-nav-logo-image"
                  src={logo}
                  alt="Argent Bank Logo"
               />
               <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
               {token ? (
                  <>
                     <Link className="main-nav-item" to="/user">
                        {profile.userName || "User"} {/* Vérifie si le username existe */}
                     </Link>
                     <Link
                        className="main-nav-item"
                        to="/"
                        onClick={handleLogout}
                     >
                        <i className="fa fa-user-circle"></i> Sign Out
                     </Link>
                  </>
               ) : (
                  <>
                     <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i> Sign In
                     </Link>
                     <Link className="main-nav-item" to="/sign-up">
                        Sign Up
                     </Link>
                  </>
               )}
            </div>
         </nav>
      </header>
   )
}
