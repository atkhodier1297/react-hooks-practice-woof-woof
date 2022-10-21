import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {

  const [allPups, setAllPups] = useState([])
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
  fetch(`http://localhost:3001/pups`)
  .then(resp => resp.json())
  .then(data => {setAllPups(data)})
  //console.log(allPups)
  }, [])

const selectedPup = allPups.find(pup => pup.id === currentId)

console.log(selectedPup)

function changeDogStatus(updatedPup){
  const newPups = allPups.map(pup => {
     return pup.id === updatedPup.id ? updatedPup : pup
  })
  setAllPups(newPups)
}


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar currentDogId={setCurrentId} allPups = {allPups}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {selectedPup ? <DogInfo selectedPup={selectedPup} changeDogStatus={changeDogStatus} />: <h2>Please Select a Pup</h2>}
        </div>
      </div>
    </div>
  );
  }

export default App;
