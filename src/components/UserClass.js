import React from "react";

class UserClass extends React.Component {
  constructor (props) {
    super(props);

    // Declaring Local state variables in a Class component:
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const {first_name, last_name} = this.props // Object Destructing

    const {count, count2} = this.state // Destructuring state object
    
    return (
      <div className="user-container">
        <h1 className="user user-name">Count = {count}</h1>
        <h1 className="user user-name">Count2 = {count2}</h1>
        <h2 className="user user-name">{first_name} {last_name}</h2>
        <h3 className="user user-location">Location: Bhilai</h3>
        <h3 className="user user-social">instagram : @thebhupi</h3>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;