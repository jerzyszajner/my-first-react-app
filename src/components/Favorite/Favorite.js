import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Favorite = () => {
  const navigate = useNavigate();
  const favoriteCards = useSelector(getFavoriteCards);

  useEffect(() => {
    if (favoriteCards.length === 0) {
      navigate('/');
    }
  }, [favoriteCards, navigate]);

  return (
    <div className={styles.favorite}>
      <PageTitle>FAVORITE</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.length ? favoriteCards.map(card => <Card key={card.id} {...card} />) : <p>No cards...</p>}
      </ul>
    </div>
  );
};

export default Favorite;