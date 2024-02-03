import React from "react";

class UserClass extends React.Component {
  constructor (props) {
    super(props);

    // Declaring Local state variables in a Class component:
    this.state = {
      count: 0,
      count2: 0
    };
  }

  render() {
    const {first_name, last_name} = this.props // Object Destructing

    const {count, count2} = this.state // Destructuring state object
    
    return (
      <div className="user user-container">
        <div>
          <h1 className="user user-name">Count = {count} &nbsp;</h1>
          <h1 className="user user-name">Count2 = {count2} &nbsp;</h1>
          <button
            className="user user-btn"
            onClick={() =>
              this.setState({
                count: this.state.count + 10,
                count2: this.state.count2 + 2,
              })
            }
          >
            Increase Count
          </button>
        </div>

        <h2 className="user user-name">
          {first_name} {last_name}
        </h2>
        <h3 className="user user-location">Location: Bhilai</h3>
        <h3 className="user user-social">instagram : @thebhupi</h3>
        <p className="user-bio-para">Comming from UserClass.js</p>
      </div>
    );
  }
}

export default UserClass;