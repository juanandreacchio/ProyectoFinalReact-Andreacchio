import { useState,useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList'
import classes from './ItemListContainer.module.css'
import { getProductByCategory, getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';
import { SpinnerCircular } from 'spinners-react';




export const ItemListContainer = (props) =>{

    const [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId)
            .then(result => {
                setProductos(result)
            })
            .finally(() =>{
                setLoading(true);
            })
    }, [categoryId])
    

    const { mode } = useMode();

    return (
        <div className={mode === 'dark' && `${classes.itemListDm} ${classes.itemList}` || `${classes.itemList}`}>
            <h2 className={classes.greetingMsg}>{props.greeting}</h2>
            {loading ? <ItemList products={productos}/> : <SpinnerCircular size="20%" color='black' style={{width: '100%', margin: '0 auto', height: '200px', marginTop: '50px'}}/> }
        </div>
    )
}