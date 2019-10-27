import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import StatusList from "../reusable/statuses/StatusList";
import { Button } from "reactstrap";
import BasicInfo from "./BasicInfo";
import UserType from "../../store/users/type";

const styles = {
  banner: {
    paddingLeft: 0,
    paddingRight: 0
  },
  bannerImg: {
    width: "100%"
  },
  section: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "15px 0"
  },
  topSection: {}
};

const UserProfile = (props) => {
    //console.log("props", props);
    let loggedInId = props.match.params.id 
    let users = props.users
    let user = users ? users.filter(user => user.id == loggedInId)[0] : []
    console.log(user)
    //let user=""
  

  if (user) {
    return (
      <Container fluid>
        <Row>
          <Col style={styles.banner}>
            <img
              src={`https://via.placeholder.com/1366x400?text=Profile of: ${user.name}`}
              alt='banner'
              style={styles.bannerImg}
            />
          </Col>
        </Row>
        <Row style={styles.section}>
          <Col sm={{ offset: 10 }}>
            <Button>Add a Friend</Button>
          </Col>
          <Row style={styles.section}>
            <Col className='middle-section'>
              {/* <BasicInfo  user={user}/> */}
            </Col>
            <Col>
              <h5> Contact Info</h5>
              <p>Phone:{user.phone}</p>
              <p> Email:{user.email}</p>
              <p> Address:{user.address}</p>
              <p>Company:{user.company}</p>
            </Col>
          </Row>
          <Row style={styles.section}>
            <StatusList />
          </Row>
        </Row>
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.users.all ? state.users.all : []
  };
};

UserProfile.propTypes = {
  ...UserType,
}

export default connect(mapStateToProps)(UserProfile);
