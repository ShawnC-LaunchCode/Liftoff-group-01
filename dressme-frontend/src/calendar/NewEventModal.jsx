import React, { useState } from "react";
import styles from './calendarStyles.module.css';

export const NewEventModal = ({ onSave, onClose}) => {

    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);

    return (
        <>
            <div id={styles.NewEventModal}>
                <h2>New Event</h2>

                <input 
                    className={error ? styles.error : ''} 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    id={styles.eventTitleInput} 
                    placeholder="Event Title" 
                />

                <h2>Dress Code</h2>

                <input
                    className={error ? styles.error : ''} 
                    value={code} 
                    onChange={e => setCode(e.target.value)} 
                    id={styles.dressCodeInput} 
                    placeholder="Dress Code"
                />

                <button 
                    onClick={() => {
                        if (title) {
                            setError(false);
                            onSave(title);
                        } else {
                            setError(true);
                        }
                    }} 
                    id={styles.saveButton}>Save</button>
                
                <button
                    onClick={onClose}
                    id={styles.cancelButton}>Cancel</button>
            </div>

            <div id={styles.modalBackDrop}></div>
        </>
    );
}