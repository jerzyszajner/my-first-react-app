import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);

//actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const ADD_CARD_FAVORITE = createActionName('ADD_CARD_FAVORITE');
const REMOVE_CARD_FAVORITE = createActionName('REMOVE_CARD_FAVORITE')

//action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const addCardFavorite = id => ({ type: ADD_CARD_FAVORITE, payload: id });
export const removeCardFavorite = id => ({ type: REMOVE_CARD_FAVORITE, payload: id });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid.generate() }];
    case ADD_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: false } : card);
    default:
      return statePart;
  };
};

export default cardsReducer;