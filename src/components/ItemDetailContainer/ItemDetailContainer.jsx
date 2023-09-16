import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import classes from './ItemDetailContainer.module.css'
import { useMode } from "../../context/ModeContext";
import { db } from '../../services/firebase/firebaseConfig';
import { SpinnerCircular } from 'spinners-react';
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState(null);
    const [loading , setLoading] = useState(true)

    const { productId } = useParams();

    const { mode } = useMode()



useEffect(() =>{
    setLoading(true)
    const productRef = doc(db, 'productos', productId)

    getDoc(productRef)
        .then(documentSnapshot =>{
            const fields = documentSnapshot.data()
            const productAdapted = { id: documentSnapshot.id, ...fields}
            setProducto(productAdapted)
        })
        .catch(error =>{
            console.error(error)
        })
        .finally(() =>{
            setLoading(false)
        })

},[productId])

return(
    <div className={mode === 'light' ? `${classes.detailContainer}` : `${classes.detailContainer} ${classes.detailContainerDM}`}>
        {loading ? <SpinnerCircular size="20%" color='black' style={{width: '100%', margin: '0 auto', height: '200px', marginTop: '50px'}}/> : (producto && < ItemDetail {...producto} />)}
    </div>
)

}