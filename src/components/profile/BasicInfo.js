import React from "react";
import UserType from "../../store/users/type";
import { Container, Row, Col } from "reactstrap";

const InfoField = ({ field, value }) => (
  <p className='text-center'>
    <b>{field};</b> (value)
  </p>
);
const BasicInfo = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col>
          <InfoField field='Name' value={user.name} />
        </Col>
        <Col>
          <InfoField field='Company' value={user.company} />
        </Col>
        <Col>
          <InfoField field='Phone' value={user.phone} />
        </Col>
        <Col>
          <InfoField field='Address' value={user.address} />
        </Col>
      </Row>
    </Container>
  );
};

BasicInfo.propTypes = {
  ...UserType
};

export default BasicInfo;
