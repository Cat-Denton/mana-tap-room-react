import { v4 } from 'uuid';
import React from "react";
import ReuseableForm from './ReusableForm';
import PropTypes from "prop-types";

function NewManaKegForm(props){
  const newManaKegFormStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingLeft: '50px'
  }
  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewManaKegFormSubmission}
        buttonText="Pop that keg for wizarding wonders!"/>
    </React.Fragment>
  );
  function handleNewManaKegFormSubmission(event) {
    event.preventDefault();
    const doses = parseInt(event.target.doses.value)
    props.onNewManaKegCreation({manaColor: event.target.manaColor.value, landType: event.target.landType.value, sideEffects: event.target.sideEffects.value, doses: doses, id: v4()});
  }
}

NewManaKegForm.propTypes = {
  onNewManaKegCreation: PropTypes.func
};

export default NewManaKegForm;