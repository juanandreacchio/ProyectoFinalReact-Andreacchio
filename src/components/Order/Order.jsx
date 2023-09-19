import { OrderItem } from "../OrderItem/OrderItem"
import classes from './Order.module.css'

export const Order = ({id, items, total}) =>{


    return(
        <div className={classes.orderContainer}>
            <h3 className={classes.orderTitle}>Orden: {id}</h3>
            {items.map(item =>{
                return(
                    < OrderItem {...item} />
                )
            })}
            <h3 className={classes.orderTitle}>Total: ${total}</h3>
        </div>
    )
}