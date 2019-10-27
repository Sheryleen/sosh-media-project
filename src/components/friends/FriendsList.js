import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { Jumbotron, Button } from "reactstrap";

const FriendsList = props => {
  const loggedIn = localStorage.getItem("loggedInUser");
  const loggedInUser = JSON.parse(loggedIn);
  console.log("loggedIn", loggedIn);
  console.log("loggedInUser", loggedInUser);
 
  let friendRequest = props.friends.filter(friend => 
      friend.accepted &&
      (friend.requesteeId === loggedInUser.id ||
        friend.requestorId === loggedInUser.id)
  );
  let friendsList = props.users.filter(user => {
    for (let i = 0; i < friendRequest.length; i++){
      if (((user.id === friendRequest[i].requestorId || user.id === friendRequest[i].requesteeId) && user.id !== loggedInUser.id) && friendRequest[i].accepted === true){
        return user
      }
    }
})
  let listOfFriends=friendsList.map(friend =>(<Friend key={friend.id} friend={friend}/>))
    
  return (
    <div>
      <Jumbotron className='friend-container'>
        <h1 className='display-3 center'>FRIENDS</h1>
        <p className='lead'></p>
        <p className='lead'>
          <Button color='primary'>Add Friend</Button>
        </p>
      </Jumbotron>
      <div>{listOfFriends}</div> 
    </div>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    friends: state.friends.all,
    users: state.users.all
  };
};

export default connect(mapStateToProps)(FriendsList);
