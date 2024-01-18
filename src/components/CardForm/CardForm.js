import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard({ title, columnId: props.columnId }));
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title:</label>
            <TextInput placeholder="Enter card title..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;