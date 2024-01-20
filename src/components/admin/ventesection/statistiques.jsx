import {FaRegSurprise} from "react-icons/fa"
import {AiFillGift} from "react-icons/ai"
import {LuCircleDollarSign} from "react-icons/lu"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import axios from "axios"

export function Statistiques(){
    const [price, setPrice] = useState(0)
    const [numbervente, setNumbervente] = useState(0)

    useEffect(() => {
        async function getVentes (){
            try {
                const  response = await axios.get('https://shopevirtus.000webhostapp.com/order/all_orders')
                const data = Object.values(response.data)
                getAllventes(data)
            } catch (error) {
                console.error(`une erreur est survenue lors de la récupération des données ${error}`)
            }
        }

        async function getTotalPrice(datas) {
            const array = datas.map(product => product.prix_total);
            const pricetotal = array.reduce((acc, valeur) => acc + valeur, 0);
            setPrice(pricetotal);
          }
        
        async function getAllventes (datas){
            const cathegorie = datas.filter(commandes => commandes.statut === 1)
            getTotalPrice(cathegorie)
            setNumbervente(cathegorie.length)
        }

        getVentes()
    }, [])

    return(
        <div className="div1">
           <h3 className="tittle1">STATISTIQUES</h3>
           <div className="content">
                 <div className="state">
                    <div className="data">
                        <span>Ventes</span>
                        <span className="dataresult">{numbervente}</span>
                    </div>
                    <div className="graphique one">
                        <span className="carre"></span>
                        <span className="icone"><AiFillGift/></span>
                    </div>
                </div>
                <div className="state produits">
                    <div className="data">
                        <span className="datatitle">prix total</span>
                        <span className="dataresult">{price} fc</span>
                    </div>
                    <div className="graphique two">
                        <span className="carre"></span>
                    <span className="icone"><LuCircleDollarSign/></span>
                    </div>
                </div>
                <div className="state">
                    <div className="data">
                        <span>catégories</span>
                        <span className="dataresult">{}</span>
                    </div>
                    <div className="graphique three">
                        <span className="carre"></span>
                        <span className="icone"><FaRegSurprise/></span>
                    </div>
                </div>
           </div>
           <h3 className="tittle2">VENTES</h3>
        </div>
    )
}