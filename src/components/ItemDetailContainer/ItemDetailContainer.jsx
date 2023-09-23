import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import classes from './ItemDetailContainer.module.css'
import { useMode } from "../../context/ModeContext";
import { SpinnerCircular } from 'spinners-react';
import { getProductsById } from "../../services/firebase/firestore/products";

export const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState(null);
    const [loading , setLoading] = useState(true)

    const { productId } = useParams();

    const { mode } = useMode()



useEffect(() =>{
    setLoading(true)

    getProductsById(productId)
        .then(product =>{
            setProducto(product)
        })
        .catch((error) =>{
            console.error(error);
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