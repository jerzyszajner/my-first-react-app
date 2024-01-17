import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchstring(''));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchstring(searchValue));
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchValue} onChange={handleChange} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;