import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicViewPanel from './DynamicViewPanel';

const ApplicationLoader = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchAppConfig = async () => {
      const response = await axios.get('/app-config.json');
      setRoutes(response.data.routes);
    };

    fetchAppConfig();
  }, []);

  return <DynamicViewPanel routes={routes} />;
};

export default ApplicationLoader;
