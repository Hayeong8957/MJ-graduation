import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Head from "./components/Head";
import Menu from "./components/Menu";
import HomeImg from "./components/HomeImg";
import "./style/styles.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function Home() {
  return (
    <>
      <GlobalStyle />
      <p className="warning">모바일 환경만 지원합니다🙌</p>
      <Template>
        <Menu />
        <Head />
        <HomeImg />
      </Template>
      <p className="warning">👩‍🎓2022.02.16🌷</p>
    </>
  );
}

export default Home;
