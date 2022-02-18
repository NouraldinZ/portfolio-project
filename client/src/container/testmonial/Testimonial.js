import React from "react";
import OwlCarousel from "react-owl-carousel";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import SectionHeading from "../../utilities/SectionHeading/SectionHeader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreenHandler !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceInRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <SectionHeading
        title="Testimonial"
        subHeading="What My Employers Say About Me?"
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I patronized Ehizeex and
                      when He delivered, I honestly fell in love with the
                      project He is a very honest guy and he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-hald-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require(`../../assets/testimonial/lady.png`)} />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I patronized Ehizeex and
                      when He delivered, I honestly fell in love with the
                      project He is a very honest guy and he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require(`../../assets/testimonial/daisy.jpg`)} />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I patronized Ehizeex and
                      when He delivered, I honestly fell in love with the
                      project He is a very honest guy and he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-hald-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require(`../../assets/testimonial/mike.png`)} />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
