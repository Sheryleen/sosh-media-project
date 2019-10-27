import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'

const Comment = props => {
    return (
        <ListGroupItem>
            {props.user.name} - {props.comment.content}
        </ListGroupItem>
    )
}

const mapStateToProps = (state, props) => ({
    user: state.users.all.filter(user => user.id === props.comment.user_id)[0],
})
export default connect(mapStateToProps)(Comment)