import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPetForm from './AddPetForm';

function AddPetFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addPetButton' onClick={() => setShowModal(true) }>Add new pet</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddPetForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddPetFormModal;
