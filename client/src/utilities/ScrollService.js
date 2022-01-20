import { TOTAL_SCREENS } from "./CommonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");

    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");

    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rect.top;
    let elementBottom = rect.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event.length < 1)) return;

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);

      if (!screenFromDOM) continue;

      let fullyVisbile = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisbile || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRedered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRedered"] = true;
          break;
        }

        if (fullyVisbile) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
