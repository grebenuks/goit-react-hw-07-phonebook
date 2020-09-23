import axios from 'axios';
import {
  getFormValueSuccess,
  getFormValueFetch,
  getFormValueError,
  getFormValue,
} from './actions';

export const getFormValueFireBase = param => async (dispatch, getState) => {
  try {
    const data = await axios.get(
      `https://goit-react-hw-phonebook.firebaseio.com/contacts.json`,
    );
    const keys = Object.keys(data.data);

    const resArr = keys.reduce((acc, key) => {
      acc.push({ id: key, ...data.data[key] });
      return acc;
    }, []);

    dispatch(getFormValue(resArr));
  } catch (error) {
    console.log(error);
  }
};

export const postFormValueAsync = param => async (dispatch, getState) => {
  dispatch(getFormValueFetch());
  try {
    const data = await axios.post(
      `https://goit-react-hw-phonebook.firebaseio.com/contacts.json`,
      param,
    );
    dispatch(getFormValueSuccess({ ...param, id: data.data.name }));
  } catch (error) {
    dispatch(getFormValueError(error));
  } finally {
    dispatch(getFormValueFetch());
  }
};

export const deleteContactAsync = param => async (dispatch, getState) => {
  try {
    await axios.delete(
      `https://goit-react-hw-phonebook.firebaseio.com/contacts/${param}.json`,
    );
  } catch (error) {
    console.log(error);
  }
};
