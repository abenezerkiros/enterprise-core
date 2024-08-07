import React, { useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { setMenu } from '../actions/menuActions';
import styles from './DynamicMenu.module.css';

const DynamicMenu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get('/menu-config.json');
      dispatch(setMenu(response.data.menu));
    };

    fetchMenu();
  }, [dispatch]);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        &#9776;
      </div>
      <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <NavLink to={item.path} className={styles.menuLink}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DynamicMenu;
