import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "./style/styles.css";
import Template from "./components/Template";
import Menu from "./components/Menu";
import PhotoBookImg from "./components/PhotoBookImg";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const HeadBlock = styled.div`
  background-color: #ffced5;
  padding-top: 15px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0;
    margin-bottom: 7px;
    font-size: 15px;
    color: #343a40;
    text-align: center;
  }
  h3 {
    margin: 0;
    margin-bottom: 7px;
    font-size: 20px;
    text-align: center;
    color: #343a40;
  }
  .notice {
    margin-top: 4px;
    color: #757c83;
    font-size: 14px;
    text-align: center;
    font-family: "Cafe24SsurroundAir";
  }
  @font-face {
    font-family: "Cafe24SsurroundAir";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

function PhotoBook() {
  return (
    <>
      <GlobalStyle />
      <p className="warning">모바일 환경만 지원합니다🙌</p>

      <Template>
        <Menu />
        <HeadBlock>
          <h2>우리끼리 모였을 때가 제일 재밌어</h2>
          <h3>경영학부 18 술팸 포에버</h3>
          <div className="notice">이곳은 우리의 추억이 담긴 공간💕</div>
        </HeadBlock>
        <PhotoBookImg />
      </Template>
      <p className="warning">👩‍🎓2022.02.16🌷</p>
    </>
  );
}

export default PhotoBook;
