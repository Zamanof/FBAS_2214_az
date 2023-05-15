class ApiService {
    _apiBase = "https://swapi.py4e.com/api"
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
    getPlanet(id){
        return this.getResources(`/planets/${id}/`)

    }

    async getAllStarships(){
        const responce = await this.getResources(`/starships/`)
        return responce.results
    }
    getStarship(id){
        return this.getResources(`/starships/${id}/`)

    }
}

export default ApiService;


// fetch("https://www.swapi.tech/api/people/1/")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data.result.properties.name)})