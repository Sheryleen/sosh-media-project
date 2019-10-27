import React from "react";
import NewStatusForm from "./NewStatusForm";
import StatusList from "../reusable/statuses/StatusList";
import SideNav from "../SideNav";
import Misc from "../Misc";

const Dashboard = () => {
  return (
    <div className='col-md-9' style={{ width: "100%", padding: "0px" }}>
      <NewStatusForm />
      <StatusList />
      <Misc /> 
    </div>
  );
};

export default Dashboard;
