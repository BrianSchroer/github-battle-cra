import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import LanguageItem from './LanguageItem';

const Ul = glamorous.ul({
  display: 'flex',
  justifyContent: 'center',
  padding: 0
});

function SelectLanguage({selectedLanguage, onSelect}) {
    const languages = ['All', 'C', 'C++', 'C#', 'CSS', 'Java', 'JavaScript', 'Objective-C', 'PHP', 'Python', 'Ruby'];  

    return(
      <Ul>
        {languages.map(language =>
          <LanguageItem 
            key={language} 
            language={language} 
            isSelected={language === selectedLanguage}
            onSelect={onSelect} />
        )}
      </Ul>
    ); 
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectLanguage;