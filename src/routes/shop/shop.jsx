import "./shop.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
        </Routes>
    );
};

export default Shop;





//     return (
//         <>
//             {
//                 Object.keys(categoriesMap).map((title) => {

//                     // console.log(title);
//                     // console.log(categoriesMap[title]);

//                     return (
//                         <div key={title}>
//                             <h2>{title}</h2>
//                             <div className="products-container">
//                                 {
//                                     categoriesMap[title].map((product) => {
//                                         return <ProductCard key={product.id} product={product} />
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     );
//                 })
//             };
//         </>
//     );
// };

