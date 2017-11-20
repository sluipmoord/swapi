
import React, { Component } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HomeworldPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount () {
    // Open when page renders

    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 350)
  }

  close = () => {
    this.setState({
      isOpen: false
    })
    setTimeout(() => {
      console.log(this.props.history);
      if (this.props.history.location) {
        this.props.history.goBack()
      } else {
        this.props.history.push('/people')
      }
    }, 350)
  }

  render() {
    const { isOpen } = this.state
    console.log(isOpen);
    return (
      <Modal backdrop={true} isOpen={isOpen} toggle={this.close}>
        <ModalHeader> Homeworld </ModalHeader>
        <ModalBody> Hello </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.close}> Close </Button>
          </ModalFooter>
      </Modal>
    )
  }
}

export default HomeworldPage
