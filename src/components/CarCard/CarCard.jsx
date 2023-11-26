import carImg from './images.jpg';
import css from './CarCard.module.css';
import FavoriteSvg from './FavoriteSvg/FavoriteSvg';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/cars/modalSlice';
import { getFavorites } from '../../redux/cars/selectors';
import { faviritesAdd, faviritesDel } from '../../redux/cars/favoritesSlice';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites);

  const hendleLearnMore = () => {
    dispatch(openModal(car));
  };

  const checkFavorit = favorites.some((favoriteCar) => favoriteCar.id === car.id);

  const handleAdd = () => {
    if(checkFavorit){dispatch(faviritesDel(car))}
    else dispatch(faviritesAdd(car))  
  };

  console.log(favorites);
  return (
    <>
      <div className={css.car_thumb}>
        <img className={css.img} src={!!car.photoLink ? car.photoLink : carImg} alt={car.model} loading='lazy' />
        <button type='button' className={css.svg} onClick={handleAdd}>
          <FavoriteSvg add={checkFavorit} />
        </button>
      </div>
      <div className='mb-[28px] mt-[14px]'>
        <div className='flex mb-2'>
          <p className={css.car_myp}>
            <span>{car.make}</span> {car.model}, <span>{car.year}</span>
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
