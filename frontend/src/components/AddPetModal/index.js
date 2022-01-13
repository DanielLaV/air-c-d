import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPetForm from './AddPetForm';

function AddPetFormModal() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {/* <button className='addPetButton' onClick={() => setShowModal(true) }>Add new pet</button> */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddPetForm />
                </Modal>
            )}
        </>
    )
}

export default AddPetFormModal;
