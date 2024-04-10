import React, { Component } from "react"; // Destructured the React
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/contexts/UserContext";

// A) About Class Component version:
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor is Called.");
  }

  componentDidMount() {
    // gets executed right after the componenet had rendered
    console.log("Parent componentDidMount");

    // // Below function will be continuously getting invoked in every 1 second, till the user switch to a component other than this(About.js)
    {
      /*
    this.aboutInterval = setInterval(() => {
      console.log("setInterval from About.js component is called.");
    }, 1000);
    */
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate() lifecycle method is used to executed some code when particular props, states, DOM tree get updated or specific components is rerendered.

    if (this.state.count != prevState.count || this.state.count2 != prevState.count2) {
      // execute this block when states(either 'count' or 'count2') gets updated
    }
  }

  componentWillUnmount() {
    // The below code will stop the aboutInterval from being invoked after 0 seconds of the user switching to a different component.
    {
      /*
    setTimeout(() => {
        clearInterval(this.aboutInterval);
      }, 0);
    */
    }
  }

  render() {
    console.log("Parent render() is called");

    return (
      <div className="about-container text-center bg-orange-400 pb-2 rounded-xl">
        <h1>About US</h1>
        <h2
          className="about-title"
          style={{ fontStyle: "italic", color: "orangered" }}
        >
          CEO
        </h2>

        <User firstname={"Function"} lastname={"Chouhan"} />
        {/* <UserClass first_name={"Child_1"} last_name={"Chouhan"} /> */}

        {console.log("Parent return() is called")}

        {/* {console.log("!!!!!aboutInterval output: ", this)} */}

        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <div className="italic bold">
              =&gt; comming fron UserContext: {loggedInUser}
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;

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
