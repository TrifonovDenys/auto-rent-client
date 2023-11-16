import CarCard from "../../components/CarCard/CarCard";
import cars from "../../advertsCars.json";
import css from "./CatalogPage.module.css";
const CatalogPage = () => {
  return (
    <>
      <h1>CatalogPage</h1>
      <ul className={css[`Car_list`]}>
        {cars.map((car) => (
          <li className={css[`Car_item`]} key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogPage;
