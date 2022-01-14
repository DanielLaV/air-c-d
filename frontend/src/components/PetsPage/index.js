import './PetsPage.css';
import { useState, useEffect } from 'react';
import * as petActions from "../../store/pets";
import { useDispatch, useSelector } from 'react-redux';
import Pet from './Pet.js';

function PetsPage() {

    let pets = useSelector(state => state.pets);
    // const petsArr = Object.values(pets);
    const dispatch = useDispatch();
    // console.log('PETS IS ', pets)
    // console.log('PETSARR IS ', petsArr)

    const [petsType, setPetsType] = useState('dogs');

    const updatePetsType = e => {
        setPetsType(e.target.innerText.toLowerCase());
    }

    useEffect(() => {
        dispatch(petActions.getDogs());

    }, [dispatch]);

    useEffect(() => {
        setPetsType(petsType);
        if (petsType === 'dogs') {
            pets = dispatch(petActions.getDogs())
            // console.log('PETS28', pets)
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

            <div className='petImagesContainer'>
                {pets?.pets?.map(pet => <div key={pet.id}> <Pet pet={pet} /> </div>)}
                {/* {Array.isArray(petsArr) && petsArr[0]?.map(pet => <div key={pet.id}> <Pet pet={pet} /> </div>)} */}
            </div>
        </div>
    )
}

export default PetsPage;
