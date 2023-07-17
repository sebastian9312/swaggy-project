import SHOP_DATA from "../shop-data.js";

import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);


    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};



// useEffect(() => {
//     addCollectionAndDocuments("categories", SHOP_DATA)
// }, []);