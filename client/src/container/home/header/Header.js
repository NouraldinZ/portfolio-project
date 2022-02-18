import React, { useState } from "react";
import { TOTAL_SCREENS, getScreenIndex } from "../../../utilities/CommonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setselectedScreen] = useState(0);
  const [showHeaderOptions, setshowHeaderOptions] = useState(false);

  const updatedCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = getScreenIndex(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(
    updatedCurrentScreen
  );

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) {
      classes += "header-option-sperator";
    }

    if (selectedScreen === index) {
      classes += "selected-header-option";
    }
    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setselectedScreen(index);
    setshowHeaderOptions(false);
  };

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setshowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setshowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>ZEINA</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
