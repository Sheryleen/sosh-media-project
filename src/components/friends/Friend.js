import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

const Friend = props => {
  // let user = props.users.length ? props.users.all.filter(user => true)[0] : [];
  // console.log("PROPS", props);
  // // user.id == props.friend.requesteeId
  return <div className=''>{props.friend.name}</div>;
};

const mapStateToProps = (state, props) => ({
  users: state.users
});

export default connect(mapStateToProps)(Friend);
