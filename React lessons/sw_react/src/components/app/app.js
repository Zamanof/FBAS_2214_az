import React, {useState} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import "./app.css";
import ApiService from "../../Services/api-service";
import PeoplePage from "../people-page";
import Row from "../row";
import {Record} from "../item-details/item-details";
import PlanetPage from "../planet-page";
import StarshipPage from "../starship-page";

const App = () => {
    // const apiService = new ApiService()
    // const personDetails = <ItemDetails
    //     itemId={16}
    //     getData={apiService.getPerson}
    //     getImageUrl={apiService.getPersonImage}
    // >
    //     <Record field="gender" label="Gender"/>
    //     <Record field="birthYear" label="Birth Year"/>
    //     <Record field="eyeColor" label="Eye Color"/>
    // </ItemDetails>
    // const planetDetails = <ItemDetails
    //     itemId={6}
    //     getData={apiService.getPlanet}
    //     getImageUrl={apiService.getPlanetImage}
    // >
    //     <Record field="diameter" label="Diameter"/>
    //     <Record field="population" label="Population"/>
    //     <Record field="rotationPeriod" label="Period"/>
    // </ItemDetails>
    return (
        <>
            <div className="container">
                <Header />
                <RandomPlanet />
                <PeoplePage/>
                <PlanetPage/>
                <StarshipPage/>

            </div>

</>
    );
}
export default App;