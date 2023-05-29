import React, {useState} from "react";
import ItemList from "../item-list";
import ApiService from "../../Services/api-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";

const StarshipPage = () => {
    const apiService = new ApiService()
    const [selectedStarship, setSelectedStarship] = useState(null)
    const onStarshipSelected = (id) => {
        setSelectedStarship(id)
    }

    const itemList = (<ItemList
        onItemSelected={onStarshipSelected}
        getData={apiService.getAllStarships}>
        {(i) => `${i.name}  (${i.model})`}
    </ItemList>)
    const StarshipDetails = (<ItemDetails
        itemId={selectedStarship}
        getData={apiService.getStarship}
        getImageUrl={apiService.getStarshipImage}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="cost" label="Cost"/>
    </ItemDetails>)
    return (<Row left={itemList} right={StarshipDetails}/>)
};

export default StarshipPage;
