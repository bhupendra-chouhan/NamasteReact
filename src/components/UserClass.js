import React from "react";
import { USER_DATA_FETCH_API_LINK } from "../utils/constants";

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

    // // Below function will be continuously getting invoked in every 1 second, till the user switch to a component other than this(UserClass.js)
    this.userClassInterval = setInterval(() => {
      console.log("setInterval from UserClass.js component is called.");
    }, 1000);
  }
  

  componentDidUpdate() {
    // gets called right after the componenet had updated and re-rendered
    console.log(this.props.first_name, "Child ComponentDidUpdate");

    // componentDidUpdate() lifecycle method is used to executed some code when particular props, states, DOM tree get updated or specific components is rerendered:

    if (
      this.state.count != prevState.count ||
      this.state.count2 != prevState.count2
    ) {
      // execute this block when states(either 'count' or 'count2') gets updated
    }
    if (this.state.count3 != prevState.count3) {
      // execute this block when 'count3' state gets updated
    }
  }


  componentWillUnmount() {
    // gets called right after the componenet is unmounted and removed from the DOM

    console.log(this.props.first_name, "Child componentWillUnmount");

    // The below code will stop the aboutInterval from being invoked after 0 seconds of the user switching to a different component.
    setTimeout(() => {
      clearInterval(this.userClassInterval);
    }, 0);
  }

  render() {
    const { first_name, last_name } = this.props; // Object Destructing

    const { fullName, userName, location, profile_url, bio } = this.state;

    console.log(first_name, "Child render() is called");

    return (
      <div className="user user-container">
        <h3 className="user">Class Compnoent</h3>
        <h2 className="user">{fullName}</h2>
        <h3 className="user">Location: {location}</h3>
        <h3 className="user user-social">
          Gihub Username :{" "}
          <a href={profile_url} target="_blank">
            {" "}@{userName}{" "}
          </a>
        </h3>
        <h4 className="user">Bio: {bio}</h4>
        <p className="user">Comming from UserClass.js</p>
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
