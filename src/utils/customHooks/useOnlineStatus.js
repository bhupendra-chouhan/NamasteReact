// using custom hook to fetch Restaurant Menu items Data
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, _setOnlineStatus] = useState("🟢 Connected");

  useEffect(() => {
    window.addEventListener("online", (event) => {
      _setOnlineStatus("🟢 Connected");
    });
    window.addEventListener("offline", (event) => {
      _setOnlineStatus("🔴 Not Connected");
    });
  }, []);

  // console.log(onlineStatus);

  // export boolena
  return onlineStatus;
};

export default useOnlineStatus;
