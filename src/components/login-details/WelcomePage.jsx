
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import smallLogo from '../../images/smallLogo.png';


const WelcomePage = ({ userName = "Karthik" }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {

    navigate('/admin'); // or whatever your HomePage route is

  };

  return (
    <div className={styles.container}>
      <img src={smallLogo} alt="Logo" className={styles.logo} />


      <h2 className={styles.welcomeText}>
        Welcome <span className={styles.name}>{userName}</span>
      </h2>
      <button className={styles.button} onClick={handleGetStarted}>
        Get Started
      </button>

    </div>
  );
};

export default WelcomePage;
