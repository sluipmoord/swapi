import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { fetchPerson } from '../actions'
import { getPerson } from '../selectors'

import { Planet } from '../../planets'
import { Loading } from '../../utils'

import { Progress } from 'reactstrap'

class HomeworldPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount () {
    // Open when page renders
    console.log(this.props.isFetching, this.props.person);
    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 350)
  }

  componentWillReceiveProps (nextProps) {
    const { isFetching, person } = nextProps

    if (!isFetching && !person) {
      this.props.fetchPerson({
        url: nextProps.personUrl
      }).catch(error => {
        console.error(error);
        this.props.history.push('/people')
      })
    }
  }

  close = () => {
    this.setState({
      isOpen: false
    })
    setTimeout(() => {
      if (this.props.history.location) {
        this.props.history.goBack()
      } else {
        this.props.history.push('/people')
      }
    }, 350)
  }

  render() {
    const { isOpen } = this.state
    const { isFetching, person } = this.props

    let body
    if (isFetching || !person) {
      body = <Loading />
    } else if (person) {
      body = <Planet planetUrl={person.homeworld} />
    }

    return (
      <Modal backdrop={true} isOpen={isOpen} toggle={this.close}>
        <ModalHeader> { person && <span> { person.name }'s </span> } Homeworld Planet </ModalHeader>
        <ModalBody>
          { body }
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.close}> Close </Button>
          </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isFetching, isFetchingPerson } = state.people
  const { match } = ownProps

  const personUrl = `${API_BASE_URL}people/${match.params.id}/`
  const props = {
    isFetching: isFetching || isFetchingPerson,
    person: getPerson({ state, url: personUrl }),
    personUrl
  }

  console.log(props);
  return props
}
const mapDispatchToProps = {
  fetchPerson
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworldPage)
