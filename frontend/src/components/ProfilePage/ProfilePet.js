import { useState } from "react";
import './ProfilePage.css';
import EditPetFormModal from "../EditPetModal";
import * as petActions from '../../store/ownedPets';
import { useDispatch } from "react-redux";


function ProfilePet({ pet, userId = null }) {

    const dispatch = useDispatch();

    const [isEditingPet, setIsEditingPet] = useState(false);
    const editModal = (<EditPetFormModal pet={pet} setIsEditingPet={setIsEditingPet} isEditingPet={isEditingPet} />)




    const onDeleteClick = e => {
        e.preventDefault();

        dispatch(petActions.deletePet(pet));
    }

    return (
        <div className="singlePetContainer">

            <img className="petImage" src={pet?.Images[0]?.url} />
            <div className="belowPetContainer">
                <p className="petName">{pet.name}</p>
                {userId && (
                    <div className="petButtons">
                        <button className="petEditButton" onClick={() => setIsEditingPet(true)}>Edit</button>
                        {isEditingPet && editModal}
                        <button className="petDeleteButton" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePet;
