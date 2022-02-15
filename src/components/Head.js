import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  background-color: #ffced5;
  padding-top: 15px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0;
    font-size: 20px;
    color: #343a40;
    text-align: center;
  }
  h3 {
    margin: 0;
    font-size: 28px;
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

function Head() {
  return (
    <HeadBlock>
      <h2>경영학부 엘리트 최민정!</h2>
      <h3> 🎉졸업축하해🎉</h3>
      <div className="notice">우리들의 축하메세지는 편지에💕</div>
    </HeadBlock>
  );
}

export default Head;
