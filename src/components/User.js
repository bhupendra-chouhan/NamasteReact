const User = (props) => (
  <div className="user-container">
    <h2 className="user user-name">{props.firstname} Chouhan</h2>
    <h3 className="user user-location">Location: Bhilai</h3>
    <h3 className="user user-social">instagram : @thebhupi</h3>
    <p className="user-bio-para">Comming from User.js</p>
  </div>
);

export default User;
