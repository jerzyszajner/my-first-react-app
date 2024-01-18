import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getColumnsByList = ({ columns, searchString }, listId) => columns
  .filter(column => column.listId === listId && strContains(column.title, searchString));

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });


const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid.generate() }];
      default:
        return statePart;
    };
  };

  export default columnsReducer;