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
    return (
      <>
        <div className="div3">
        {produitselect ? (
          <div className="produit">
            <div className="produitimage">
              <img src={`https${produitselect.image.substring(2)}`} alt="image d'un produit evirtus" />
            </div>
            <div className="produitcontent">
              <div className="desctop">
                <p className="name">{produitselect.nom_produit}</p>
                <p className="price">{produitselect.prix_total} fc</p>
              </div>
              <div className="descbot">
                <p className="desc">date : {produitselect.date_vente}</p>
                <p className="desc">heure : {produitselect.heure_vente}</p>
                <p className="desc">prix unitaire : {produitselect.prix_unitaire} fc</p>
                <p className="desc">quantité : {produitselect.quantite}</p>
                <br/>
                <p>client : </p>
                <p className="desc">{produitselect.nom_client}</p>
                <p className="desc">{produitselect.email_client}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="aucun">
            <p>aucune vente sélectionnée</p>
          </div>
        )}
      </div>
      </>
    );
  }
 