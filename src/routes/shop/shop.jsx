<<<<<<< HEAD
import "./shop.styles.scss";

=======
// import { CategoriesContext } from "../../contexts/categories.context";
// import { useContext } from "react";
>>>>>>> bd7f023 (refactor styles)
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;

