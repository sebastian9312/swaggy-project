import "./shop.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];

                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </div>
    );


};

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

export default Shop;