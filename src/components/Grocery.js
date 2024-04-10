import React, {useContext} from "react";
import UserContext from "../utils/contexts/UserContext";

const Grocery = () => {
  const {loggedInUser} = useContext(UserContext)
  
  return (
    <div>
      This is the grocery tab. Inside this tab we have multiple child
      components!!!.

      =&gt; comming fron UserContext: {loggedInUser}
    </div>
  );
};

export default Grocery;
