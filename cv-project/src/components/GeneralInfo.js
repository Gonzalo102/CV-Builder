import React, { Component } from "react";
import locationLogo from "../images/location3.png"
import mailLogo from "../images/mail.png"
import linkedinLogo from "../images/linkedin.png"
import phoneLogo from "../images/phone.png"
import profilePicture from "../images/profilePicture.jpg"

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
          profilePhoto: profilePicture,
          linkedin: 'gonzalotrucco',
          email: 'gonzalo.trucco@gmail.com',
          phoneNumber: '027-670-555',
          address: 'Fake Street 123',
          edit: false
        };
      }

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

  render() {
    const { profilePhoto, linkedin, email, phoneNumber, address, edit } = this.state;
    return (
        <div id="general-info">
            <img id="profile-photo" src={profilePhoto} alt="profile"/>
            
            <h1 className="aside-title">Contact</h1>
            <div className="general-info-wrapper">
              <div className="info-wrapper">
                  <img id="locationLogo" src={locationLogo} alt="logo"/>
                  <p>{address}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={linkedinLogo} alt="logo"/>
                  <p>{linkedin}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={mailLogo} alt="logo"/>
                  <p>{email}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={phoneLogo} alt="logo"/>
                  <p>{phoneNumber}</p>
            </div>
            </div>
            {!edit && 
            <button
              id="edit-info-button"
              type="button"
              onClick={this.toggleEdit}
              >
              Edit
            </button>
            }
            {edit && 
              <form id="generalinfo-edit">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            name = "address"
                            type="text"
                            defaultValue={address}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="linkedin">Lnkedin</label>
                        <input
                            id="linkedin"
                            name = "linkedin"
                            type="text"
                            defaultValue={linkedin}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name = "email"
                            type="text"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                            id="phone-number"
                            name = "phoneNumber"
                            type="text"
                            value={phoneNumber}
                            onChange={this.handleChange}
                        />
                        <button
                            id="close-edit-info-button"
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
            }
        </div>

    );
  }
}

export default GeneralInfo;