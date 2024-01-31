import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-container">
        <h2 className="user user-name">Bhupendra Chouhan</h2>
        <h3 className="user user-location">Location: Bhilai</h3>
        <h3 className="user user-social">instagram : @thebhupi</h3>
        <p className="user-bio-para">I am a software engineer.</p>
      </div>
    );
  }
}

export default UserClass;