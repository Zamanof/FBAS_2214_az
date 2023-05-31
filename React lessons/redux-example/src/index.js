import React from "react";
import ReactDOM from "react-dom/client"
import {createStore, bindActionCreators} from "redux"
import reducer from "./reducer";
import * as actions from "./actions"
import Counter from "./counter";
import {Provider} from "react-redux";
import "./index.css"
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById('root'));
// pure function
const store = createStore(reducer);

root.render(
        <React.StrictMode>
            {/*<Counter*/}
            {/*    counter={store.getState()}*/}
            {/*    inc={inc}*/}
            {/*    dec={dec}*/}
            {/*    rnd={()=>{*/}
            {/*        const value = Math.floor(Math.random()*10 + 1)*/}
            {/*        rnd(value)*/}
            {/*    }}*/}
            {/*/>*/}
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
)




