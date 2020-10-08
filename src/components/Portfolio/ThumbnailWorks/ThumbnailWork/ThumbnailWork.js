import React, { Component } from 'react';

import SmallCard from '../../../UI/SmallCard/SmallCard';
import Aux from '../../../../hoc/Aux/Aux';
import Modal from '../../../UI/Modal/Modal';


class ThumbnailWork extends Component {
  state = {
    showModal: false,
    openWork: false
  }

  shouldComponentUpdate() {
    return true
  }

  escModal = (event) => {
    if(event.keyCode === 27) {
      this.modalClosedHandler();
    }
  }

  openModalWork = (props) => {
    console.log(props)
    this.setState({showModal: true});
    this.setState({openWork: props});
    document.addEventListener("keydown", this.escModal);
  }

  modalClosedHandler = () => {
    this.setState({showModal: false});
    document.removeEventListener("keydown", this.escModal);
  }

  render(){
    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          modalClosed={() => this.modalClosedHandler()}
          allProps={this.props}
          btnCloseClicked={() => this.modalClosedHandler()}>
          <div>{this.state.openWork.title}</div>
        </Modal>
        <SmallCard
          thumbnail={this.props.urlThumbnailPhoto}
          title={this.props.title}
          id={this.props.id}
          buttonClickHandler={() => this.openModalWork(this.props)}
          >{this.props.urlThumbnailPhoto}
        </SmallCard>
      </Aux>
    )
  }
}

export default ThumbnailWork;