import React, {useState} from 'react'

function DogInfo({selectedPup, changeDogStatus}) {

    const [goodBad, setGoodBad] = useState(selectedPup.isGoodDog)

    const {id, image, isGoodDog, name} = selectedPup
    
    function toggleDog(){
      setGoodBad((goodBad) =>!goodBad)
      fetch(`http://localhost:3001/pups/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({isGoodDog: !isGoodDog})
    })
    .then(resp => resp.json())
    .then (data => changeDogStatus(data))
  }

    const status = goodBad ? "Good Dog" : "Bad Dog"
  return (
    <>
    <img src={image} alt={name}/>
    <h2>{name}</h2>
    <button onClick={toggleDog}>{status}</button>
    </>
  )
}

export default DogInfo