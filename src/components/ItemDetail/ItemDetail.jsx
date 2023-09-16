import { ItemCount } from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext";
import { useMode } from "../../context/ModeContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({
    id,
    category,
    price,
    title,
    img,
    description,
    stock,
}) => {
    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            title,
            price,
            quantity,
            img
        };
        addItem(objProductToAdd);
        setQuantityAdded(quantity)
        console.log(`Agregaste ${quantity} productos`);
    };

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useCart();

    const { mode } = useMode();

    return (
        <div
            className={
                mode === "light"
                    ? `${classes.detailContainer}`
                    : `${classes.detailContainer} ${classes.detailDM}`
            }
        >
            <div className={classes.detailContainerTop}>
                <picture className={classes.detailLeft}>
                    <img src={img} alt={title} />
                </picture>
                <div className={classes.detailRight}>
                    <div>
                        <h1 className={classes.detailTitle}>{title}</h1>
                        <p className={classes.detailCategory}>Categoría: {category}</p>

                    </div>
                    <div>
                        <p className={classes.detailPrice}>${price}</p>
                        {stock ? (
                                quantityAdded === 0 ?
                                (
                                    <ItemCount
                                    stock={stock}
                                    initial={1}
                                    onAdd={(quantity) => handleOnAdd(quantity)}
                                />
                                ) : (
                                    < Link to='/cart' className={classes.finalizarCompraBtn}>Finalizar compra</Link>
                                )
                        ) : (
                            <p className={classes.noStockText}>Producto sin stock online</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.detailContainerBottom}>
                <div>
                <button className={classes.descriptionTitle}>Descripción</button>
                </div>
            <p className={classes.detailDescription}>{description}</p>
            </div>
        </div>
    );
};
