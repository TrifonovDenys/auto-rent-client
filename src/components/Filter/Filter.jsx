import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "./Filter.module.css"
import { setBrandFilter } from '../../redux/cars/filterSlice';
import { useDispatch } from 'react-redux';
import { brandDropdown } from './brand';

const Filter = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBrandFilter(e.target.brand.value))
        // console.dir(e.target.price.value);
    };
    
    return (
        <div className='w-full flex justify-center items-center pt-[150px] '>
            <Formik initialValues={{ brand: '', price: '' }}>
            <Form onSubmit={handleSubmit} className='flex items-end gap-[18px]'>
                <div className='flex flex-col'>
                <label htmlFor='brand' className={css.lable}>Car brand</label>
                <Field as='select' name='brand' id='brand' className={css.input}>
                    <option value='' selected disabled hidden>
                    Enter the text
                    </option>
                    {brandDropdown.map((el, idx) => (
                        <option key={idx} value={el}>{el}</option>
                    ))} 
                </Field>
                </div>

                <div className='flex flex-col'>
                <label htmlFor='price' className={css.lable}>Price/ 1 hour</label>
                <Field as='select' name='price' id='price' className={css.input}>
                    <option value='' selected disabled hidden>
                        To $
                    </option>

                    {['30', "40", '50'].map((el, idx) => (
                        <option key={idx} value={el}>{el}</option>
                    ))} 
                </Field>
                </div>
                <button type='submit' className={css.button}>Search</button>
            </Form>
        </Formik>
        </div>
    );
};

export default Filter;
