import {IoIosNotifications} from "react-icons/io";
import {FiLogOut} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export function Navtop({isvisible, setIsvisible}){
    const navigate = useNavigate()
    const togglenavbare = () => {
        setIsvisible(!isvisible)
    }

    const logout = () => { 
        navigate("/")
    }
    return(
        <div className="navtop">
            <div className="navleft">
                <span className="close" onClick={togglenavbare}><AiOutlineClose/></span>
            </div>
            <div className="navtopright">
                <div className="notification">
                   <IoIosNotifications className="notificone"/>
                   <span>2</span>
                </div>
                <span className="logout" onClick={logout}><FiLogOut/></span>
            </div>
        </div>
    )
}