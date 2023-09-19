import classes from './OrderItem.module.css'

export const OrderItem = ({title, quantity, price}) =>{


    return(
        <div className={classes.orderItemContainer}>
            <p className={classes.orderItemTitle}>{title}</p>
            <p>x{quantity}</p>
            <p>${price}</p>
            <p>${price * quantity}</p>
        </div>
    )
}