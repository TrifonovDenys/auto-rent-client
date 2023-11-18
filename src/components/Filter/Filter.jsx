import { Formik, Form, Field, ErrorMessage } from 'formik';

const Filter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
    };
    return (
        <Formik initialValues={{ brand: '', price: '' }}>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='brand'>Car brand</label>
                <Field as='select' name='brand' value={brand}>
                    <option value='' selected disabled hidden>
                        Enter the text
                    </option>
                    <option value='red'>Red</option>
                    <option value='green'>Green</option>
                    <option value='blue'>Blue</option>
                    {/* {brand.map((el) => (
                        <option value={el}>{el}</option>
                    ))} */}
                </Field>

                <label htmlFor='price'>Price/ 1 hour</label>
                <Field as='select' name='price' value={price}>
                    <option value='' selected disabled hidden>
                        To $
                    </option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>50</option>
                    {/* {price.map((el) => (
                        <option value={el}>{el}</option>
                    ))} */}
                </Field>

                <label htmlFor='email'>Email</label>
                <Field id='email' name='email' placeholder='jane@acme.com' type='email' />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default Filter;
