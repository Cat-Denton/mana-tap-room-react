import React from 'react';
import ManaKegDetail from './ManaKegDetail';
import ManaKegList from './ManaKegList'
import NewManaKegForm from './NewManaKegForm';

class ManaKegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterManaKegList: [],
      selectedManaKeg: null
    };
  }

  handleAddingNewManaKegToList = (newManaKeg) => {
    const newMasterManaKegList = this.state.masterManaKegList.concat(newManaKeg);
    this.setState({
      masterManaKegList: newMasterManaKegList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedManaKeg = (id) => {
    const selectedManaKeg = this.state.masterManaKegList.filter(manaKeg => manaKeg.id === id)[0];
    this.setState({ selectedManaKeg: selectedManaKeg});
  }

  handleClick = () => {
    if (this.state.selectedManaKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedManaKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleDrinkingManaInList = (manaToDrink) => {
    const drankMasterManaKegList = this.state.masterManaKegList
    .filter(manaKeg => manaKeg.id !==this.state.selectedManaKeg.id)
    .concat(manaToDrink);
    this.setState({
      masterManaKegList: drankMasterManaKegList
    });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedManaKeg != null) {
      currentlyVisibleState = <ManaKegDetail manaKeg={this.state.selectedManaKeg} onClickingDrinkOrTap={this.handleDrinkingManaInList} />
      buttonText = "Return to Mana Keg Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewManaKegForm onNewManaKegCreation={this.handleAddingNewManaKegToList} />
      buttonText = "Return to Mana Keg Menu";
    } else {
      currentlyVisibleState = <ManaKegList manaKegList={this.state.masterManaKegList} onManaKegSelection={this.handleChangingSelectedManaKeg} />
      buttonText = "Add new Mana Keg to Menu"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ManaKegControl;