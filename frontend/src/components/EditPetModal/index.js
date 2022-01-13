import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPetForm from './EditPetForm';

function EditPetFormModal({pet}) {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPetForm pet={pet}/>
                </Modal>
            )}
        </>
    )
}

export default EditPetFormModal;
