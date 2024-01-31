import { useState } from "react";
import logo from "../medias/app_logo.png";
import {AiOutlineMail} from "react-icons/ai"
import {MdPassword} from "react-icons/md"
import  axios  from "axios";
import { useNavigate } from "react-router-dom";

export function Login (){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorLogin, setErrorLogin] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
           const response = await axios.post("http://localhost:8000/login", {
                email : email,
                password : password
            })
           if(typeof response.data === 'object'){
                redircet(response.data)
           }else if (response.data === "usernotexist"){
                setErrorLogin("identifiant ou mot de passe incorrect")
                
           }
        } catch (error) {
            console.error(`une erreur s'est produite lors de l'envoie de la requette : ${error.message}: ${error.response}`)   
            setErrorLogin("identifiant ou mot de passe incorrect")   
        }
    } 

    function redircet (user){
        if(user.statut === "admin"){
            navigate('/dashboardadminproduits', {state : {id : user.name}}) 
        }else{
            navigate('/dashboardclientcommandes', {state : {id : user.name}}) 
        }
    }

    //render
    return(
        <div className="login">
            <div className="form">
              <div className="formcontain">
                <div className="explain">
                    <h4>Connexion</h4>
                    <small>connectez-vous sur le shop</small>
                    <div className="barre">
                        <div className="one"></div>
                        <div className="middle"></div>
                        <div className="one"></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputcontenaire">
                        <label htmlFor="email">Email*</label>
                        <div className="inputgroupe">
                            <input id="email" type="text" value={email} onChange={(e)=>{setEmail(e.target.value), setErrorLogin('')}} placeholder="ex : allegriakinzola@gmail.com"/>
                            <span><AiOutlineMail/></span>
                        </div>
                    </div>
                    <div className="inputcontenaire">
                        <label htmlFor="password">mot de passe*</label>
                        <div className="inputgroupe">
                            <input id="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="ex : @allegria123"/>
                            <span><MdPassword/></span>
                        </div>
                        <small>{errorLogin}</small>
                    </div>
                    <button type="submit">Se connecter</button>
                    <p></p>
                </form>
              </div>
            </div>
            <div className="presentation">
                <div className="contenu">
                    <img src={logo} alt="logo evirtus" ></img>
                    <p>Ecole virtuelle numérique</p>
                </div>
            </div>
        </div>
    )
}
