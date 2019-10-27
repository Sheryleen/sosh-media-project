import React from "react";
import { ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";
import Moment from "react-moment";
import { connect } from "react-redux";

const Status = ({ status, user }) => {
  if (user) {
    return (

        <ListGroupItem>
          <Row>
            <Col xs='2'>
              <img style={{ borderRadius: "20%" }} src={user.photo_url} alt="" />
            </Col>
            <Col xs='7'>
              <h5>{user.name}</h5>
              <p>{status.content}</p>
            </Col>
            <Moment format='MM/DD/YYYY HH:mm A'>{status.createdAt}</Moment>
          </Row>
        </ListGroupItem>
      );
    } else {
      return <div>Loading...</div>;
    }     
  };


const mapStateToProps = (state, props) => {
  return {
    user: state.users.all.filter(user => user.id === props.status.user_id)[0]
  };
}

export default connect(mapStateToProps)(Status);
