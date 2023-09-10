import { useContext } from "react";
import { useMode } from "../../context/ModeContext";
import { Item } from "../Item/Item";
import classes from './ItemList.module.css'

export const ItemList = ({products}) =>{

    const { mode } = useMode();

    return (
        <div className={mode == 'light' ? `${classes.container}` : `${classes.container} ${classes.dmItemLsit}`}>
            {products.map(producto =>{
                return(
                < Item {...producto} key={producto.id} />
                )
            })}
        </div>
    )
}