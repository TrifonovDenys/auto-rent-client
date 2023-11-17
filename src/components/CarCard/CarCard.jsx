import carImg from "./images.jpg";
import css from "./CarCard.module.css";
const CarCard = ({ car }) => {
  console.log(car);
  return (
    <>
      <div className={css.car_thumb}>
        <img
          className={css.img}
          // src={car.photoLink}
          src={carImg}
          alt={car.model}
          loading="lazy"
        />
      </div>
      <div className="mb-[28px] mt-[14px]">
        <div className="flex justify-between mb-2">
          <p className={css.car_myp}>
            <span>{car.make}</span> {car.model}, <span>{car.year}</span>
          </p>
          <p className={css.car_myp}>
            <span>{car.rentalPrice}</span>
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>{car.address.split(",")[1]}</li>
          <li className={css.item}>{car.address.split(",")[2]}</li>
          <li className={css.item}>{car.rentalCompany}</li>
          <li className={css.item}>{car.type}</li>
          <li className={css.item}>{car.model}</li>
          <li className={css.item}>{car.id}</li>
          <li className={css.item}>{car.accessories[2]}</li>
        </ul>
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
