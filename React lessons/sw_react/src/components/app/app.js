import React, {useState} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.css";
import ApiService from "../../Services/api-service";

const App = () => {
    const apiService = new ApiService()
    const[selectedPerson, setSelectedPerson] = useState(null)
    const onPersonSelected = (id)=>{
        setSelectedPerson(id)
    }
    return (
        <>
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {onPersonSelected}
                            getData={apiService.getAllPeople}
                            renderItem={({name, gender, birthYear})=>
                                `${name}  (${gender}, ${birthYear})`
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails  personId={selectedPerson}/>
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {onPersonSelected}
                            getData={apiService.getAllPlanets}
                            renderItem={({name, gender, birthYear})=>
                                `${name}  (${gender}, ${birthYear})`
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails  personId={selectedPerson}/>
                    </div>
                </div>
            </div>

</>
    );
}
export default App;