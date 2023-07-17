import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,

    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const [cartTotal, setCartTotal] = useState(0);

    //

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

        setCartTotal(newCartTotal);
    }, [cartItems]);

    //

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => {
                return item.id !== cartItemToClear.id
            });
        });
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems((prevItems) => {
            const isCardItemExists = prevItems.find((item) => item.id === cartItemToRemove.id);
            if (isCardItemExists.quantity === 1) {
                return prevItems.filter((item) => item.id !== cartItemToRemove.id);
            };
            return prevItems.map((item) => {
                if (item.id === cartItemToRemove.id) {
                    return { ...item, quantity: item.quantity - 1 }
                };
                return item;
            });
        });
    };

    const addItemToCart = (cartItemToAdd) => {
        setCartItems((prevItems) => {
            const isProductExists = prevItems.find(item => item.id === cartItemToAdd.id);
            if (isProductExists) {
                return prevItems.map((item) => {
                    if (item.id === cartItemToAdd.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    };
                    return item;
                });
            };
            return [...prevItems, { ...cartItemToAdd, quantity: 1 }];
        });
    };

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        cartCount, 
        clearItemFromCart, 
        removeItemFromCart, 
        cartTotal 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};


    // const addItemToCart = (productToAdd) => {
    //     setCartItems(addCartItem(cartItems, productToAdd));
    // };
    
// const addCartItem = (cartItems, productToAdd) => {
//     const isProductExists = cartItems.find(item => item.id === productToAdd.id);

//     if (isProductExists) {
//         return cartItems.map((item) => {
//             if (item.id === productToAdd.id) {
//                 return { ...item, quantity: item.quantity + 1 }
//             };
//             return item;
//         });
//     };
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
// };
































// import { createContext, useState } from "react";


// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => { },
//     cartItems: [],
//     addItemToCart: () => { }
// });

// const addCartItem = (cartItems, productToAdd) => {
//     const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

//     if (existingCartItem) {
//         return cartItems.map((item) => {
//             if (item.id === productToAdd.id) {
//                 return { ...item, quantity: item.quantity + 1 };
//             } else {
//                 return item;
//             };
//         });
//     } else {
//         return [...cartItems, { ...productToAdd, quantity: 1 }];
//     };
// };

// export const CartProvider = ({ children }) => {
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [cartItems, setCartItems] = useState([]);

//     const addItemToCart = (productToAdd) => {
//         setCartItems(addCartItem(cartItems, productToAdd));
//     };

//     const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

//     return (
//         <CartContext.Provider value={value}>
//             {children}
//         </CartContext.Provider>
//     );
// };
// 














// const addCartItem = (cartItems, productToAdd) => {
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

//     if (existingCartItem) {
//         return cartItems.map((cartItem) => {
//             cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         }
//         )
//     };

//     return [...cartItems, { ...productToAdd, quantity: 1 }];
// };