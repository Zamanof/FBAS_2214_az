import React from "react";

import "./app.css";
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";
import ProductListItem from "../product-list-item";

const App = () => {
    return (
        <>
            <ShopHeader
                numItems={25}
                total={10}/>
            <ProductListItem/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/card' element={<CardPage/>}/>
            </Routes>

        </>
    );
}

export default App;
    