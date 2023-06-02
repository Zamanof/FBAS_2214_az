import React, {createContext} from "react";

const {
    Provider: ProductStoreServiceProvider,
    Consumer:ProductStoreServiceConsumer
} = createContext()

export {
    ProductStoreServiceProvider,
    ProductStoreServiceConsumer
}