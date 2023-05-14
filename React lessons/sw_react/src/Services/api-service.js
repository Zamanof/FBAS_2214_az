class ApiService{
    _apiBase = 'https://swapi.dev/api';
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }
    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`);
    }
    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    }
    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getStarship(id){
        return this.getResource(`/starships/${id}/`);
    }
}

const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  };
  
  getResource('https://swapi.dev/api/people/1/')
    .then((body) => {
      console.log(body);
    })
  
  // fetch('https://swapi.dev/api/people/1/')
  // .then(result=>result.json())
  // .then(data=>console.log(data))
  