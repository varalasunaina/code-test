import React, { useState } from "react";
import "./FriendsAndEnemies.css";

const FriendsAndEnemies = () => {
  const list = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
  const [isEnemies, setIsEnemies] = useState(false);

  const handleToggleEnemies = () => {
    setIsEnemies((prevState) => !prevState);
  };
  return (
    <section className="friends">
      <h3 className="title-header">Sunaina's {isEnemies ? 'Enemies' : 'Friends'} Space</h3>
      <div className="d-flex flex-wrap">
        {list.map((friend, index) => {
          const pIndex = index > 5 ? index - 6 : index;
          const path = isEnemies
            ? `./assets/cat-images/cat-${pIndex + 1}.jpg`
            : `./assets/dog-images/dog-${pIndex + 1}.jpg`;
          return (
            <div key={index}>
              <h4 className="title">{ isEnemies ? 'Cat ' : 'Dog '} {index+1}</h4>
            <img
              key={index}
              src={path}
              alt="Dog Image 1"
              className="friend-image"
            />
            </div>
          );
        })}
      </div>
      <button aria-label="Toggle Friends and Enemies" className={`btn ${isEnemies ? 'btn-secondary' : 'btn-primary'}`} onClick={handleToggleEnemies}>
        {isEnemies ? "View Sunaina's Friends" : "View Sunaina's Enemies"}{" "}
      </button>
    </section>
  );
};

export default FriendsAndEnemies;
