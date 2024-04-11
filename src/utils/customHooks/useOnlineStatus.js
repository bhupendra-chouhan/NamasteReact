// using custom hook to fetch Restaurant Menu items Data
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, _setOnlineStatus] = useState("🟢:)");

  useEffect(() => {
    window.addEventListener("online", (event) => {
      _setOnlineStatus("🟢:)");
    });
    window.addEventListener("offline", (event) => {
      _setOnlineStatus("🔴:(");
    });
  }, []);

  // console.log(onlineStatus);

  // export boolena
  return onlineStatus;
};

export default useOnlineStatus;
