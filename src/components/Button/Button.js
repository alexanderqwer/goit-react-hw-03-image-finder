import React from 'react';
import PropTypes from 'prop-types';
import S from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={S.section}>
      <button className={S.Button} type="button" onClick={onClick}>
        Loade more
      </button>
    </div>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
