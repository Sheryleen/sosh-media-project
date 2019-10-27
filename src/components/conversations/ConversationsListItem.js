import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ListGroupItem, Button, CardImg, Row, Col } from "reactstrap";
import UserType from "../../store/users/type";

const ConversationsListItem = props => {
  const otherUser = props.users.find(user => user.id === props.otherUserId);
  console.log(otherUser);
  return (
    <ListGroupItem>
      <Row>
        <Col xs='4'>
          <CardImg
            className='photo'
            top
            src={otherUser ? otherUser.photo_url : ""}
            alt='Card image cap'
          />
        </Col>
        <Col xs='8'>
          <Button
            className='mt-5'
            color='primary'
            onClick={e => props.displayMsg(otherUser)}
          >
            {otherUser ? otherUser.name : ""}
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

const mapStateToProps = (state, props) => ({
  users: state.users.all
});

export default connect(mapStateToProps)(ConversationsListItem);

ConversationsListItem.propTypes = {
  ...UserType
};
