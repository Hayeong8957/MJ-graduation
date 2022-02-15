import React from "react";
import styled from "styled-components";
import "../style/styles.css";

const Mj6 = styled.div`
  position: relative;
`;
function HomeImg() {
  return (
    <Mj6>
      <img className="textBubble" src="img/textBubble.png" />
      <img className="heart" src="img/heart.png" />
      <img className="minjeongImg6" src="img/mj6.png" />
    </Mj6>
  );
}

export default HomeImg;
