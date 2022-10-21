import React from 'react'

function DogBar({allPups, currentDogId}) {
    console.log(allPups)

const dogNames = allPups.map(pup => <span key={pup.id} onClick={() => currentDogId(pup.id)}>{pup.name}</span>)

  return (
    <>
    {dogNames}
    </>
  )
}

export default DogBar
