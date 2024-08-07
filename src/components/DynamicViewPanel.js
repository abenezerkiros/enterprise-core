import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './DynamicViewPanel.module.css';

const DynamicViewPanel = ({ routes }) => {
  return (
    <div className={styles.panel}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => {
            const Component = lazy(() => import(`./${route.component}`));
            return <Route key={route.path} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default DynamicViewPanel;
