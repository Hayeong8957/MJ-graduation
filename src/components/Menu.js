import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuBlock = styled.div`
  background-color: #ff98a6;
  padding-top: 5px;
  padding-bottom: 5px;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;

  button {
    color: black;
    width: 100%;
    background-color: #ff98a6;
    display: inline-block;
    border: none;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
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

function Menu() {
  const navigate = useNavigate();
  const GotoHome = (e) => {
    navigate("/");
  };
  const GotoPhotoBook = (e) => {
    navigate("/photobook");
  };

  const GotoGuestBook = (e) => {
    navigate("/guestbook");
  };

  return (
    <MenuBlock>
      <button onClick={GotoHome}>&nbsp;&nbsp;홈&nbsp;&nbsp;</button>

      <button onClick={GotoPhotoBook}>사진첩</button>

      <button onClick={GotoGuestBook}>편지&nbsp;&nbsp;</button>
    </MenuBlock>
  );
}

export default Menu;
