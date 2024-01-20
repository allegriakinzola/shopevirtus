import toast from 'react-hot-toast';
import axios from "axios";
const notify = () => toast('Here is your toast.');

export function Popupdeletproduit ({agree, setAgree, produit}) {
    const {id_produit} = produit
    const toggleboudle = () =>{
        setAgree(!agree)
    }
    const deleteproduit = () => {
        async function onedeleproduit () {
            try {
                const response = await axios.delete(`https://shopevirtus.000webhostapp.com/produits/delete/${id_produit}`)
                console.log(response.data)
            } catch (error) {
                toast.success("produit supprimé avec succès")
                console.error(`une erreur s'est produit lors de la suppression du produit ${produit.nom_produit} : ${error}`)
            }
        }
        onedeleproduit()
    }
    return(
        <div className={`popup ${agree ? "" : "close"}`}>
            <div className="message">
                <div className="contenaire">
                    <h5>Voulez-vous supprimer ce produit</h5>
                    <div className="confirme">
                        <span className="oui bouton" onClick={() => { toggleboudle(); notify(), deleteproduit()}} >oui</span>
                        <span className="non bouton" onClick={toggleboudle}>non</span>
                    </div>
                </div>
            </div>
        </div>
    )
}