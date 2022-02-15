import React from "react";
import styled from "styled-components";
import "../style/styles.css";

const Together = styled.div`
  position: relative;
  overflow: auto;
  text-align: center;
`;

function PhotoBookImg() {
  return (
    <Together>
      <img className="together1" src="img/together1.jpg" />
      <img className="together2" src="img/together2.jpg" />
      <img className="together3" src="img/together3.jpg" />
      <img className="together4" src="img/together4.jpg" />
      <img className="together5" src="img/together5.jpg" />
      <img className="together6" src="img/together6.jpg" />
      <img className="three1" src="img/three1.jpg" />
      <img className="three2" src="img/three2.jpg" />
      <img className="three3" src="img/three3.jpg" />
      <img className="three4" src="img/three4.jpg" />
      <img className="three5" src="img/three5.jpg" />
      <img className="three6" src="img/three6.jpg" />
    </Together>
  );
}

export default PhotoBookImg;
