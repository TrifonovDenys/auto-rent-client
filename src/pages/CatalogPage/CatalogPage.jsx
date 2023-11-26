import CarCard from '../../components/CarCard/CarCard';
import css from './CatalogPage.module.css';
import Filter from '../../components/Filter/Filter';
import { getBrandFilter, getPriceFilter, getModal } from '../../redux/cars/selectors';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { useGetCarsQuery } from '../../redux/api/carsApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const CatalogPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [favorites, setFavorites] = useState([]);
    const [lCount, setLCount] = useState(12);
    

    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
      );

    const { limit, totalHits = 32 } = params;
    const {data: fetchedCars} = useGetCarsQuery({ limit, totalHits });

    useEffect(() => {
        if (!fetchedCars) {
          return;
        }

        setSearchParams({
          ...params,
          limit: lCount,
          totalHits
        });
    
        setFavorites(fetchedCars);
      }, [fetchedCars, lCount, params, setSearchParams]);

    const isOpen = useSelector(getModal)
    const brandF = useSelector(getBrandFilter)
    const priceF = useSelector(getPriceFilter)

    let filteredCar = favorites
    if (brandF){
        filteredCar = filteredCar.filter(el=>el.make.includes(brandF))
    }
    if(priceF){
        filteredCar = filteredCar.filter(el=>el.rentalPrice === "$" + priceF)
    }
    const lm = totalHits / lCount > 1
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
            {lm ? 
            <div className=' w-full flex justify-center pb-[150px]'>
                <button onClick={()=> {setLCount(limit=> {
                    if(limit + 12 > totalHits){
                        return totalHits
                    }
                    return limit + 12})}} type='button' className='text-[#3470FF] hover:text-[#0B44CD] underline  border-none'>
                    Load more
                </button>
            </div> : <></>} 
        </>
    );
};

export default CatalogPage;


