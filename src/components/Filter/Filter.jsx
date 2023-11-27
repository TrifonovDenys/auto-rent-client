import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './Filter.module.css';
import { setBrandFilter, setPriceFilter } from '../../redux/cars/filterSlice';
import { useDispatch } from 'react-redux';
import { brandDropdown } from './brand';
import { priceDropdown } from './price';

const Filter = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBrandFilter(e.target.brand.value));
    dispatch(setPriceFilter(e.target.price.value));
  };

  return (
    <div className='w-full flex justify-center items-center pt-[150px] '>
      <Formik initialValues={{ brand: '', price: '' }}>
        <Form onSubmit={handleSubmit} className='flex items-end gap-[18px]'>
          <div className='flex flex-col'>
            <label htmlFor='brand' className={css.lable}>
              Car brand
            </label>
            <div className={css.input}>
              <Field as='select' name='brand' id='brand' className={css.select}>
                <option className={css.option} value='' disabled hidden>
                  Enter the text{' '}
                </option>
                {brandDropdown.map((el, idx) => (
                  <option className='option' key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='price' className={css.lable}>
              Price/ 1 hour
            </label>
            <div className={css.input}>
              <Field as='select' name='price' id='price' className={css.select}>
                <option value='' disabled hidden>
                  To ${' '}
                </option>

                {priceDropdown.map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <button type='submit' className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
