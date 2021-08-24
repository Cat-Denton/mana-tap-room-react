import React from 'react';
import PropTypes from 'prop-types';

function ManaKegDetail(props){
  const { manaKeg } = props;

  function handleDrinkButton() {
    if(manaKeg.doses > 0) {
      const newDoses = manaKeg.doses -=1;
      props.onClickingDrinkOrTap({manaColor: manaKeg.manaColor, landType: manaKeg.landType, sideEffects: manaKeg.sideEffects, doses: newDoses, id: manaKeg.id})    
    } else {
      return;
    }
  }

  function handleTappingLandButton() {
    const newDoses = manaKeg.doses += 1;
    props.onClickingDrinkOrTap({manaColor: manaKeg.manaColor, landType: manaKeg.landType, sideEffects: manaKeg.sideEffects, doses: newDoses, id: manaKeg.id})    
  }

  function handleOutOfStock() {
    if (manaKeg.doses !== 0) {
      const doses = manaKeg.doses
      return doses;
    } else {
      const doses = "This mana keg is out of draughts!"
      return doses;
    }
  }

  return (
    <React.Fragment>
      <h1>Mana Keg Details</h1>
      <h3>{manaKeg.manaColor} mana from {manaKeg.landType}</h3>
      <hr />
      <h4>Warning! Drinking this mana may result in the following side effects:</h4>
      <p>{manaKeg.sideEffects}</p>
      <hr />
      <p>Draughts remaining in keg: {handleOutOfStock()}</p>
      <button onClick={handleDrinkButton}>Drink one draught of mana!</button>
      <button onClick={handleTappingLandButton}>Tap a/an {manaKeg.landType} to add one {manaKeg.manaColor} mana to keg.</button>
      <br />
    </React.Fragment>
  );
}

ManaKegDetail.propTypes ={
  manaKeg: PropTypes.object,
  onClickingDrinkOrTap: PropTypes.func
}

export default ManaKegDetail;