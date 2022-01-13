import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPetForm from './EditPetForm';

function EditPetFormModal() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <button className='editPetButton' onClick={() => setShowModal(true) }>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPetForm />
                </Modal>
            )}
        </>
    )
}

export default EditPetFormModal;
