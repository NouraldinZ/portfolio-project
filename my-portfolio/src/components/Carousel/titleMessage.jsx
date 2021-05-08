import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import TextLoop from "react-text-loop";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const values = [
  "I am a Computer Engineer",
  "I am a Software Engineer",
  "I am a Full Stack Developer",
  "I am passionate about Mobile and Web Development",
];

const TitleMessage = () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 10000);

    return () => clearInterval(action);
  }, [dencrypt]);
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="main text-center mb-3"></div>
        Hello, My name is
        <br />
        <span>
          <TextLoop delay={5000}>
            <strong>Nour Zeina</strong>
            <strong>Nour</strong>
            <strong>Zeina</strong>
            <strong>Nouraldin Zeina</strong>
            <strong>Nouraldin</strong>
            <strong>Zeina</strong>
          </TextLoop>
        </span>
        <div className="sub">
          <span>
            <strong>{result}</strong>
          </span>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;
