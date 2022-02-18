import AboutMe from "../container/about-me/AboutMe";
import ContactMe from "../container/contact-me/ContactMe";
import Home from "../container/home/Home";
import Resume from "../container/resume/Resume";
import Testimonial from "../container/testmonial/Testimonial";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];

export const getScreenIndex = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
