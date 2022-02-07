import './ProfilePage.css';
import { useEffect } from 'react';
import * as ownedPetActions from '../../store/ownedPets';
import ProfilePet from './ProfilePet';
import { useSelector, useDispatch } from 'react-redux';
import AddPetFormModal from '../AddPetModal';
import { useParams, Redirect } from 'react-router-dom';

function ProfilePage() {

    const dispatch = useDispatch();
    const userPage = useParams().userId;

    let ownedPetsObject = useSelector(state => ({ ...state.ownedPets }));
    let ownedPets = Object.values(ownedPetsObject);

    useEffect(() => {
        dispatch(ownedPetActions.getOwnedPets(userId));
    }, [dispatch]);

    const userId = useSelector(state => state.session?.user?.id || null);

    if (userId && +userId !== +userPage) return (<Redirect to="/pets" />)


    return (
        <div className='profilePage'>
            {(+userId === +userPage) && <AddPetFormModal />}
            <div className='ownedPetsContainer'>
                {Array.isArray(ownedPets) && ownedPets?.map(pet => (<div className='ownedPetsImage' key={pet.id}> <ProfilePet pet={pet} userId={userId} /> </div>))}
            </div>
        </div>
    )



}

export default ProfilePage;
