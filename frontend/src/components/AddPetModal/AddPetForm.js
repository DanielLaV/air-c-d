import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import * as petActions from '../../store/ownedPets';
import './AddPetForm.css';


function AddPetForm({setShowModal}) {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user.id);
    const [name, setName] = useState('');
    const [type, setType] = useState('dog');
    const [forKids, setForKids] = useState(false);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newPet = {
            userId,
            name,
            type,
            forKids,
            url
        }
        dispatch(petActions.addNewPet(newPet));
        setShowModal(false);
    };


    return (
        <div className="addPet">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className="name">
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder="Name"
                    />
                </label>
                <label className="imageUrl">
                    Image URL
                    <input
                        type="text"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        required
                        placeholder="www.cutestdogever.edu"
                    />
                </label>
                <label className="petType">
                    Pet type
                    <select required defaultValue="select" onChange={e => setType(e.target.value)}>
                        <option value='select' disabled>Select a type</option>
                        <option value='dog'>Dog</option>
                        <option value='cat'>Cat</option>
                        <option value='other'>All others</option>
                    </select>
                </label>
                <label className="kidFriendly">
                    Kid Friendly?
                    <input
                        type='checkbox'
                        name='forKids'
                        onChange={() => setForKids(!forKids)}
                        checked={forKids}
                    />
                </label>
                <button className="newPetClick">Add New Pet</button>
            </form>
        </div>
    )
}

export default AddPetForm;
