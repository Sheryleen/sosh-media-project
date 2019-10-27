import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConversationsListItem from "./ConversationsListItem";
import { ListGroup, Button } from "reactstrap";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const ConversationsList = props => {
  //adding the data to sort newest conversation to oldest
  let sortedMsgs = props.conversationsWithUsers.sort((a, b) => {
    let dateA = new Date(a.created_at);
    let dateB = new Date(b.created_at);
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });

  //filter through the messages of sender to match with recipient
  let filterMsgs = sortedMsgs.filter(msg =>
    props.sender
      ? props.sender.id === msg.sender_id ||
        props.sender.id === msg.recipient_id
      : {}
  );

  //map the filtered message to dispay the converdation
  let listOfConversationListItems = filterMsgs.map((id, i) => (
    <ConversationsListItem
      key={i}
      otherUserId={id}
      displayMsg={props.displayMsg}
    />
  ));
  return (
    <div>
     
     
     
     
      <ListGroup>{listOfConversationListItems} </ListGroup>
    </div>
  );
};

//create an array of the user ids loggedin user having conversations with
const mapStateToProps = state => ({
  conversationsWithUsers: state.messages.all.reduceRight((acc, msg) => {
    //if array aleady doesn't already have them, add them otherwise ignore and move on
    if (!acc.includes(msg.recipient_id) && !acc.includes(msg.sender_id)) {
      //if the message's recipient is mine, then push the sender's id to the array
      if (msg.recipient_id === loggedInUser.id) {
        acc.push(msg.sender_id);
      } else {
        acc.push(msg.recipient_id);
        //if the mesage's sender_id is mine, push the recipient's id to the array
      }
    }
    return acc;
  }, [])
});
export default connect(mapStateToProps)(ConversationsList);

ConversationsList.propTypes = {
  conversationsWithUsers: PropTypes.arrayOf(PropTypes.number)
};
