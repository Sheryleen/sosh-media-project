import React,{useState} from 'react'
import PropTypes from 'prop-types';
import ConversationViewMsg from './ConversationViewMsg'
import { connect } from 'react-redux'
import { ListGroup, Col, Input } from 'reactstrap';
import NewConversationForm from './NewConversationForm';
import NewMsgForm from './NewMsgForm';

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


const ConversationView = props => {
    
    
    let messageList = props.messages.filter(msg => props.partiesInvolved.id === msg.sender_id || props.partiesInvolved.id === msg.recipient_id )
    
    
    let listOfMsgs = messageList.map((msg, i) => (
        <ConversationViewMsg key={i} msg={msg} />
    ))
    // if (props.other_person) {
        return (
            <>
                <ListGroup>{listOfMsgs}</ListGroup>
              
                
            </>
        )
}
ConversationView.propTypes = {}

//calling local storage to component
const mapStateToProps = (state, props) => {
    return {
        messages: state.messages.all.filter(
            msg =>
                loggedInUser.id === msg.sender_id || 
                loggedInUser.id === msg.recipient_id //if logged in user equals true enter and if not ignore
        ),
    }
}

export default connect(mapStateToProps) (ConversationView)