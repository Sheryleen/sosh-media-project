import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { addMessage } from "../../store/messages/actions";
import { connect } from "react-redux";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

class NewMsgForm extends React.Component {
  state = {
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addMessage({
      sender_id: loggedInUser.id,
      recipient_id: this.props.otherPerson.id,
      body: this.state.body
    });
    this.setState({ body: "" });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <InputGroup>
          <Input
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
            type='text'
            placeholder='Enter New Messager...'
          />
          <InputGroupAddon addonType='append'>
            <Button
              size='md'
              disabled={this.state.body ? false : true}
              type='submit'
            >
              {" "}
              Add New Message
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser
});

export default connect(
  mapStateToProps,
  { addMessage }
)(NewMsgForm);

// < InputGroup >
// <Input
//     autoFocus
//     style={{ width: '100%' }}
//     type='text'
//     name='body'
//     placeholder='Enter New Message...'
//     onChange={e => this.setState({ body: e.target.value })}
//     value={this.state.body}
// />

// <InputGroupAddon addonType="append">
//     <InputGroupText>@example.com</InputGroupText>
// </InputGroupAddon>
//             </InputGroup >
