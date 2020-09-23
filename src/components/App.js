import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { setNotify } from '../redux/actions';
import { getFormValueFireBase } from '../redux/operations';

import { CSSTransition } from 'react-transition-group';

import './app.css';

export function App({
  items,
  notify,
  setNotify,
  isLoading,
  getFormValueFireBase,
}) {
  useEffect(() => {
    getFormValueFireBase();
  }, [getFormValueFireBase]);
  return (
    <>
      <CSSTransition
        in={notify}
        timeout={2000}
        classNames="notify"
        unmountOnExit
        onEntered={() => setNotify(false)}
      >
        <Notification />
      </CSSTransition>
      {isLoading && <h2 className="loader">...loading...</h2>}
      <CSSTransition
        in={true}
        appear={true}
        timeout={2000}
        classNames="op"
        unmountOnExit
      >
        <h2 className="title">Phonebook</h2>
      </CSSTransition>
      <Form />
      <CSSTransition
        in={items.length >= 1}
        timeout={300}
        unmountOnExit
        classNames="title-contacts"
      >
        <h2 className="title-contacts">Contacts</h2>
      </CSSTransition>
      <CSSTransition
        in={items.length >= 2}
        timeout={300}
        unmountOnExit
        classNames="filter"
      >
        <Filter />
      </CSSTransition>
      <ContactList />
    </>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
  notify: state.contacts.setNotify,
  isLoading: state.isLoading,
});
const mapDispatchToProps = { setNotify, getFormValueFireBase };
export default connect(mapStateToProps, mapDispatchToProps)(App);
