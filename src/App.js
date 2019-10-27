import React, { Component } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import { Container, Row, Col } from "reactstrap";
import SideNav from "./components/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/profile/UserProfile";
import UserSettings from "./components/auth/UserSetting";
import FriendsList from "./components/friends/FriendsList";
import Conversations from "./components/conversations/Conversations";
import Misc from "./components/Misc";


import { connect } from "react-redux";
import { fetchAllStatuses } from "./store/statuses/actions";
import { fetchAllUsers } from "./store/users/actions";
import { fetchAllMessages } from './store/messages/actions';
import { fetchAllComments } from './store/comments/actions';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import { bindActionCreators } from "redux";
import { fetchAllFriends } from "./store/friends/actions";

const styles = {
  noPadding: {
    padding: 0
  }
};

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllStatuses());
    this.props.dispatch(fetchAllUsers());
    this.props.dispatch(fetchAllFriends());
    this.props.dispatch(fetchAllMessages(loggedInUser.id));
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div className='App'>
          <TopNav />
          <Container fluid>
            <Row>
              <Col xs='2'>
                <SideNav />
              </Col>
              <Col>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/homepage' component={Dashboard} />
                  <Route path='/profile/:id' component={UserProfile} />
                  <Route path='/settings/:id' component={UserSettings} />
                  <Route path='/friends' component={FriendsList} />
                  <Route path='/conversations' component={Conversations} />
                </Switch>
              </Col>
              <Col xs='2'>
                <Misc />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
