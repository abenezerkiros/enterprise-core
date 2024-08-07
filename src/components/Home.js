import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.description}>Welcome to the Home Page of our mock application!</p>
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>Feature 1</h2>
          <p>Description of Feature 1.</p>
        </div>
        <div className={styles.card}>
          <h2>Feature 2</h2>
          <p>Description of Feature 2.</p>
        </div>
        <div className={styles.card}>
          <h2>Feature 3</h2>
          <p>Description of Feature 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
