import logo from "../../../medias/app_logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

export function Navbare({ isvisible, setIsvisible, name }) {
  const togglenavigate = () => {
    setIsvisible(!isvisible);
  };

  const location = useLocation();


  return (
    <div className={`navbare ${isvisible ? "" : "toggle"}`}>
      <div className="logotoggle">
        <img src={logo} alt="evirtus logo"></img>
        <span className="close" onClick={togglenavigate}>
          <AiOutlineClose />
        </span>
      </div>
      <div className="link">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "" : "" };
              }}
              to={{
                pathname: "/dashboardclientcommandes",
                state: { name: name }
              }}
            >
              <div className="lien">
                <span className="linkicone">
                  <AiOutlineHome className="icone" />
                </span>
                <span>Commandes</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "" : "" };
              }}
              to={{
                pathname: "/dashboardadminventes",
                state: { name: name }
              }}
            >
              <div className="lien">
                <span className="linkicone">
                  <MdOutlineRemoveShoppingCart className="icone" />
                </span>
                <span>Tableau de bord</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "" : "" };
              }}
              to={{
                pathname: "/dashboardadmin/",
                state: { name: name }
              }}
            >
              <div className="lien">
                <span className="linkicone">
                  <MdDataSaverOff className="icone" />
                </span>
                <span>Données</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}