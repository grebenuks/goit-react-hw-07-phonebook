import { GET_FORM_VALUE } from './types';
import { DELETE_CONTACT } from './types';
import { GET_FILTER_VALUE } from './types';
import { SET_FILTERED_ARR } from './types';
import { REMOVE_FILTERED_ARR } from './types';
import { SET_NOTIFY } from './types';
import { createAction } from '@reduxjs/toolkit';

export const removeFilteredArr = createAction(REMOVE_FILTERED_ARR);

export const getFormValue = createAction(GET_FORM_VALUE);
export const deleteContact = createAction(DELETE_CONTACT);
export const getFilterValue = createAction(GET_FILTER_VALUE);
export const setFilteredArr = createAction(SET_FILTERED_ARR);
export const setNotify = createAction(SET_NOTIFY);
