import React from 'react';
import { connect } from 'react-redux';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { setNotify } from '../redux/actions';

import { CSSTransition } from 'react-transition-group';

import './app.css';

export function App({ items, notify, setNotify }) {
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
});
const mapDispatchToProps = { setNotify };
export default connect(mapStateToProps, mapDispatchToProps)(App);
