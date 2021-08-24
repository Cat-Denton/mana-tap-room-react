import React from "react";
import ManaKeg from "./ManaKeg";
import PropTypes from "prop-types";

function ManaKegList(props) {
  return (
    <React.Fragment>
      {props.manaKegList.map((manaKeg) =>
        <ManaKeg
          whenManaKegClicked={props.onManaKegSelection}
          manaColor={manaKeg.manaColor}
          landType={manaKeg.landType}
          sideEffects={manaKeg.sideEffects}
          doses={manaKeg.doses}
          id={manaKeg.id}
          key={manaKeg.id}
        />
      )}
    </React.Fragment>
  );
}

ManaKegList.propTypes = {
  manaKegList: PropTypes.array,
  onManaKegSelection: PropTypes.func
}

export default ManaKegList;