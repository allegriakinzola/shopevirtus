import { useEffect, useState } from "react";
import { Navbare } from "./navbare";
import { Navtop } from "./navtop";
import { OneProduit} from "./produit";
import { Produits } from "./produits";
import { Statistiques } from "./statistiques";
import { Anim } from "../produitsection/anim";


export function DashboardAdminVentes (){
    const [produitselect, setProduitselect] = useState(null)
    const [isvisible, setIsvisible] = useState(false)
    const [showAnim, setShowAnim] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnim(false);
        }, 1800);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return(
        <>
        {showAnim && <Anim/>}
         <div className="dashboard">
            <Navbare isvisible={isvisible} setIsvisible={setIsvisible} />
            <div className="dashboardcontent">
                <Navtop isvisible={isvisible} setIsvisible={setIsvisible}  />
                <div class="parent">
                    <Statistiques/>
                    <Produits setProduitselect={setProduitselect}/>
                    <OneProduit produitselect={produitselect} />
                </div>
            </div>
        </div>
        </>
       
    )
}