import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='manaColor'
          placeholder='What color is this mana?' />
        <input
          type='text'
          name='landType'
          placeholder='Which Land is this mana from?' />
        <input
          type='textArea'
          name='sideEffects'
          placeholder='What side effects may consumption of this mana induce?' />
        <input
          type='number'
          name='doses'
          placeholder='How many uses of mana does this keg hold?' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;