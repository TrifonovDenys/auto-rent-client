import CarCard from '../../components/CarCard/CarCard';
import cars from '../../advertsCars.json';
import css from './CatalogPage.module.css';
import Filter from '../../components/Filter/Filter';
import { getBrandFilter, getPriceFilter, getModal } from '../../redux/cars/selectors';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';

const CatalogPage = () => {

    const isOpen = useSelector(getModal)
    const brandF = useSelector(getBrandFilter)
    const priceF = useSelector(getPriceFilter)

    let filteredCar = cars
    if (brandF){
        filteredCar = filteredCar.filter(el=>el.make.includes(brandF))
    }
    if(priceF){
        filteredCar = filteredCar.filter(el=>el.rentalPrice === "$" + priceF)
    }
    console.log(filteredCar);
    // filteredCar = cars.filter(el=>el.make.includes(brandF) && el.rentalPrice.includes(priceF))
    return (
        <>
        {isOpen && <Modal />}
            <Filter />
            <ul className={css[`Car_list`]}>
                {filteredCar.length > 0 ? filteredCar.map((car) => {
                    return (
                        <li className={css[`Car_item`]} key={car.id}>
                            <CarCard car={car} />
                        </li>
                    );
                }): <p>No cars</p>}
            </ul>
            {filteredCar.length > 12 ? <div className=' w-full flex justify-center pb-[150px]'>
                <button type='button' className='text-[#3470FF] hover:text-[#0B44CD] underline  border-none'>
                    Load more
                </button>
            </div> : <></>}
        </>
    );
};

export default CatalogPage;


// https://6560f92b83aba11d99d1c48f.mockapi.io/:endpoint