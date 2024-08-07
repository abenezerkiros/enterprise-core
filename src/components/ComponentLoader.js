import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComponentLoader = ({ componentName, version }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { data } = await axios.get(`/components/${componentName}/v${version}.js`);
      setComponent(() => data.default);
    };

    loadComponent();
  }, [componentName, version]);

  return Component ? <Component /> : <div>Loading...</div>;
};

export default ComponentLoader;
