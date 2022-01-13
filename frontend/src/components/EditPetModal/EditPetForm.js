import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import * as petActions from '../../store/ownedPets';
// import * as ownedPetActions from '../../store/ownedPets';
import { useHistory } from 'react-router-dom';


function EditPetForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [forKids, setForKids] = useState(false);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const editedPet = {
            userId,
            name,
            type,
            forKids,
            url
        }
        dispatch(petActions.editOwnedPet(editedPet))
        history.go(0);
    };


    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder="Name"
                />
            </label>
            <label>
                Picture URL
                <input
                    type="text"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    required
                    placeholder="www.cutestdogever.edu"
                />
            </label>
            <label>
                Pet type
                <select required defaultValue="select" onChange={e => setType(e.target.value)}>
                    <option value='select' disabled>Select a type</option>
                    <option value='dog'>Dog</option>
                    <option value='cat'>Cat</option>
                    <option value='other'>All others</option>
                </select>
            </label>
            <label>
                Kid Friendly?
                <input
                    type='checkbox'
                    name='forKids'
                    onChange={() => setForKids(!forKids)}
                    checked={forKids}
                />
            </label>
            <button>Add New Pet</button>
        </form>
    )
}

export default EditPetForm;
