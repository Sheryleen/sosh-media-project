import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class TopNav extends React.Component {
  state = {
    isOpen: false
  };

  toggle =() => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    };
  
 
  render() {
    const user = this.props.users ? this.props.users.filter(user => user.id ==1)[0] : []
    
    return (
      <div>
        <Navbar color='primary' dark expand='md'>
          <NavbarBrand href='/'>Sosh</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen}navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>
                <Link to='/profile' style={{ textDecoration: 'none', color: '#fff' }}></Link> 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="" style={{ cursor: 'pointer' }} onClick={() => this.props.histotry.push('settings/1')}>
                Settings
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.all  
  }
}

export default TopNav;
