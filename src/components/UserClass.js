import React from "react";
import { USER_DATA_FETCH_API_LINK } from '../utils/constants'

class UserClass extends React.Component {
  constructor (props) {
    super(props);

    // Declaring Local state variables in a Class component:
    this.state = {
      fullName: "", 
      userName: "", 
      location: "",
      profile_url: "",
    }

    // console.log(props.first_name, "Child Constructor is Called.")
  }

  componentDidMount() { // gets executed right after the componenet had rendered
    // console.log(this.props.first_name, "Child componentDidMount");

    // Making API call:
    this.fetchUser()
  }

  fetchUser = async() => {
    const userData = await fetch(USER_DATA_FETCH_API_LINK);

    const userDataJSON = await userData.json()

    console.log(userDataJSON)
    this.setState({
      fullName : userDataJSON?.name,
      userName : userDataJSON?.login,
      location : userDataJSON?.location,
      profile_url : userDataJSON?.html_url,
    })
  }

  render() {
    const {first_name, last_name} = this.props // Object Destructing
    
    const { fullName, userName, location, profile_url } = this.state;

    // console.log(first_name, "Child render() is called")
    

    return (
      <div className="user user-container">
        <h2 className="user user-name">{fullName}</h2>
        <h3 className="user user-location">Location: {location}</h3>
        <h3 className="user user-social">
          Gihub Username :{" "}
          <a href={profile_url} target="_blank">
            {" "}
            @{userName}{" "}
          </a>
        </h3>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;