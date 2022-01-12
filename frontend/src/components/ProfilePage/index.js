import './ProfilePage.css';
import { useState, useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import Pet from '../PetsPage/Pet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProfilePage() {

    const[ownedPets, setOwnedPets] = useState(useSelector(state => state.ownedPets));
    const userId = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ownedPetActions.getOwnedPets());
    }, [dispatch]);


    const addPet = userId => {

    }

    return (
        <div className='profilePage'>
            <button className='addPetButton' onClick={addPet}>Add Pet</button>
            <ul className='ownedPetsList'>
                {ownedPets?.map(pet => <li key={pet.id}> <Pet pet={pet} userId={userId} /> </li>)}
            </ul>
        </div>
    )



}

export default ProfilePage;
