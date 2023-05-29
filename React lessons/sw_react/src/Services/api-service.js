import {strict} from "assert";

class ApiService{
    _apiBase = 'https://swapi.py4e.com/api';
    _imageBase ='https://starwars-visualguide.com/assets/img/'
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }
     getAllPeople = async()=>{
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPeople);
    }
     getPerson = async(id)=>{
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPeople(person)
    }
     getAllPlanets=async()=>{
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
     getPlanet = async(id)=>{
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }
     getAllStarships = async()=>{
         console.log("starship")
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }
     getStarship = async(id)=>{
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship)
    }

    getPersonImage = ({id})=>{
        return `${this._imageBase}characters/${id}.jpg`
    }
    getPlanetImage = ({id})=>{
        return `${this._imageBase}planets/${id}.jpg`
    }
    getStarshipImage = ({id})=>{
        return `${this._imageBase}starships/${id}.jpg`
    }

    _transformPlanet = (planet) => {
        const id = this._extractId(planet);
        return {
            id,
            name: planet.name,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            population: planet.population
        }
    }

    _transformPeople = (people) => {
        const id = this._extractId(people);
        return {
            id,
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
            eyeColor: people.eye_color
        }
    }

    _transformStarship = (starship) => {
        const id = this._extractId(starship);

        return {
            id,
            name: starship.name,
            model: starship.model,
            length: starship.length,
            cost: starship.cost_in_credits
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }
}

export default ApiService;
