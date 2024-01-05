import { useState } from "react";
import { Navbare } from "./navbare";
import { Navtop } from "./navtop";
import { OneProduit} from "./produit";
import { Produits } from "./produits";
import { Statistiques } from "./statistiques";


export function DashboardAdminVentes (){
    const [produitselect, setProduitselect] = useState(null)
    const [isvisible, setIsvisible] = useState(false)

    return(
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
    )
}