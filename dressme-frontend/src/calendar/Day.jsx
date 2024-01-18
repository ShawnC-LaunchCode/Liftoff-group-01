import React from "react";
import styles from './calendarStyles.module.css';

export const Day = ({ day, onClick }) => {
    const className = `day ${day.value === 'padding' ? styles.padding : ''} ${day.isCurrentDay ? styles.currentDay : ''}`;
    return (
        <div onClick={onClick} className={className} id={styles.day}>
            {day.value === 'padding' ? '' : day.value}

            {day.event && <div className={styles.event}>{day.event.title}</div>}
        </div>);
}