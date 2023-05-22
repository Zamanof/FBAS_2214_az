import React, {useEffect, useState} from "react";

import "./person-details.css";
import ApiService from "../../Services/api-service";

const PersonDetails = ({personId}) => {
    const apiService = new ApiService()
    const [person, setPerson] = useState(null)

    useEffect(()=>{
        updatePerson()
    }, [personId])

    const updatePerson = ()=>{
        if(!personId) return
        apiService.getPerson(personId)
            .then((person)=>{
                setPerson(person)
            })
    }

    if (!person){
        return <span>Select a person from a list</span>
    }
    return (
        <div className="person-details card">
          <img className="person-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} />
  
          <div className="card-body">
            <h4>{person.name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{person.gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{person.birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{person.eyeColor}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
export default PersonDetails;