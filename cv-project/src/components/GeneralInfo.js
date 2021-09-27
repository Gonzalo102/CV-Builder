import React, { Component } from "react";
import locationLogo from "../images/location.png"

class GeneralInfo extends Component {
    constructor() {
        super();
        //this.inputName = React.createRef();
        this.state = {
          profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
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
            
            <h1>Contact</h1>
            <div className="general-info-wrapper">
              <div className="info-wrapper">
                  <img id="locationLogo" src={locationLogo} alt="logo"/>
                  <p>{address}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={locationLogo} alt="logo"/>
                  <p>{linkedin}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={locationLogo} alt="logo"/>
                  <p>{email}</p>
              </div>
              <div className="info-wrapper">
                  <img id="locationLogo" src={locationLogo} alt="logo"/>
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
                            //ref={this.inputName}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="linkedin">Lnkedin</label>
                        <input
                            id="linkedin"
                            name = "linkedin"
                            type="text"
                            defaultValue={linkedin}
                            //ref={this.inputName}
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
{/*                         <button
                            type="button"
                            onClick={this.submitChanges}
                        >
                            Edit Experience
                        </button> */}
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