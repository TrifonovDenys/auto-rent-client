import carImg from "./images.jpg";
import css from "./CarCard.module.css";
import FavoriteSvg from "./FavoriteSvg/FavoriteSvg"

const CarCard = ({ car }) => {
  console.log(car.photoLink);

  return (
    <>
      <div className={css.car_thumb}>
        <img
          className={css.img}
          src={!!car.photoLink ? car.photoLink: carImg}
          // src={carImg}
          alt={car.model}
          loading="lazy"
        />
        <button type="button" className={css.svg}>
          <FavoriteSvg/>
        </button>
        
      </div>
      <div className="mb-[28px] mt-[14px]">
        <div className="flex mb-2">
          <p className={css.car_myp}>
            <span>{car.make}</span> {car.model},<span>{car.year}</span>
          </p>
          <p className={`${css[`car_myp`]} ${css[`price`]}`}>
            <span>{car.rentalPrice}</span>
          </p>
        </div>
        {/* <ul className={css.list}>
          <li className={css.item}>{car.address.split(",")[1]}</li>
          <li className={css.item}>{car.address.split(",")[2]}</li>
          <li className={css.item}>{car.rentalCompany}</li>
          <li className={css.item}>{car.type}</li>
          <li className={css.item}>{car.model}</li>
          <li className={css.item}>{car.id}</li>
          <li className={css.item}>{car.functionalities[2]}</li>
        </ul> */}
        <p className={css.support_text}>{car.address.split(",")[1]}<span></span>{car.address.split(",")[2]}<span></span>{car.rentalCompany}<span></span>{car.type}<span></span>{car.model}<span></span>{car.id}<span></span>{car.functionalities[2]}</p>
      </div>
      <div>
        <button className={css.button} type="button">
          Learn More
        </button>
      </div>
    </>
  );
};

export default CarCard;
