import { Item } from "../Item/Item";
import classes from './ItemList.module.css'

export const ItemList = ({products}) =>{

    return (
        <div className={`${classes.container}`}>
            {products.map(producto =>{
                return(
                < Item {...producto} key={producto.id} />
                )
            })}
        </div>
    )
}