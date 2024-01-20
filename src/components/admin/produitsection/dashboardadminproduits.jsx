import React, { useEffect, useState } from "react";
import { Navbare } from "./navbare";
import { Navtop } from "./navtop";
import { OneProduit} from "./produit";
import { Produits } from "./produits";
import { Statistiques } from "./statistiques";
import { useLocation } from "react-router-dom";
import { Anim } from "./anim";


export function DashboardAminProduits (){
    const [produitselect, setProduitselect] = useState(null)
    const [isvisible, setIsvisible] = useState(false)
    const [showAnim, setShowAnim] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnim(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return(
        <>
        {showAnim && <Anim />}
        <div className="dashboard">
            <Navbare isvisible={isvisible} setIsvisible={setIsvisible}/>
            <div className="dashboardcontent">
                <Navtop isvisible={isvisible} setIsvisible={setIsvisible}/>
                <div className="parent">
                    <Statistiques/>
                    <Produits setProduitselect={setProduitselect}/>
                    <OneProduit produitselect={produitselect} />
                </div>
            </div>
        </div>
        </>
        
    )
}