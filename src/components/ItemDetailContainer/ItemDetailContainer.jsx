import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import classes from './ItemDetailContainer.module.css'

export const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState(null);

    const { productId } = useParams();

useEffect(() =>{
    getProductsById(productId)
        .then(response =>{
            setProducto(response)
        })
        .catch(error =>{
            console.log(error);
        })

},[])

return(
    <div className={classes.detailContainer}>
        {producto && < ItemDetail {...producto} />}
    </div>
)

}