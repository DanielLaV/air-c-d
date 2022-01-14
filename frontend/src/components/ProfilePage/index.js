import './ProfilePage.css';
import { useState, useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import ProfilePet from './ProfilePet';
import { useSelector, useDispatch } from 'react-redux';
import AddPetFormModal from '../AddPetModal';
import { useParams, Redirect } from 'react-router-dom';

function ProfilePage() {

    const dispatch = useDispatch();
    const userPage = useParams().userId;
    // console.log('userPage', userPage);

    let ownedPetsObject = useSelector(state => ({ ...state.ownedPets }));
    let ownedPets = Object.values(ownedPetsObject);

    useEffect(() => {
        // console.log('userid', userId)
        dispatch(ownedPetActions.getOwnedPets(userId));
    }, [dispatch]);


    // console.log('pets from line 11', pets);
    // const [ownedPets, setOwnedPets] = useState(pets);
    // const [isAddingPet, setIsAddingPet] = useState(false);

    const userId = useSelector(state => state.session?.user?.id || null);
    // const petModal = (<AddPetFormModal setIsAddingPet={setIsAddingPet} setOwnedPets={setOwnedPets} />)

    if (userId && +userId !== +userPage) return (<Redirect to="/pets" />)
    // useEffect(() => {
    //     // console.log('ownedpets', ownedPets)
    //     setOwnedPets(pets);
    // }, [pets])


    return (
        <div className='profilePage'>
            {/* <button className='addPetButton' onClick={isAddingPet => setIsAddingPet(true)}>Add Pet</button> */}
            {(+userId === +userPage) && <AddPetFormModal />}
            <div className='ownedPetsContainer'>
                {/* {console.log('ownedpetsObj', ownedPetsObject)}
                {console.log('ownedpets', ownedPets)} */}
                {Array.isArray(ownedPets) && ownedPets?.map(pet => (<div className='ownedPetsImage' key={pet.id}> <ProfilePet pet={pet} userId={userId} /> </div>))}
            </div>
        </div>
    )



}

export default ProfilePage;
