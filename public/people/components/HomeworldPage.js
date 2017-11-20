
import React, { Component } from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HomeworldPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentWillMount () {
    // Open when page renders

    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 200)
  }

  goBack = () => {
    this.setState({
      isOpen: false
    })
    setTimeout(() => {
      this.props.history.goBack()
    }, 200)
  }

  render() {
    const { isOpen } = this.state
    console.log(isOpen);
    return (
      <Modal backdrop={true} isOpen={isOpen} toggle={this.goBack}>
        <ModalHeader> Homeworld </ModalHeader>
        <ModalBody> Hello </ModalBody>

      </Modal>
    )
  }
}

export default HomeworldPage
