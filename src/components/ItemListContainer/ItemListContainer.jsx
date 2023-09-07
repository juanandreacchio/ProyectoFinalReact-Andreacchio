import { useState,useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList'
import classes from './ItemListContainer.module.css'
import { getProductByCategory, getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';


export const ItemListContainer = (props) =>{

    const [productos,setProductos] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId)
            .then(result => setProductos(result))
        
    }, [categoryId])
    

    return (
        <div>
            <h2 className={classes.greetingMsg}>{props.greeting}</h2>
            <ItemList products={productos}/>
        </div>
    )
}