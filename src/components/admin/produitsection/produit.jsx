import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Formaddpropduct } from "./formaddproduct";
import {Popupdeletproduit} from "./popupdelecteproduct"
import React, { useState } from 'react';
import { Formeditpropduct } from "./formeditproduct";
import { Toaster } from 'react-hot-toast';

export function OneProduit({ produitselect }) {
  const [isselected, setIsselected] = useState(false)
  const [isselectedd, setIsselectedd] = useState(false)
  const [agree, setAgree] = useState(false)
  const close = () =>{
    setIsselected(!isselected)
  }

  const closed = () =>{
    setIsselectedd(!isselectedd)
  }
  const closeaccept = () => {
    setAgree(!agree)
  }
    return (
      <>
        {produitselect && (
          <>
          <Formaddpropduct produit={produitselect} isselected={isselected} setIsselected={setIsselected} />
          <Formeditpropduct produit={produitselect} isselectedd={isselectedd} setIsselectedd={setIsselectedd}/>
          <Popupdeletproduit produit={produitselect} agree={agree} setAgree={setAgree} />
          </> 
        )}
        <div className="div3">
        {produitselect ? (
          <div className="produit">
            <div className="produitimage">
              <img src={`https${produitselect.image.substring(2)}`} alt="image d'un produit evirtus" />
            </div>    
            <div className="produitcontent">
              <div className="desctop">
                <p className="name">{produitselect.nom_produit}</p>
                <p className="price">{produitselect.prix} fc</p>
              </div>
              <div className="descbot">
                <p className="desc">{produitselect.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="aucun">
            <p>Aucun produit sélectionné</p>
          </div>
        )}
        <div className="bouton">
          <div className="onebouton">
            <span onClick={closeaccept}><MdDelete/></span>
            <span onClick={closed}><CiEdit/></span>
          </div>
          <button className="add" onClick={close}>Ajouter un produit</button>
        </div>
      </div>
      <Toaster position='top-right' /> 
      </>
    );
  }
 