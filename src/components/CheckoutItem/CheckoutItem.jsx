import classes from './CheckoutItem.module.css'

export const CheckoutItem = ({title, quantity, price}) =>{
    return(
        <div className={classes.checkoutItemContainer}>
            <p>x{quantity}</p>
            <p className={classes.checkoutItemRight}>
                <span className={classes.checkoutItemTitle}>{title}</span>
                <span className={classes.checkoutItemPrice}>Precio: ${price}</span>
            </p>
        </div>
    )
}