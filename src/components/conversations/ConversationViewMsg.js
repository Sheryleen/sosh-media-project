import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

const ConversationViewMsg = props => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  let sender = props.users.filter(user => {
    if (user.id === props.msg.sender_id) {
      return user;
    }
  })[0];

  let recipient = props.users.filter(user => {
    if (user.id === props.msg.recipient_id) {
      return user;
    }
  })[0];

  //declaring a default value for sender
  let addressee = sender
    ? loggedInUser.id === sender.id
      ? "recipient"
      : "sender"
    : "";

  let name = sender
    ? loggedInUser.id === sender.id
      ? recipient.name
      : sender.name
    : "";

  // sender id is the user's name
  return (
    <ListGroupItem>
      <p>
        {addressee}: {name}
      </p>
      <p>{props.msg.body}</p>
    </ListGroupItem>
  );
};

//filtering through users id through senders id
const mapStateToProps = (state, props) => {
  return {
    users: state ? state.users.all : []
  };
};

ConversationViewMsg.propTypes = {};

export default connect(mapStateToProps)(ConversationViewMsg);
