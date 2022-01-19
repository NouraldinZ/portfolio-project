import React from "react";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}
