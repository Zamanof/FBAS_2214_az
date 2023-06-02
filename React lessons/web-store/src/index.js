import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom"
import store from "./store";
import StoreService from "./services/store-service";
import {ProductStoreServiceProvider} from "./components/product-store-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
const productService = new StoreService()
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <ProductStoreServiceProvider value={productService}>
                    <Router>
                        <App/>
                    </Router>
                </ProductStoreServiceProvider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>
);

