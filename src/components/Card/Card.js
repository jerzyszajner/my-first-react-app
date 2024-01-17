import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        console.log('Toggling favorite for card id:', props.id);
        dispatch(toggleCardFavorite(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <button
                className={clsx(styles.favoriteButton, { [styles.isFavorite]: props.isFavorite })}
                onClick={handleFavoriteClick}>
                <span className="fa fa-star-o"></span>
            </button>
        </li>
    );
};

export default Card;