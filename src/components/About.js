import {Component} from 'react' // Destructured the React
import User from './User'
import UserClass from './UserClass'

// A) About Class Component version:
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor is Called.");
  }

  componentDidMount(){ // gets executed right after the componenet had rendered
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
        <UserClass first_name={"Child_2"} last_name={"Musk"} />
        <UserClass first_name={"Child_3"} last_name={"Sounu"} />

        {console.log("Parent return() is called")}
      </div>
    );
  }
}


// B) About Functional Component version:
// const About = () => {
//   return (
//     <div className='about-container'>
//         <h1>About US</h1>
//         <h2 className="about-title" style={{"fontStyle": "italic", "color": "orangered"}}>CEO</h2>
        
//         {/* <User firstname={"Function"} lastname={"Chouhan"}/> */}
//         <UserClass first_name={"Class"} last_name={"Chouhan"}/>
//     </div>
//   )
// }

export default About


{
  /*
How Life cycle process will happen here:

# RENDER PAHSE of Parent:
-Constructor of Parent
-Render of Parent
  
  # RENDER PHASE of Childs:
    --Constructor of Child_1
    --Render of Child_1

    --Constructor of Child_2
    --Render of Child_2

    --Constructor of Child_3
    --Render of Child_3

  # COMMIT PHASE of Childs:
  --componentDidMount of Child_1
  --componentDidMount of Child_2
  --componentDidMount of Child_3

# COMMIT PHASE of Parent:
-componentDidMount of Parent
  */
}