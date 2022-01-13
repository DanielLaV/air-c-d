import './ProfilePage.css';
import { useState, useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import Pet from '../PetsPage/Pet';
import { useSelector, useDispatch } from 'react-redux';
import AddPetFormModal from '../AddPetModal';

function ProfilePage() {

    let pets = useSelector(state => state.ownedPets);
    const [ownedPets, setOwnedPets] = useState(pets);
    const [isAddingPet, setIsAddingPet] = useState(false);

    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const petModal = (<AddPetFormModal setIsAddingPet={setIsAddingPet} setOwnedPets={setOwnedPets} />)

    useEffect(() => {
        dispatch(ownedPetActions.getOwnedPets(userId));
    }, [dispatch]);


    return (
        <div className='profilePage'>
            <button className='addPetButton' onClick={isAddingPet => setIsAddingPet(!isAddingPet)}>Add Pet</button>
            {isAddingPet && petModal}
        {console.log('OWNED PETS', ownedPets)}
        {console.log('PETS', pets)}
            {/* <ul className='ownedPetsList'>
                {ownedPets?.map(pet => <li key={pet.id}> <Pet pet={pet} userId={userId} /> </li>)}
            </ul> */}
        </div>
    )



}

export default ProfilePage;
