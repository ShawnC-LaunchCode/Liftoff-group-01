import React from "react";
import styles from './calendarStyles.module.css';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
    return(
        <div id={styles.header}>
            <div id="monthDisplay">{dateDisplay}</div>
            <div>
                <button onClick={onBack} id="backButton">Back</button>
                <button onClick={onNext} id="nextButton">Next</button>
            </div>
        </div>);
}