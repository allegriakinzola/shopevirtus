import {FaRegSurprise} from "react-icons/fa"
import {AiFillGift} from "react-icons/ai"
import {LuCircleDollarSign} from "react-icons/lu"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import axios from "axios"

export function Statistiques(){
    const [leght, setLeght] = useState(0)
    const [price, setPrice] = useState(0)
    const [cathegories, setCathegories] = useState(0)

    useEffect(() => {
        async function getLeght (){
            try {
                const  response = await axios.get('https://shopevirtus.000webhostapp.com/produits')
                const data = Object.values(response.data)
                const leghtlist = data.length
                getTotalPrice(data)
                getAllCategoris(data)
                setLeght(leghtlist)
            } catch (error) {
                console.error(`une erreur est survenue lors de la récupération des données ${error}`)
            }
        }

        async function getTotalPrice(datas) {
            const array = datas.map(product => product.prix);
            const pricetotal = array.reduce((acc, valeur) => acc + valeur, 0);
            setPrice(pricetotal);
          }
        
        async function getAllCategoris (datas){
            const cathegorie = datas.map(product => product.categorie)
            let array = []
            for (let i = 0; i < cathegorie.length; i++) {
                if (!array.includes(cathegorie[i])) {
                  array.push(cathegorie[i]);
                }
              }
            setCathegories(array.length)
        }

        getLeght()
    }, [])

    return(
        <div className="div1">
           <h3 className="tittle1">STATISTIQUES</h3>
           <div className="content">
                 <div className="state">
                    <div className="data">
                        <span>produits</span>
                        <span className="dataresult">{leght}</span>
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
                        <span className="dataresult">{cathegories}</span>
                    </div>
                    <div className="graphique three">
                        <span className="carre"></span>
                        <span className="icone"><FaRegSurprise/></span>
                    </div>
                </div>
           </div>
           <h3 className="tittle2">PRODUITS</h3>
        </div>
    )
}