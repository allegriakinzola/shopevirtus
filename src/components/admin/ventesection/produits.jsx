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
          <small>{produit.categorie}</small>
        </div>
      </div>
      <div className="blocright">
        <p>{produit.prix} fc</p>
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
        const response = await axios.get("https://shopevirtus.000webhostapp.com/produits");
        const array = Object.values(response.data);
        setProduits(array);
      } catch (error) {
        console.error(`Erreur lors de la récupération des données : ${error}`);
      }
    };

    fetchData();
  }, []);

  const selecteProduit = (produit) => {
    setProduitselect(produit);
  };

  const handlechange = (e) => {
    const value = e.target.value;
    setSearchterm(value);
  };

  const catchange = (e) => {
    const value = e.target.value;
    if (value === "all") {
    setProduitcategorie("");
  } else {
    setProduitcategorie(value);
  }
  };

  const handleblur = () => {
    setProduitcategorie(produitcategorie);
  };

  console.log(produitcategorie);

  return (
    <div className="div2">
      <div className='top'>
        <div className="searche">
          <span><AiOutlineSearch /></span>
          <input
            type="text"
            value={searchterm}
            onChange={handlechange}
            name="search"
            id="search"
            placeholder="Rechercher un produit"
          />
        </div>
        <div className='cathegorie'>
          <select
            id='cathegorie'
            name='cathegorie'
            value={produitcategorie}
            onChange={catchange}
            onBlur={handleblur}
          >
            <option value="all">Toutes les catégories</option>
            <option value="Sac à dos">Sac à dos</option>
            <option value="Livre">Livre</option>
            <option value="Informatique">Informatique</option>
          </select>
        </div>
      </div>
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