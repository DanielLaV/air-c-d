
function Pet({pet}) {
    return (
        <div className="singlePet">
            <img src={pet.Images[0].url} />
            <p><span>{pet.name}</span></p>
        </div>
    )
}

export default Pet;
