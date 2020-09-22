import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact, removeFilteredArr } from '../../redux/actions';

import './contactList.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function ContactList({ value, deleteContact, removeFilteredArr }) {
  const handleButtonClick = id => {
    deleteContact(id);
    removeFilteredArr();
  };
  return (
    <TransitionGroup component="ul" className="list">
      {value.map(item => {
        return (
          <CSSTransition
            key={item.id}
            timeout={250}
            classNames="adddelete"
            unmountOnExit
          >
            <li className="item" key={item.id}>
              <span>{item.name}</span>
              <span>: {item.number}</span>
              <button
                className="button"
                onClick={() => handleButtonClick(item.id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filteredItems
    ? state.contacts.filteredItems
    : state.contacts.items,
});

const mapDispatchToProps = { deleteContact, removeFilteredArr };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
