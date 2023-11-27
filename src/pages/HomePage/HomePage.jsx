import { NavLink } from 'react-router-dom';
import css from '../CatalogPage/CatalogPage.module.css';
const HomePage = () => {
  return (
    <div className='w-full flex justify-center py-[50px]'>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#ffffff' : '#3470FF',
          backgroundColor: isActive ? '#3470FF' : '',
          boxShadow: isActive ? '0px 4px 4px 0px rgba(0,0,0,0.75)' : '',
        })}
        to='/catalog'
        className={css.nav_link}
      >
        Choose a car
      </NavLink>
    </div>
  );
};

export default HomePage;
