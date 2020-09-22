import {
  GET_FORM_VALUE,
  DELETE_CONTACT,
  GET_FILTER_VALUE,
  SET_FILTERED_ARR,
  REMOVE_FILTERED_ARR,
  SET_NOTIFY,
} from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookReducer = createReducer(initialState, {
  [GET_FORM_VALUE]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
    },
  }),
  [DELETE_CONTACT]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(contact => contact.id !== payload),
    },
  }),
  [GET_FILTER_VALUE]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filter: payload,
    },
  }),
  [SET_FILTERED_ARR]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filteredItems: state.contacts.items.filter(el =>
        el.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
      ),
    },
  }),
  [REMOVE_FILTERED_ARR]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filteredItems: null,
    },
  }),
  [SET_NOTIFY]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      setNotify: payload,
    },
  }),
});
