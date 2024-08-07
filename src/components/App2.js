import React from 'react';
import styles from './App2.module.css';

const App2 = () => {
  return (
    <div className={styles.app2}>
      <h1 className={styles.title}>Application 2</h1>
      <p className={styles.description}>Welcome to Application 2 of our mock application!</p>
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>Section X</h2>
          <p>Description of Section X.</p>
        </div>
        <div className={styles.card}>
          <h2>Section Y</h2>
          <p>Description of Section Y.</p>
        </div>
        <div className={styles.card}>
          <h2>Section Z</h2>
          <p>Description of Section Z.</p>
        </div>
      </div>
    </div>
  );
};

export default App2;
