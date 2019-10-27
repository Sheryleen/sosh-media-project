import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'
import Comment from './Comment'

const CommentList = props => {
    let listOfComments = props.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
    ))
    return <ListGroup>{listOfComments}</ListGroup>
}

const mapStateToProps = (state, props) => ({
    comments: state.comments.all.filter(
        comment => comment.status_id === props.status_id
    ),
})

export default connect(mapStateToProps)(CommentList)