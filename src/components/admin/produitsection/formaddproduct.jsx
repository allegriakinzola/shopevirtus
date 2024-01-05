import {AiOutlineMail} from "react-icons/ai"
import {MdPassword} from "react-icons/md"
import { IoIosCloseCircleOutline } from "react-icons/io";

export function Formaddpropduct({isselected,setIsselected}){

    const handleclose = () => {
      setIsselected(!isselected)
    }
    return(
      <div className={`formaddprod ${isselected ? "" : "unselect"}`}>
              <div className="form">
                <span className="closes" onClick={handleclose}><IoIosCloseCircleOutline className="icone" /></span>
                <div className="formcontain">
                  <div className="explain">
                     <h3>Ajouter un produit</h3>
                  </div>
                  <form>
                      <div className="inputcontenaire">
                          <div className="inputgroupe">
                              <input id="email"  type="text" placeholder="nom du produit"/>
                              <span><AiOutlineMail/></span>
                          </div>
                      </div>
                      <div className="inputcontenaire">
                          <div className="inputgroupe">
                              <input id="password" type="text"placeholder="description du produit"/>
                              <span><MdPassword/></span>
                          </div>
                      </div>
                      <div className="inputcontenaire">
                          <div className="inputgroupe">
                              <input id="password" type="text"placeholder="prix du produit"/>
                              <span><MdPassword/></span>
                          </div>
                      </div>
                      <div className="inputcontenaire">
                          <div className="inputgroupe">
                              <input id="password" type="file"placeholder="image" />
                              <span><MdPassword/></span>
                          </div>
                      </div>
                      <div className="inputcontenaire">
                          <div className="inputgroupe">
                            <select id='cathegorie' name='cathegorie' >
                              <option value="all">catégories</option>
                              <option value="Sac à dos">Sac à dos</option>
                              <option value="Livre">Livre</option>
                              <option value="Informatique">Informatique</option>
                            </select>
                          </div>
                      </div>
                      <button type="submit">Ajouter</button>
                  </form>
                </div>
              </div>
          </div>
    )
  }