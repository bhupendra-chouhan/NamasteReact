import {Component} from 'react' // Destructured the React
import User from './User'
import UserClass from './UserClass'

// A) About Class Component version:
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor is Called.");
  }

  componentDidMount() {
    // gets executed right after the componenet had rendered
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render() is called");

    return (
      <div className="about-container">
        <h1>About US</h1>
        <h2
          className="about-title"
          style={{ fontStyle: "italic", color: "orangered" }}
        >
          CEO
        </h2>

        {/* <User firstname={"Function"} lastname={"Chouhan"}/> */}
        <UserClass first_name={"Child_1"} last_name={"Chouhan"} />

        {console.log("Parent return() is called")}
      </div>
    );
  }
}

export default About

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