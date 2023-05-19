class ApiService {
    _apiBase = "https://swapi.dev/api"
    async getResources(url){
        const responce = await fetch(`${this._apiBase}${url}`)
        if (!responce.ok){
            throw new Error(`Could not fetch ${url}, recived ${responce.status}`)
        }
        return await responce.json()
    }

    async getPeople(){
        const responce = await this.getResources(`/people/`)
        return responce.results
    }
    getPerson(id){
        return this.getResources(`/people/${id}/`).result

    }

    async getAllPlanets(){
        const responce = await this.getResources(`/planets/`)
        return responce.results
    }
    async getPlanet(id){
        const planet = await this.getResources(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    async getAllStarships(){
        const responce = await this.getResources(`/starships/`)
        return responce.results
    }
    getStarship(id){
        return this.getResources(`/starships/${id}/`)

    }

    _transformPlanet(planet){
        const id = this._extractId(planet)
        return{
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _extractId(item){
        const idRegExp =/\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

}

export default ApiService;


// fetch("https://www.swapi.tech/api/people/1/")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data.result.properties.name)})