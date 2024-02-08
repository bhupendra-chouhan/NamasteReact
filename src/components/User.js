import { useState, useEffect } from "react";
import { USER_DATA_FETCH_API_LINK } from "../utils/constants";

const User = (props) => {
  const { firstname, lastname } = props; // Object Destructing

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [bio, setBio] = useState("");

  const fetchDataFromUserAPI = async () => {
    const userData = await fetch(USER_DATA_FETCH_API_LINK);
    const userDataJSON = await userData.json();

    // console.log(userDataJSON);

    setFullName(userDataJSON.name);
    setUserName(userDataJSON.login);
    setLocation(userDataJSON.location);
    setProfileUrl(userDataJSON.html_url);
    setBio(userDataJSON.bio);
  };

  // API Call in functional component:
  useEffect(async () => {
    fetchDataFromUserAPI();

    // // Below function will be continuously getting invoked in every 1 second, till the user switch to a component other than this(User.js)
    const userInterval = setInterval(() => {
      console.log("setInterval from User.js component is called.");
    }, 1000);

    return () => {
      // gets called right after the componenet is unmounted and removed from the DOM

      console.log(firstname, lastname, "Functional componentWillUnmount");

      // The below code will stop the aboutInterval from being invoked after 0 seconds of the user switching to a different component.
      setTimeout(() => {
        clearInterval(userInterval);
      }, 0);
    };
  }, []);


  // Using useEffect() Hook to execute some code when particular props, states, DOM tree get updated or specific components is rerendered:
  useEffect(() => {
    // execute this block when states(either 'count' or 'count2') gets updated
  }, [count, count2]);

  useEffect(() => {
    // execute this block when state 'count3' gets updated
  }, [count3]);


  return (
    <div className="user user-container">
      <h3 className="user">Function Component</h3>
      <h2 className="user">{fullName}</h2>
      <h3 className="user">Location: {location}</h3>
      <h3 className="user">
        Github Username :{" "}
        <a href={profileUrl} target="_blank">
          {" "}
          @{userName}{" "}
        </a>
      </h3>
      <h4 className="user">Bio: {bio}</h4>
      <p className="user">Comming from User.js</p>
    </div>
  );
};

export default User;
