import { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card";
import { CategoryContainer, Title } from "./category.styles.jsx";


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category]);

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </>
    );
};

export default Category;