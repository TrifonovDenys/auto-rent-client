import carImg from "./images.jpg";
import css from "./CarCard.module.css";
const CarCard = ({ car }) => {
  console.log(car);
  return (
    <>
      <div className="">
        <img src={carImg} alt={car.model} loading="lazy" />
      </div>
      <div>
        <p>
          <span>{car.make}</span> {car.model}, <span>{car.year}</span>
        </p>
        <p>{car.rentalPrice}</p>
        <ul>
          <li>Kiev</li>
          <li>Ukraine</li>
        </ul>
      </div>
      <div>
        <button type="button">Learn More</button>
      </div>
    </>
  );
};

export default CarCard;
