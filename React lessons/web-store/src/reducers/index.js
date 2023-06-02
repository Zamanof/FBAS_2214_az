const initialState={
    products: [],
    loading: true
}
const reducer = (state=initialState, action)=>{
    switch (action.type){
        case "PRODUCTS_LOADED":
            return{
                products: action.payload,
                loading: false
            };
        default:
            return state

    }
}
export default reducer