import axios from 'axios';

export const getFormValue = param => async (dispatch, getState) => {
  await axios.post(
    `https://goit-react-hw-phonebook.firebaseio.com/contacts.json`,
    param,
  );
  const data = await axios.get(
    `https://goit-react-hw-phonebook.firebaseio.com/contacts.json`,
  );
  const contact = data;
  console.log(contact);
};

export const getContact = () => async (dispatch, getState) => {
  try {
    const data = await axios.get(
      `https://goit-react-hw-phonebook.firebaseio.com/contacts.json`,
    );
    console.log('data', data);
  } catch (error) {
    console.log(error);
  }
};
