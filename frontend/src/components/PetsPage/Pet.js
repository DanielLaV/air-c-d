import './PetsPage.css';

function Pet({ pet, userId = null }) {

console.log('inner pet', pet)
    return (
        <div className="singlePet">
            <img className="petImage" src={pet.Images[0].url} />
            <p><span className="petName">{pet.name}</span></p>
        </div>
    )
}

export default Pet;
