
function Pet({pet}) {
    return (
        <div className="singlePet">
            <p>Pet list</p>
            <img src={pet.url} />
            <p><span>{pet.name}</span></p>
        </div>
    )
}

export default Pet;
