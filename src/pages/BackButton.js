import React from "react";
import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const returnToUrl = "/";
    const handleButtonClick = () => {
        navigate(returnToUrl);
    };
    return (
    <button className={styles['back']} onClick={ handleButtonClick }>
        Back
    </button>
    )
}
export default BackButton;