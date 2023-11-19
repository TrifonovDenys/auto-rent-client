import carImg from './images.jpg';
import css from './CarCard.module.css';
import FavoriteSvg from './FavoriteSvg/FavoriteSvg';
import { useDispatch, useSelector } from 'react-redux';
import { getModal } from '../../redux/cars/selectors';
import { openModal } from '../../redux/cars/modalSlice';

const CarCard = ({ car }) => {
    // console.log(car.photoLink);
    const isOpen = useSelector(getModal)
    const dispatch = useDispatch()
    // console.log(isOpen);
    const hendleLearnMore = () => {
        dispatch(openModal())
    } 
    return (
        <>
            <div className={css.car_thumb}>
                <img className={css.img} src={!!car.photoLink ? car.photoLink : carImg} alt={car.model} loading='lazy' />
                <button type='button' className={css.svg}>
                    <FavoriteSvg />
                </button>
            </div>
            <div className='mb-[28px] mt-[14px]'>
                <div className='flex mb-2'>
                    <p className={css.car_myp}>
                        <span>{car.make}</span> {car.model},<span>{car.year}</span>
                    </p>
                    <p className={`${css[`car_myp`]} ${css[`price`]}`}>
                        <span>{car.rentalPrice}</span>
                    </p>
                </div>

                <p className={css.support_text}>
                    {car.address.split(',')[1]}
                    <span></span>
                    {car.address.split(',')[2]}
                    <span></span>
                    {car.rentalCompany}
                    <span></span>
                    {car.type}
                    <span></span>
                    {car.model}
                    <span></span>
                    {car.id}
                    <span></span>
                    {car.functionalities[2]}
                </p>
            </div>
            <div>
                <button className={css.button} type='button' onClick={hendleLearnMore}>
                    Learn More
                </button>
            </div>
        </>
    );
};

export default CarCard;
