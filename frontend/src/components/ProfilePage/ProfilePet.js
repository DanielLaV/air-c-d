import { useState } from "react";
import './ProfilePage.css';
import EditPetFormModal from "../EditPetModal";
// import { useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import * as petActions from '../../store/ownedPets';
import { useDispatch } from "react-redux";


function ProfilePet({ pet, userId = null }) {
    // const userId = useSelector(state => state.session?.user?.id);
    const userPage = useParams().userId;
    const dispatch = useDispatch();


    const [showModal, setShowModal] = useState(false);
    const editModal = (<EditPetFormModal pet={pet} />)


// console.log('PET IS', pet)

    const onDeleteClick = e => {
        e.preventDefault();

        dispatch(petActions.deletePet(pet));

    }

    return (
        <div className="singlePetContainer">

            <img className="petImage" src={pet.Images[0]?.url} />
            <div className="belowPetContainer">
            <p className="petName">{pet.name}</p>
            {userId && (
                <div className="petButtons">
                    <button className="petEditButton" onClick={() => setShowModal(true)}>Edit</button>
                    {(+userId === +userPage) && showModal && editModal}
                    <button className="petDeleteButton" onClick={onDeleteClick}>Delete</button>
                </div>
            )}
            </div>
        </div>
    )
}

export default ProfilePet;
