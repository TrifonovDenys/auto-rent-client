import CarCard from '../../components/CarCard/CarCard';
import cars from '../../advertsCars.json';
import css from './CatalogPage.module.css';
import Filter from '../../components/Filter/Filter';
import { getModal } from '../../redux/cars/selectors';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
const CatalogPage = () => {
    const isOpen = useSelector(getModal)
    console.log(isOpen);
    return (
        <>
        {isOpen && <Modal />}
            <Filter />
            <ul className={css[`Car_list`]}>
                {cars.map((car, i) => {
                    // if (i < 12) {
                    return (
                        <li className={css[`Car_item`]} key={car.id}>
                            <CarCard car={car} />
                        </li>
                    );
                    // }
                })}
            </ul>
            <div className=' w-full flex justify-center pb-[150px]'>
                <button type='button' className='text-[#3470FF] hover:text-[#0B44CD] underline  border-none'>
                    Load more
                </button>
            </div>
        </>
    );
};

export default CatalogPage;
