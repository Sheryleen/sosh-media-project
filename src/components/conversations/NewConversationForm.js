import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  Col,
  Input,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { addMessage } from "../../store/messages/actions";
import { useSelector, useDispatch } from "react-redux";

const NewConversationForm = props => {
  let [name, setName] = useState("");
  let [msg, setMsg] = useState("");
  let [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const totalFriends = useSelector(state => state.friends.all);
  const users = useSelector(state => state.users.all);

  let hideList = "hide-list";

  let acceptedFriends = totalFriends.filter(
    friend =>
      (loggedInUser.id === friend.requestorId ||
        loggedInUser.id === friend.requesteeId) &&
      friend.accepted
  );

  let friendsList = users.filter(user => {
    for (let i = 0; i < acceptedFriends.length; i++) {
      if (
        (user.id === acceptedFriends[i].requestorId ||
          user.id === acceptedFriends[i].requesteeId) &&
        user.id !== loggedInUser.id &&
        acceptedFriends[i].accepted
      ) {
        return user;
      }
    }
  });

  let recipient = friendsList.filter(
    friend => friend.name.toLowerCase() === name.toLowerCase()
  )[0];

  let listOfFriends = friendsList
    .filter(friend => friend.name.toLowerCase().includes(name.toLowerCase()))
    .map(friend => (
      <ListGroupItem key={friend.id}>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => handleHide(friend.name)}
        >
          {friend.name}
        </button>
      </ListGroupItem>
    ));

  let newMessage = {
    sender_id: loggedInUser.id,
    recipient_id: recipient ? recipient.id : "",
    body: msg
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addMessage(newMessage));
  };
  const handleHide = friendName => {
    setName(friendName);
    setHide(true);
  };
  console.log(newMessage);
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Col sm={10}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            name='name'
            id='name'
            placeholder='Friend'
          />
          <div className={hide ? hideList : (hideList = "")}>
            <ListGroup>{listOfFriends}</ListGroup>
          </div>
        </Col>
        <Col sm={10}>
          <Input
            onChange={e => setMsg(e.target.value)}
            type='text'
            name='msg'
            id='msg'
            placeholder='Message'
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button size='md' disabled={msg === ""} type='submit'>
          {" "}
          Add New Message
        </Button>
      </FormGroup>
    </Form>
  );
};

NewConversationForm.propTypes = {};

export default NewConversationForm;
