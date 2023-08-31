import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
      />
    </div>
    <div className="navitems">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const RestaurantCards = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a"
      />
      <h3>The Good Bowl</h3>
      <h3>4.5 star</h3>
      <h3>Biryani</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rescontainer">
        <RestaurantCards />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
