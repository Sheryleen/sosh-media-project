import React from "react";
import Status from "./Status";
import { connect } from "react-redux";



const StatusList = props => {
  // console.log (props)
    let listOfStatuses = props.statuses.all.map(status => (
      <Status key={status.id} status={status} />
    ))

    return <div>{listOfStatuses}</div>;
  }


const mapStateToProps=state => {
  return {
    statuses: state.statuses,
    
  };
}

export default connect(mapStateToProps)(StatusList);
