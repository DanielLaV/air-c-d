import './ProfilePage.css';
import { useState, useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import Pet from '../PetsPage/Pet';
import { useSelector, useDispatch } from 'react-redux';
import AddPetFormModal from '../AddPetModal';

function ProfilePage() {

    const [ownedPets, setOwnedPets] = useState(useSelector(state => state.ownedPets));
    const [isAddingPet, setIsAddingPet] = useState(false);

    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const petModal = (<AddPetFormModal setIsAddingPet={setIsAddingPet} setOwnedPets={setOwnedPets} />)

    useEffect(() => {
        dispatch(ownedPetActions.getOwnedPets());
    }, [dispatch]);


    return (
        <div className='profilePage'>
            <button className='addPetButton' onClick={isAddingPet => setIsAddingPet(!isAddingPet)}>Add Pet</button>
            {isAddingPet && petModal}
            <ul className='ownedPetsList'>
                {ownedPets?.map(pet => <li key={pet.id}> <Pet pet={pet} userId={userId} /> </li>)}
            </ul>
        </div>
    )



}

export default ProfilePage;
