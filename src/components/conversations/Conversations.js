import React, { useState } from "react";
import { connect } from "react-redux";
import ConversationsList from "./ConverationsList";
import ConversationView from "./ConversationView";
import { Col, Container, Row, Button } from "reactstrap";
import NewConversationForm from "./NewConversationForm";
import NewMsgForm from "./NewMsgForm";

const styles = {
  noPadding: {
    padding: 0
  }
};

const Conversations = props => {
  //declaring local state
  let [partiesInvolved, setPartiesInvolved] = useState({});
  let loggedInUser = Number(props.match.params.id) || 0;
  let [displayNewForm, setDisplayNewForm] = useState(false);
  let [replyForm, setReplyForm] = useState(false);

  //set local state when button is clicked
  let displayMsg = (sender, e) => {
    setPartiesInvolved(sender);
    setReplyForm(true);
    setDisplayNewForm(false);
  };
  let displayForm = () => {
    setDisplayNewForm(true);
    setPartiesInvolved({});
    setReplyForm(false);
  };

  let displayConvForm = "display-form";

  let listOfMessages = "list-of-messages ";
  let replyMsgForm = "reply-form";

  
  return (
    
    <Row>
      <Col style={styles.noPadding} xs={4}>
        <Button block color='success' onClick={() => displayForm()}>
          Start a New Conversation
        </Button>
        <ConversationsList
          partiesInvolved={partiesInvolved}
          displayMsg={displayMsg}
          displayForm={displayForm}
        />
      </Col>
      <Col>
        <div
          className={!partiesInvolved ? listOfMessages : (listOfMessages = "")}
        >
          <ConversationView partiesInvolved={partiesInvolved} />
        </div>
        <div
          className={displayNewForm ? (displayConvForm = "") : displayConvForm}
        >
          <NewConversationForm />
        </div>
        <div className={replyForm ? (replyMsgForm = "") : replyMsgForm}>
          <NewMsgForm otherPerson={partiesInvolved} />
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.all
  };
};
export default connect(mapStateToProps)(Conversations);
