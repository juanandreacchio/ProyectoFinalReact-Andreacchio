export const getProducts = (() =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    })
})

export const getProductsById =((productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500);
    })
})

export const getProductByCategory = ((categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500);
    })
})

