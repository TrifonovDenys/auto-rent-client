import PropTypes from 'prop-types';
import carImg from './images.jpg';
import css from './CarCard.module.css';
import FavoriteSvg from './FavoriteSvg/FavoriteSvg';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/cars/modalSlice';
import { getFavorites } from '../../redux/cars/selectors';
import { faviritesAdd, faviritesDel } from '../../redux/cars/favoritesSlice';
import toast from 'react-hot-toast';

const CarCard = ({ car }) => {
  const {id, photoLink, model, make, year ,rentalPrice,address,rentalCompany,type,functionalities} = car
  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites);

  const hendleLearnMore = () => {
    dispatch(openModal(car));
  };

  const checkFavorit = favorites.some((favoriteCar) => favoriteCar.id === id);

  const handleAdd = () => {
    if (checkFavorit) {
      dispatch(faviritesDel(car));
      toast.success('removed from Favorites');
    } else {
      dispatch(faviritesAdd(car));
      toast.success('added to Favorites');
    }
  };

  return (
    <>
      <div className={css.car_thumb}>
        <img className={css.img} src={!photoLink ? carImg : photoLink} alt={model} loading='lazy' />
        <button type='button' className={css.svg} onClick={handleAdd}>
          <FavoriteSvg add={checkFavorit} />
        </button>
      </div>
      <div className='mb-[28px] mt-[14px]'>
        <div className='flex mb-2'>
          <p className={css.car_myp}>
            <span>{make}</span> {model}, <span>{year}</span>
          </p>
          <p className={`${css[`car_myp`]} ${css[`price`]}`}>
            <span>{rentalPrice}</span>
          </p>
        </div>

        <p className={css.support_text}>
          {address.split(',')[1]}
          <span></span>
          {address.split(',')[2]}
          <span></span>
          {rentalCompany}
          <span></span>
          {type}
          <span></span>
          {model}
          <span></span>
          {id}
          <span></span>
          {functionalities[2]}
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

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    photoLink: PropTypes.string,
    model: PropTypes.string,
    make: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    address: PropTypes.string,
    rentalCompany: PropTypes.string,
    functionalities: PropTypes.arrayOf(PropTypes.string),
  }),
};