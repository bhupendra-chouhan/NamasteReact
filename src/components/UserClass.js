import React from "react";
import { USER_DATA_FETCH_API_LINK } from '../utils/constants'

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Declaring Local state variables in a Class component:
    this.state = {
      fullName: "{DEFAULT}",
      userName: "{DEFAULT}",
      location: "{DEFAULT}",
      profile_url: "{DEFAULT}",
      bio: "{DEFAULT}",
    };

    console.log(props.first_name, "Child Constructor is Called.");
  }

  async componentDidMount() {
    // gets called right after the componenet had rendered for the first time
    console.log(this.props.first_name, "Child componentDidMount");

    // Making API call:
    const userData = await fetch(USER_DATA_FETCH_API_LINK);

    const userDataJSON = await userData.json();

    // debugger; // Adding a Debugger Breakpoint

    // console.log(userDataJSON)
    this.setState({
      fullName: userDataJSON?.name,
      userName: userDataJSON?.login,
      location: userDataJSON?.location,
      profile_url: userDataJSON?.html_url,
      bio: userDataJSON?.bio,
    });
  }

  componentDidUpdate() {
    // gets called right after the componenet had updated and re-rendered
    console.log(this.props.first_name, "Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    // gets called right after the componenet is unmounted and removed from the DOM
    console.log(this.props.first_name, "Child ComponentWillUnmount");
  }

  render() {
    const { first_name, last_name } = this.props; // Object Destructing

    const { fullName, userName, location, profile_url, bio } = this.state;

    console.log(first_name, "Child render() is called");

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
        <h4 className="user user-location">Bio: {bio}</h4>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;


/*

Execution sequence to all the Class component lifecycle phases:


# ------------> Parent(About.js) component class Phase:
-Parent Constructor()
-Parent render()


# ------------> Child(UserClass.js) Component Mounting Phase:

  --Child constructor(<Default Data>)
    <default State>
  --Child render(<Default Data>)
    ---<HTML Dummy>
    --Child componentDidMount()
    <API Call>
    <this.setState>
    

# ------------> Parent(About.js) component Class Phase:
    -Parent componentDidMount()

    
# ------------> Child(UserClass.js) Component Updating Phase (After Fetching API and Redering Data):
    
    --Child render(<API DATA>)
      ---<HTML with new API Data>
  --Child componentDidUpdate()

*/
