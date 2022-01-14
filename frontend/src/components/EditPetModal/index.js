import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPetForm from './EditPetForm';

function EditPetFormModal({pet, setIsEditingPet, isEditingPet}) {
    // const [showModal, setShowModal] = useState(true);
    const handleClose = () => {
        setIsEditingPet(false);
    }
    return (
        <>
            {isEditingPet && (
                <Modal onClose={handleClose}>
                    <EditPetForm pet={pet} setShowModal={setIsEditingPet} />
                </Modal>
            )}
        </>
    )
}

export default EditPetFormModal;
