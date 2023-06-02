const productsLoaded = (newProduct)=>{
    return{
        type: "PRODUCTS_LOADED",
        payload: newProduct
    };
}

export {
    productsLoaded
}