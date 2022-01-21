import React from "react";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import "./Home.css";
import Header from "./header/Header";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
