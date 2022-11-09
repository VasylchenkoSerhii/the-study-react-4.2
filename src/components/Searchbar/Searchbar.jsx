import { Formik, Form, Field } from "formik";
import { toast } from 'react-toastify';
import { MdSearch } from "react-icons/md";
import scss from './Searchbar.module.scss';

export default function Searchbar({ onSubmit }) {
    const handleSubmit = (values, actions) => {
        if (values.query === "") {
            toast(`Введіть тематику пошуку фото`);
            return;
        }
        onSubmit(values.query);
        actions.resetForm();
    };

    return (
        <header className={scss.Searchbar}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={handleSubmit}
            >
                <Form className={scss.SearchForm}>
                    <button type="submit" className={scss.SearchFormButton}>
                        <MdSearch
                            size="40"
                            aria-label="Search images"
                        />
                    </button>
                    <Field
                        className={scss.SearchFormInput}
                        name="query"
                        type="text"
                        placeholder="Search images and photos"
                    />
                </Form>  
            </Formik>
        </header>
    );
}