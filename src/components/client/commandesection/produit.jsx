import React, { useState } from 'react';

export function OneProduit({ produitselect }) {
  const [error, setError] = useState(null);

  const validcommand = async () => {
    const url = `https://shopevirtus.000webhostapp.com/order/confirm/${produitselect.id_commande}`;

    try {
      const response = await fetch(url, {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la confirmation de la commande");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`une erreur s'est produite lors de la confirmation de la commande; ${error} : ${error.message}`);
    }
  };

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
                <p className="price">{produitselect.prix_unitaire} fc</p>
              </div>
              <div className="descbot">
                {produitselect.date_vente !== null ? (
                  <>
                    <p className="desc">date vente: {produitselect.date_commande}</p>
                  </>
                ) : (
                  <p className="desc">statut: non vendu</p>
                )}
                <p className="desc">quantité : {produitselect.quantite}</p>
                <p className="desc">prix total : {produitselect.prix_unitaire * produitselect.quantite} fc</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="aucun">
            <p>Aucun produit sélectionné</p>
          </div>
        )}
        <div className="bouton">
          <button className="add" onClick={validcommand}>Valider la commande</button>
        </div>
      </div>

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}