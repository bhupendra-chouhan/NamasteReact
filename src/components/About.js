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
        <UserClass first_name={"Class"} last_name={"Chouhan"} />
        
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