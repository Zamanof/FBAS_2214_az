import React, {useEffect, useState} from "react";

import "./item-details.css";
import ApiService from "../../Services/api-service";

const Record = ({item, field, label})=>{
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
}

export{
    Record
}

const ItemDetails = ({itemId, getData, getImageUrl, children}) => {
    const apiService = new ApiService()
    const [item, setItem] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(()=>{
        updateItem()
        console.log(itemId)
    }, [itemId])

    const updateItem = ()=>{
        if(!itemId) return
            getData(itemId)
            .then((item)=>{
                setItem(item)
                setImage(getImageUrl(item))
            })
    }

    if (!item){
        return <span>Select a item from a list</span>
    }
    return (
        <div className="item-details card">
          <img className="item-image"
            src={image} />
  
          <div className="card-body">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child)=>{
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
          </div>
        </div>
      )
    }
export default ItemDetails;