import React from "react";
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const loggedIn = localStorage.getItem('loggedInUser')
  const loggedInUser = JSON.parse(loggedIn)
  return (
    <ListGroup>
      <NavLink to='/homepage'>
        <ListGroupItem>Home</ListGroupItem>
      </NavLink>
      <NavLink to={`/profile/${loggedInUser.id}`} >
        <ListGroupItem>Profile</ListGroupItem>
      </NavLink>
      <NavLink to='/friends'>
        <ListGroupItem>Friends</ListGroupItem>
      </NavLink>
      <NavLink to='/conversations'>
        <ListGroupItem>Conversations</ListGroupItem>
      </NavLink>
    </ListGroup>
  );
};

export default SideNav;
