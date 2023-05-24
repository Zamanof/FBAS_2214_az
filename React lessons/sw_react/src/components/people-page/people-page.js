import React, {useState} from "react";
import ItemList from "../item-list";
import PersonDetails from "../item-details";
import ApiService from "../../Services/api-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";

const PeoplePage = () => {
    const apiService = new ApiService()
    const [selectedPerson, setSelectedPerson] = useState(null)
    const onPersonSelected = (id) => {
        setSelectedPerson(id)
    }

    const itemList = (<ItemList
        onItemSelected={onPersonSelected}
        getData={apiService.getAllPeople}>
        {(i) => `${i.name}  (${i.birthYear},  ${i.gender})`}
    </ItemList>)
    const personDetails = (<ItemDetails
        itemId={selectedPerson}
        getData={apiService.getPerson}
        getImageUrl={apiService.getPersonImage}>
        <Record field="gender" label="Gender"/>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>)
    return (<Row left={itemList} right={personDetails}/>)
};

export default PeoplePage;
