import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile-section">
      <h3>Sunaina Varala</h3>
      <div className="row">
        <div className="col-lg-6">
          <div>
            <img
              className="profile-name"
              src="./assets/profile.jpeg"
              alt="Sunaina Varala Profile"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <p>":-)"</p>
          <address>
            <pre>
              Female, <br />
              30 years old <br />
              Santa Monica, <br />
              CALIFORNIA <br />
              United States, <br />
            </pre>
          </address>
          <p className="my-1">Last Login:</p>
          <span>4/22/2006</span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
