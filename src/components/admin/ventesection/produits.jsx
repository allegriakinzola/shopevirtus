import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";

function Produit({ produit, onProduitselected }) {
  const { image } = produit
  const urlimage = image.substring(2)
  return (
    <div className="produit" onClick={onProduitselected}>
      <div className="blocleft">
        <div className="blocleftimage">
          <img className="image" src={`https${urlimage}`} alt="image des produits du shop evertus" />
        </div>
        <div className="blocleftcontent">
          <p>{produit.nom_produit}</p>
          <small>{produit.date_vente}</small>
        </div>
      </div>
      <div className="blocright">
        <p>{produit.prix_total} fc</p>
        <small className="state">{produit.nom_produit}</small>
      </div>
    </div>
  )
}

export function Produits({ setProduitselect }) {
  const [produits, setProduits] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [produitcategorie, setProduitcategorie] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://shopevirtus.000webhostapp.com/order/all_orders");
        const array = Object.values(response.data);
        const ventes = array.filter(vente => vente.statut === 1)
        setProduits(ventes);
      } catch (error) {
        console.error(`Erreur lors de la récupération des données : ${error}`);
      }
    };

    fetchData();
  }, []);

  const selecteProduit = (produit) => {
    setProduitselect(produit);
  };

 
  return (
    <div className="div2">
      <div className='content'>
        {produits
          .filter((produit) => {
            const isMatchingSearchTerm =
              searchterm === "" ||
              produit.nom_produit.toLowerCase().includes(searchterm.toLowerCase());
            const isMatchingCategorie =
              produitcategorie === "" || produit.categorie === produitcategorie;
            return isMatchingSearchTerm && isMatchingCategorie;
          })
          .map((produit, index) => (
            <Produit
              key={index}
              produit={produit}
              onProduitselected={() => selecteProduit(produit)}
            />
          ))}
      </div>
    </div>
  );
}