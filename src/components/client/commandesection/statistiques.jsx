import {FaRegSurprise} from "react-icons/fa"
import {AiFillGift} from "react-icons/ai"
import {LuCircleDollarSign} from "react-icons/lu"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import axios from "axios"

export function Statistiques() {
    const [length, setLength] = useState(0);
    const [cmvalid, setCmvalid] = useState(0);
    const [cmnotvalid, setCmnotvalid] = useState(0);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://shopevirtus.000webhostapp.com/order/all_orders');
          const data = Object.values(response.data);
          setLength(data.length);
          getValidOrdersCount(data);
        } catch (error) {
          console.error(`An error occurred while fetching data: ${error}`);
        }
      }
  
      function getValidOrdersCount(data) {
        const validOrders = data.filter((commande) => commande.statut === 1);
        setCmvalid(validOrders.length);
        setCmnotvalid(data.length - validOrders.length);
      }
  
      fetchData();
    }, []);
  
    return (
      <div className="div1">
        <h3 className="tittle1">STATISTIQUES</h3>
        <div className="content">
          <div className="state">
            <div className="data">
              <span>Commandes</span>
              <span className="dataresult">{length} </span>
            </div>
            <div className="graphique one">
              <span className="carre"></span>
              <span className="icone"><AiFillGift/></span>
            </div>
          </div>
          <div className="state produits">
            <div className="data">
              <span className="datatitle">Commandes validées</span>
              <span className="dataresult">{cmvalid} </span>
            </div>
            <div className="graphique two">
              <span className="carre"></span>
              <span className="icone"><LuCircleDollarSign/></span>
            </div>
          </div>
          <div className="state">
            <div className="data">
              <span>Commandes non validées</span>
              <span className="dataresult">{cmnotvalid}</span>
            </div>
            <div className="graphique three">
              <span className="carre"></span>
              <span className="icone"><FaRegSurprise/></span>
            </div>
          </div>
        </div>
        <h3 className="tittle2">PRODUITS</h3>
      </div>
    );
  }