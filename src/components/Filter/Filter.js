import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './filter.module.css';
import {
  getFilterValue,
  setFilteredArr,
  removeFilteredArr,
} from '../../redux/actions';

function Filter({ filter, getFilterValue, setFilteredArr, removeFilteredArr }) {
  const getName = ({ target: { value } }) => {
    getFilterValue(value);
    setFilteredArr(value);
    if (value === '') {
      removeFilteredArr();
    }
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={getName}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  getFilterName: PropTypes.func,
};

const mapStateToProps = state => ({ filter: state.contacts.filter });

const mapDispatchToProps = {
  getFilterValue,
  setFilteredArr,
  removeFilteredArr,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
