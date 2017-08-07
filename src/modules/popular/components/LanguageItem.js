import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Li = glamorous.li({
  margin: '10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  listStyleType: 'none',
  color: (props) =>  (props.isSelected) ? {color: '#d0021b'} : null 
});

function LanguageItem({language, onSelect, isSelected}) {

  return(
    <Li
      onClick={onSelect.bind(null, language)}
      style={(isSelected) ? {color: '#d0021b'} : null}
    >
      {language}
    </Li>
  );
}

LanguageItem.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default LanguageItem;