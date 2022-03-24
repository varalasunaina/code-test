import React from "react";
import Blurbs from "./components/blurbs/Blurbs";
import Contact from "./components/contact/Contact";
import FriendsAndEnemies from "./components/friends/FriendsAndEnemies";
import Header from "./components/header/Header";
import Interests from "./components/interests/Interests";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <Profile />
          <Contact />
          <Interests />
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <Blurbs />
          <FriendsAndEnemies />
        </div>
      </div>
    </div>
  );
}

export default App;
