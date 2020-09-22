import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './form.module.css';
import { connect } from 'react-redux';
import { setNotify } from '../../redux/actions';
import { getFormValue, getContact } from '../../redux/operations';

function Form({ getFormValue, items, setNotify, getContact }) {
  const [state, setState] = useState({ name: '', number: '' });

  const handleNameChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const notifyTrue = () => {
    setNotify(true);
  };

  const hanndleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (state.name === '' || state.number === '') {
      return;
    } else {
      const input = e.target.elements;
      let flag = true;

      items.map(el => (el.name === input[0].value ? (flag = false) : ''));

      flag
        ? getFormValue(
            {
              name: input[0].value,
              number: input[1].value,
              id: uuidv4(),
            },
            // getContact(),
          )
        : notifyTrue();
    }
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={hanndleSubmit}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={handleNameChange}
        ></input>
      </label>
      <label className={styles.label}>
        Phone:
        <input
          className={styles.input}
          type="tel"
          name="number"
          onChange={handleNameChange}
        ></input>
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  getContact: PropTypes.func,
  getName: PropTypes.func,
};

const mapStateToProps = state => ({ items: state.contacts.items });
const mapDispatchToProps = { getFormValue, setNotify, getContact };
export default connect(mapStateToProps, mapDispatchToProps)(Form);
