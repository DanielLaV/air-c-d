
function Pet({ pet, userId = null }) {

    const onEditClick = e => {
        e.preventDefault();

    }

    return (
        <div className="singlePet">
            <img src={pet.Images[0].url} />
            <p><span>{pet.name}</span></p>
            {userId && (
                <div className="profileButtons">
                    <button className="profileEditButton" onClick={onEditClick}>Edit</button>
                    {/* <button className="profileDeleteButton" onClick={onDeleteClick}>Delete</button> */}
                </div>
            )}
        </div>
    )
}

export default Pet;
