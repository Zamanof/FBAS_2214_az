import React, {useState} from "react";
import ItemList from "../item-list";
import ApiService from "../../Services/api-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";

const PlanetPage = () => {
    const apiService = new ApiService()
    const [selectedPlanet, setSelectedPlanet] = useState(null)
    const onPlanetSelected = (id) => {
        setSelectedPlanet(id)
    }

    const itemList = (<ItemList
        onItemSelected={onPlanetSelected}
        getData={apiService.getAllPlanets}>
        {(i) => `${i.name}  (${i.rotationPeriod},   ${i.population})`}
    </ItemList>)
    const PlanetDetails = (<ItemDetails
        itemId={selectedPlanet}
        getData={apiService.getPlanet}
        getImageUrl={apiService.getPlanetImage}>
        <Record field="diameter" label="Diameter"/>
        <Record field="population" label="Population"/>
        <Record field="rotationPeriod" label="Period"/>
    </ItemDetails>)
    return (<Row left={itemList} right={PlanetDetails}/>)
};

export default {PlanetPage};
