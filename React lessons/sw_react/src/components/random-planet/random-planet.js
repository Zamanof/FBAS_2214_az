import React, {useEffect, useState} from "react";
import "./random-planet.css";
import ApiService from "../../Services/api-service"
import Spinner from "../spinner";

const RandomPlanet = () => {
    const apiService = new ApiService()
    const [planet, setPlanet] = useState({
        id: null,
        name:null,
        population:null,
        rotationPeriod:null,
        diameter:null
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)

    const onPlanetLoaded=(planet)=>{
        setPlanet(planet);
        setLoading(false)
    }

    const updatePlanet = ()=>{
        let id = Math.floor(Math.random()*17+2)
        apiService.getPlanet(id)
            .then(onPlanetLoaded)
    }
    useEffect(()=>{
        updatePlanet()
        const interval = setInterval(updatePlanet, 5000)
        return ()=> clearInterval(interval)
    }, [])
    const spinner = loading ? <Spinner/>:null
    const content = !loading ? <PlanetView planet={planet}/>:<PlanetView planet={planet}/>
    return (
        <div className="random-planet bg-dark rounded">
            {/*{spinner}*/}
            {content}

        </div>
      );}
export default RandomPlanet;

const PlanetView = ({planet})=>{
            const{id, ...other} = planet
    return(
        <>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="planet images"/>
            <div>
                <h4>{planet.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
