import CarCard from '../../components/CarCard/CarCard';
import cars from '../../advertsCars.json';
import css from '../CatalogPage/CatalogPage.module.css';
import { getFavorites, getModal } from '../../redux/cars/selectors';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { NavLink } from 'react-router-dom';
const FavoritesPage = () => {

    const isOpen = useSelector(getModal)
    const favorite = useSelector(getFavorites)

    const filteredCar = cars.filter(el=>favorite.includes(el.id))
    return (
        <>
        {isOpen && <Modal />}
            <ul className={css[`Car_list`]}>
                {filteredCar.length > 0 ? filteredCar.map((car) => {
                    return (
                        <li className={css[`Car_item`]} key={car.id}>
                            <CarCard car={car} />
                        </li>
                    );
                }): (
                    <div className='w-full flex justify-center'>
                        <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? '#ffffff' : '#3470FF',
                        backgroundColor: isActive ? '#3470FF' : '',
                        boxShadow: isActive ? '0px 4px 4px 0px rgba(0,0,0,0.75)' : '',
                    })}
                    to='/catalog'
                    className={css.nav_link}
                >
                    No favorites car yet
                </NavLink>
                    </div>
                )}
            </ul>
            {filteredCar.length > 12 ? <div className=' w-full flex justify-center pb-[150px]'>
                <button type='button' className='text-[#3470FF] hover:text-[#0B44CD] underline  border-none'>
                    Load more
                </button>
            </div> : <></>}
        </>
    );
};

export default FavoritesPage;
