import './PetsPage.css';
import { useState, useEffect } from 'react';
import * as petActions from "../../store/pets";
import { useDispatch, useSelector } from 'react-redux';
import Pet from './Pet.js';

function PetsPage() {

    let pets = useSelector(state => state.pets);
    const dispatch = useDispatch();

    const [petsType, setPetsType] = useState('dogs');

    const updatePetsType = e => {
        setPetsType(e.target.innerText.toLowerCase());
    }

    useEffect(() => {
        // console.log('PETS IS ', pets)
        dispatch(petActions.getDogs());

    }, [dispatch]);

    useEffect(() => {
        setPetsType(petsType);
        if (petsType === 'dogs') {
            pets = dispatch(petActions.getDogs())
            console.log('PETS28', pets)
        }
        if (petsType === 'cats') {
            pets = dispatch(petActions.getCats())
        }
        if (petsType === 'others') {
            pets = dispatch(petActions.getOthers())
        }
    }, [petsType, dispatch]);

    return (
        <div className='petsPage'>
            <ul className='petTypeLinks'>
                <li><button onClick={updatePetsType}>Dogs</button></li>
                <li><button onClick={updatePetsType}>Cats</button></li>
                <li><button onClick={updatePetsType}>Others</button></li>
            </ul>

            <ul className='petImages'>
                {pets?.pets?.map(pet => <li key={pet.id}> <Pet pet={pet} /> </li>)}
            </ul>
        </div>
    )
}

export default PetsPage;
