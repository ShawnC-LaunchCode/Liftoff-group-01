import React from "react";
import styles from './calendarStyles.module.css';

export const DeleteEventModal = ({ onDelete, eventText, dressCodeText, onClose }) => {
    return (
        <>
            <div id={styles.DeleteEventModal}>
                <h2>Event</h2>

                <p id={styles.eventText}>{eventText}</p>
                <p id={styles.dressCodeText}>{dressCodeText}</p>

                <button onClick={onDelete} id={styles.deleteButton}>Delete</button>
                <button onClick={onClose} id={styles.closeButton}>Close</button>
            </div>

            <div id={styles.modalBackDrop}></div>
        </>
    );
}