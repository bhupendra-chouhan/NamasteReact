import {useState} from "react"

const User = (props) => {
  const {firstname, lastname} = props // Object Destructing

  // Declaring Local state variables in a functional component:
  const [count, _setcount] = useState(0);
  const [count2, _setcount2] = useState(2);

  return (
    <div className="user-container">
      <h1 className="user user-name">Count = {count}</h1>
      <h1 className="user user-name">Count2 = {count2}</h1>
      <h2 className="user user-name">{firstname} {lastname}</h2>
      <h3 className="user user-location">Location: Bhilai</h3>
      <h3 className="user user-social">instagram : @thebhupi</h3>
      <p className="user-bio-para">Comming from User.js</p>
    </div>
  )
};

export default User;
