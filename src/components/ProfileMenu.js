import React, { Component } from 'react'
import NotificationIcon from '../assets/header_menu/bell.svg'
import TicketHistoryIcon from '../assets/header_menu/ticket_history.svg'
import AboutUsIcon from '../assets/header_menu/aboutus.svg'
import CustomerHelpIcon from '../assets/header_menu/customer.svg'
import SettingsIcon from '../assets/header_menu/setting.svg'
import { NavLink } from 'react-router-dom'


class ProfileMenu extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }
  }
  
  render() {
    return (
      <div className="overlay-fixed profile-container">
        <div className="menu-container">
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
            <NavLink to="/login" className="menu-login-btn">Login</NavLink>
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="option option1">
                <img src={NotificationIcon} alt="notifications" />
                <span className="menu-option notification">Booked Ticket</span>
              </li>
              <li className="option option2">
                <img src={TicketHistoryIcon} alt="ticket history" />
                <span className="menu-option ticket-hist">Ticket History</span>
              </li>
              <li className="option option3">
                <img src={AboutUsIcon} alt="about us" />
                <span className="menu-option about-us">About Us</span>
              </li>
              <li className="option option4">
                <img src={CustomerHelpIcon} alt="customer help" />
                <span className="menu-option cust-help">Customer Help</span>
              </li>
              <li className="option option5">
                <img src={SettingsIcon} alt="settings" />
                <span className="menu-option settings">Settings</span>
              </li>
              <li className="option-close option6">
                <NavLink to="/" className="span">Close</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMenu
