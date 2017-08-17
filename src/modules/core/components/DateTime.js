import React from 'react';
import PropTypes from 'prop-types';

function DateTime({value}){
  return <span>{new Date(value).toLocaleString('en')}</span>;
}

DateTime.propTypes = {
  value: PropTypes.string.isRequired
};

export default DateTime;