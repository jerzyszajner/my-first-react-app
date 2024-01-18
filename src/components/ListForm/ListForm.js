import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title:</label>
            <TextInput placeholder="Enter list title..." value={title} onChange={e => setTitle(e.target.value)} />

            <label className={styles.label}>Description:</label>
            <TextInput placeholder="Enter list description..." value={description} onChange={e => setDescription(e.target.value)} />

            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;
