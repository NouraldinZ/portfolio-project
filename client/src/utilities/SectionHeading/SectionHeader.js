import React from "react";
import "./SectionHeader.css";

export default function SectionHeader(props) {
  return (
    <div className="header-container">
      <div className="section-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="section-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
