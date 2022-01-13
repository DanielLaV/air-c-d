import { useState } from "react";
import EditPetFormModal from "../EditPetModal";
import { useSelector } from 'react-redux';

function ProfilePet({ pet, userId = null }) {
    const userId = useSelector(state => state.session?.user?.id);

    const [isEditingPet, setIsEditingPet] = useState(false);
    const editModal = (<EditPetFormModal pet={pet} />)

    // const onEditClick = e => {
    //     e.preventDefault();

    // }

    const onDeleteClick = e => {
        e.preventDefault();


    }

    return (
        <div className="singlePet">
            <img src={pet.Pets[0].Images[0].url} />
            <p><span>{pet.Pets[0].name}</span></p>
            {userId && (
                <div className="profileButtons">
                    <button className="profileEditButton" onClick={() => setIsEditingPet(true)}>Edit</button>
                    {}
                    <button className="profileDeleteButton" onClick={onDeleteClick}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProfilePet;
