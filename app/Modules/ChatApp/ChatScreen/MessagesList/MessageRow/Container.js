import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MessageRow from './Component'

import firebaseService from '../../../../../Services/firebase'

class MessageRowContainer extends Component {

  render() {
    // const isCurrentUser = firebaseService.auth().currentUser.email == this.props.message.user.email;
      const isCurrentUser = true;
    return (
      <MessageRow
        message={this.props.message}
        isCurrentUser={isCurrentUser}/>
    );
  }
}

MessageRowContainer.propTypes = {
  message: PropTypes.object.isRequired,
}

export default MessageRowContainer
