import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
// import * as petActions from '../../store/ownedPets';
import * as ownedPetActions from '../../store/ownedPets';
import { useHistory } from 'react-router-dom';
import "./EditPetForm.css";


function EditPetForm({ pet, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('EDIT PET IS ', pet);

    const userId = useSelector(state => state.session.user.id);
    const [name, setName] = useState(pet.name);
    const [type, setType] = useState(pet.type);
    const [forKids, setForKids] = useState(pet.forKids);
    const [url, setUrl] = useState(pet.Images[0].url);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const editedPet = {
            petId: pet.id,
            userId,
            name,
            type,
            forKids,
            url
        }
        dispatch(ownedPetActions.editPet(editedPet))
        setShowModal(false);
        // history.go(0);
    };


    return (
        <div className="editPet">
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
                    <select required defaultValue={type} onChange={e => setType(e.target.value)}>
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
                <button className="editClick">Edit Pet</button>
            </form>
        </div>
    )
}

export default EditPetForm;
