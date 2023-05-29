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

import {BrowserRouter as Router, Route, Routes, Outlet, Link, useParams} from "react-router-dom";

const ViewElementById = ()=>{
    const[name, setName] = useState()
    const apiService = new ApiService()
    const {id} = useParams()
    apiService.getPlanet(id).then((data)=> {
        setName(data.name)
    })
    return <h1>{name} - {id}</h1>
}

const Layout = ()=>{
    return(
        <>
            <Header />
            <RandomPlanet />
            <Outlet/>
        </>
    )
}
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
            <Router>
                <div className="container">
                    <Link to="/starships/1">1</Link>
                    <br/>
                    <Link to="/starships/2">2</Link>
                    <br/>
                    <Link to="/starships/3">3</Link>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/" element={<h1>Welcome to Star Wars</h1>}/>
                            <Route path="/people" element={<PeoplePage/>}/>
                            <Route path="/planets" element={<PlanetPage/>}/>
                            <Route path="/starships" element={<StarshipPage/>}/>
                            <Route path="/starships/:id" element={<ViewElementById/>}/>
                        </Route>

                    </Routes>
                </div>
            </Router>
</>
    );
}
export default App;