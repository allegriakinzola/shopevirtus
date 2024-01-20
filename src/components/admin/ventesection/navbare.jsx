import logo from "../../../medias/app_logo.png"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import {MdDataSaverOff} from "react-icons/md"
import { NavLink } from "react-router-dom"

export function Navbare ({isvisible, setIsvisible}){
    const togglenavigate = () => {
        setIsvisible(!isvisible)
    }
    return(
        <div className={`navbare ${isvisible} ? "" : "toggle" `} >
            <div className="logotoggle">
                <img src={logo} alt="evirtus logo" ></img>
                <span className="close" onClick={togglenavigate}><AiOutlineClose/></span>
            </div>
            <div className="link">
                <ul>
                    <li>
                        <NavLink style={({isActive})=>{return {background:isActive ? ' ': ''}}} to="/dashboardadminproduits">
                            <div className="lien">
                                <span className="linkicone"><AiOutlineHome className="icone"/></span>
                                <span>Produits</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {background: isActive ? ' ': ''}}} to="/dashboardadminventes">
                            <div className="lien">
                                <span className="linkicone"><MdOutlineRemoveShoppingCart className="icone"/></span>
                                <span>Ventes</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {background: isActive ? ' ': ''}}} to="/graphique" >
                            <div className="lien">
                                <span className="linkicone"><MdDataSaverOff className="icone"/></span>
                                <span>Données</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
} 