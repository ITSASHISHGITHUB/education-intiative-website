// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const removeCart = (product) =>{
    return {
        type:"REMOVEITEM",
        payload:product
    }
}

// to delete item from cart

export const deleteItem=(product)=>{
    return {
        type:"DELETEITEM",
        payload:product
    }
}