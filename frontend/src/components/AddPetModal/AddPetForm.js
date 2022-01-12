import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import * as petActions from '../../store/ownedPets';
import { useParams } from "react-router-dom";

function AddPetForm() {
    const dispatch = useDispatch();
    const userId = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('dog');
    const [forKids, setForKids] = useState(false);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = () => {
        e.preventDefault();
        setErrors([]);

        const newPet = {
            name,
            type,
            forKids,
            url
        }
        return dispatch(petActions.addOwnedPet({ userId, newPet })).catch(
            async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
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
                <select onChange={e => setType(e.target.value)}>
                    <option selected disabled>Select a type</option>
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
        </form>
    )
}

export default AddPetForm;
