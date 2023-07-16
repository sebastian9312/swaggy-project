import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    //

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    //

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const deleteItemFromCart = (productTodelete) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => {
                return item.id !== productTodelete.id
            })
        })
    }

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

    const addItemToCart = (productToAdd) => {
        setCartItems((prevItems) => {
            const isProductExists = prevItems.find(item => item.id === productToAdd.id);
            if (isProductExists) {
                return prevItems.map((item) => {
                    if (item.id === productToAdd.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    };
                    return item;
                });
            };
            return [...prevItems, { ...productToAdd, quantity: 1 }];
        });
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, deleteItemFromCart, removeItemFromCart, totalPrice };

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