import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addCardFavorite, removeCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();

    const handleAddFavoriteClick = () => {
        if (!props.isFavorite) {
            dispatch(addCardFavorite(props.id));
        }
    };

    const handleRemoveFavoriteClick = () => {
        dispatch(removeCardFavorite(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.buttonGroup}>
                <button
                    className={clsx(styles.favoriteButton, { [styles.isFavorite]: props.isFavorite })}
                    onClick={handleAddFavoriteClick}>
                    <span className="fa fa-star-o"></span>
                </button>
                <button
                    className={styles.removeFavoriteButton}
                    onClick={handleRemoveFavoriteClick}>
                    <span className="fa fa-trash"></span>
                </button>
            </div>
        </li>
    );
};

export default Card;