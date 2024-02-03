import React from "react";

class UserClass extends React.Component {
  constructor (props) {
    super(props)
    // console.log(props)
  }

  render() {
    const {first_name, last_name} = this.props // Object Destructing
    
    return (
      <div className="user-container">
        <h2 className="user user-name">{first_name} {last_name}</h2>
        <h3 className="user user-location">Location: Bhilai</h3>
        <h3 className="user user-social">instagram : @thebhupi</h3>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;