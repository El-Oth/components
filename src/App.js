import "./App.css";

import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <>
      <div  className="profile">
        <FullName/>
        <ProfilePhoto/>
      </div>
      <Address/>
    </>
  );
}

export default App;
