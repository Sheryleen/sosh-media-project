import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { addStatus } from "../../store/statuses/actions";
import { connect } from "react-redux";

class NewStatusForm extends React.Component {
  state = {
    newStatus: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addStatus({
        content: this.state.newStatus
      })
    );
  };

  render() {
    return (
      <Card>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='newStatus'>Add New Status </Label>
              <input
                type='text'
                id='newStatus'
                onChange={e => this.setState({ newStatus: e.target.value })}
              />
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default connect()(NewStatusForm);
