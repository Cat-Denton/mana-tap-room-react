import React from "react";
import PropTypes from "prop-types";

function ManaKeg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenManaKegClicked(props.id)}>
      <h3>{props.manaColor} mana from {props.landType}</h3>
      <hr/>
      </div>
    </React.Fragment>
  )
}

ManaKeg.propTypes = {
  manaColor: PropTypes.string.isRequired,
  landType: PropTypes.string.isRequired,
  sideEffects: PropTypes.string,
  doses: PropTypes.number,
  id: PropTypes.string,
  whenManaKegClicked: PropTypes.func
};

export default ManaKeg;