import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import classes from './ItemDetailContainer.module.css'
import { useMode } from "../../context/ModeContext"

export const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState(null);

    const { productId } = useParams();

    const { mode } = useMode()



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
    <div className={mode === 'light' ? `${classes.detailContainer}` : `${classes.detailContainer} ${classes.detailContainerDM}`}>
        {producto && < ItemDetail {...producto} />}
    </div>
)

}