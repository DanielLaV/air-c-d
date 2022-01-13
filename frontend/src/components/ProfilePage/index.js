import './ProfilePage.css';
import { useState, useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import ProfilePet from './ProfilePet';
import { useSelector, useDispatch } from 'react-redux';
import AddPetFormModal from '../AddPetModal';
import { useParams } from 'react-router-dom';

function ProfilePage() {

    const dispatch = useDispatch();
    const userPage = useParams().userId;
    console.log('userPage', userPage);

    useEffect(() => {
        console.log('userid', userId)
        dispatch(ownedPetActions.getOwnedPets(userId));
    }, [dispatch]);


    let pets = useSelector(state => state.ownedPets);
    // console.log('pets from line 11', pets);
    const [ownedPets, setOwnedPets] = useState(pets);
    const [isAddingPet, setIsAddingPet] = useState(false);

    const userId = useSelector(state => state.session?.user?.id);
    const petModal = (<AddPetFormModal setIsAddingPet={setIsAddingPet} setOwnedPets={setOwnedPets} />)


    useEffect(() => {
        // console.log('ownedpets', ownedPets)
        setOwnedPets(pets);
    }, [pets])


    return (
        <div className='profilePage'>
            <button className='addPetButton' onClick={isAddingPet => setIsAddingPet(true)}>Add Pet</button>
            {(+userId === +userPage) && isAddingPet && petModal}
            <div className='ownedPetsContainer'>
                {Array.isArray(ownedPets) && ownedPets?.map(pet => (<div className='ownedPetsImage' key={pet.id}> <ProfilePet pet={pet} userId={userId} /> </div>))}
            </div>
        </div>
    )



}

export default ProfilePage;
