import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import { closeModal } from '../../redux/cars/modalSlice';
import CrossIcon from './component/CrossIcon';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import { getCar } from '../../redux/cars/selectors';
import carImg from './../CarCard/images.jpg';
import formatNumberWithCommas from './utils/miles';

const modalRoot = document.querySelector('#modal-root');
const Modal = () => {
  const dispatch = useDispatch();
  const car = useSelector(getCar);

  const hendleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return createPortal(
    <div className={css.Modal_backdrop} onClick={hendleCloseModal}>
      <div className={css.Modal_content}>
        <div className='absolute top-4 right-4 py-0 px-0'>
          <button
            className='transition-all rounded-md bg-transparent py-0 px-0 text-black'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <CrossIcon />
          </button>
        </div>
        <div>
          <img src={!car.photoLink ?  carImg: car.photoLink} alt={car.model} loading='lazy' />
        </div>
        <div className='mb-[14px] mt-[14px]'>
          <div className='flex mb-2'>
            <p className={css.car_myp}>
              <span>{car.make}</span> {car.model},<span>{car.year}</span>
            </p>
          </div>
          <p className={css.support_text}>
            {car.address.split(',')[1]}
            <span></span>
            {car.address.split(',')[2]}
            <span></span>
            Id: {car.id}
            <span></span>
            Year: {car.year}
            <span></span>
            Type: {car.type} <br />
          </p>
          <p className={css.support_text}>
            Fuel Consumption: {car.fuelConsumption}
            <span></span>
            Engine Size: {car.engineSize}
          </p>
        </div>
        <div className='mb-[24px]'>
          <p className={css.description}>{car.description}</p>
        </div>
        <div className='mb-[24px]'>
          <p className={`${css['description']} mb-[8px]`}>Accessories and functionalities:</p>
          <div className='flex flex-wrap'>
            {car.accessories.map((el, index) => (
              <React.Fragment key={index}>
                <p className={css.accessories}>{el}</p>
              </React.Fragment>
            ))}

            {car.functionalities.map((el, index) => (
              <React.Fragment key={index}>
                <p className={css.accessories}>{el}</p>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='mb-[24px]'>
          <p className={`${css['description']} mb-[8px]`}>Rental Conditions: </p>

          <div className='flex flex-wrap gap-[8px]'>
            <p className={css.condition_block}>
              Minimum age : <span>25</span>
            </p>
            <p className={css.condition_block}>Valid driver’s license</p>
            <p className={css.condition_block}>Security deposite required </p>
            <p className={css.condition_block}>
              Mileage: <span>{formatNumberWithCommas(car.mileage)}</span>
            </p>
            <p className={css.condition_block}>
              Price: <span>{car.rentalPrice}</span>
            </p>
          </div>
        </div>
        <div>
          <a href="tel:+380730000000" className={css.button}>
            Rental car
          </a>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
