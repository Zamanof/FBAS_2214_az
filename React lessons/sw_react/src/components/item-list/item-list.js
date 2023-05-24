import React, {useState, useEffect} from "react";

import "./item-list.css";
import Spinner from "../spinner";

const ItemList = ({onItemSelected, getData, children}) => {
    const [itemList, setItemList] = useState(null)
    useEffect(()=>{
            getData()
            .then((itemList)=>{
                setItemList(itemList)
            })
    }, [])

    const renderItems = (items)=>{
        return items.map((item)=>{
            const{id} = item;
            const label = children(item)
            return(
                <li className="list-group-item"
                    key={id} onClick={
                    ()=>{
                    onItemSelected(id)
                    }
                }>
                    {label}
                </li>
            )
        })
    }
    if(!itemList){
        return <Spinner/>
    }
    const items = renderItems(itemList)
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}
export default ItemList;