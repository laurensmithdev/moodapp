// src/app/dashboard/MoodModals.tsx
import React from "react";
import './MoodModal.css';

type MoodModalProps = {
    mood: string;
    onClose: () => void;
    info: string;
};

const MoodModal: React.FC<MoodModalProps> = ({ mood, onClose, info }) => {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={onClose}>X</button>
                <h2>{mood} Information</h2>
                <div>{info}</div>
            </div>
        </div>
    );
};

export default MoodModal;
