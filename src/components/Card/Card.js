import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';


const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    };

    const handleRemoveCardClick = () => {
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.buttonGroup}>
                <button
                    className={clsx(styles.favoriteButton, { [styles.isFavorite]: props.isFavorite })}
                    onClick={handleToggleFavorite}>
                    <span className="fa fa-star-o"></span>
                </button>
                <button
                    className={styles.removeFavoriteButton}
                    onClick={handleRemoveCardClick}>
                    <span className="fa fa-trash"></span>
                </button>
            </div>
        </li>
    );
};

export default Card;