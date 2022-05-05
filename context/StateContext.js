import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'


const Context = createContext()

export const StateContext = ({ children }) => {
    const [showBasket, setShowBasket] = useState(false);
    const [basketItems, setBasketItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInBasket = 
            basketItems.find((item) => item._id === product._id)

            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if(checkProductInBasket) {
            const updatedBasketItems = basketItems.map((basketProduct) => {
                if(basketProduct._id === product._id) return {
                    ...basketProduct,
                    quantity: basketProduct.quantity + quantity
                }
            })
            setBasketItems(updatedBasketItems);
            
        }  else {
            product.quantity = quantity

            setBasketItems([...basketItems, {...product}])
        }

        toast.success(`${qty} ${product.name} added to the Basket`)
    }

    const onRemove = (product) => {
        foundProduct = basketItems.find((item) => item._id === product._id)
        const newBasketItems = basketItems.filter((item) => item._id !== product._id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setBasketItems(newBasketItems)
    }

    const toggleBasketItemQuantity = (id, value) => {
        foundProduct = basketItems.find((item) => item._id === id)
        index = basketItems.findIndex((product) => product._id === id)
        const newBasketItems = basketItems.filter((item) => item._id !== id)

        if(value === 'inc') {
            setBasketItems([...newBasketItems, { ...foundProduct, quantity: foundProduct.quantity + 1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec'){
            if (foundProduct.quantity > 1){
                setBasketItems([...newBasketItems, { ...foundProduct, quantity: foundProduct.quantity - 1}])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1 ) return 1;

            return prevQty - 1
        })
    }

    return (
        <Context.Provider
            value={{
                showBasket,
                setShowBasket,
                basketItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleBasketItemQuantity,
                onRemove,
            }}>
                { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)