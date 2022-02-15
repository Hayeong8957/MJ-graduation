import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Template from "./components/Template";
import Menu from "./components/Menu";
import "./style/styles.css";

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
const InputListBlock = styled.div`
  flex: 1;
  padding: 5px 5px;
  padding-bottom: 5px;
  overflow-y: auto;
  // background-color: gray;
`;
const InputContainer = styled.div`
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 0;
  width: 90%;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 10px;

  h3 {
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  span {
    font-size: 12px;
  }
`;

function GuestBook() {
  return (
    <>
      <GlobalStyle />
      <p className="warning">모바일 환경만 지원합니다🙌</p>

      <Template>
        <Menu />
        <HeadBlock>
          <h2>우리가 제일 많이 졸업 축하함 RG?</h2>
          <h3>두고두고 간직해라😎</h3>
          <div className="notice">우리의 마음이 담긴...✍</div>
        </HeadBlock>
        <InputListBlock>
          <InputContainer>
            <h3>From. 신하영</h3>
            <span>
              민정아 졸업 1빠로 하니까 기분이 어때?ㅎㅎ 난 아직도 설렘 때의
              민정이를 기억하고 있어... 입학하기도 전에 정말 깜찍한 말투로 내게
              카톡을 보내온 너... 너의 그 깜찍함과 용기는 정말 두고두고 생각날
              거야 ㅎㅎ 어느덧 4년이라는 시간이 흐르게 되었고 우리들도 졸업
              시즌이란 게 왔네! 늙었다는 거지... ㅎ 어느 순간부터 각자 준비하는
              것들도 달라지고, 각자의 사정으로 전보다는 많이 만나지 못하게
              되었지만 우리 정말 꾸준히 연락하고 잘 지내온 것 같아! 정말 난 대학
              와서 너를 만나게 된 것과 우리들을 만나게 되어서 너무 행운이야..
              먼저 졸업해서 앞으로 학교에서는 많이 못 만난다고 하더라도 뭐
              어차피 최민정 주변에 사시고~ 우리가 부를 거고~ 너 나와야
              하고~ᄏᄒᄏᄒ 앞으로 아줌마 되어서도 만날 거니까 그다지 아쉽진
              않네~!~! 다시 한번 졸업 축하하고 일주일 걸려서 방명록 기능
              구현했는데, 막판에 오류 생겨서 못 넣고 껍데기만 만들게 되었네 ㅠㅠ
              다른 사람들도 방명록 쓸 수 있게 만들려고 했는데 ㅜㅜ 하지만
              우리들이 그 빈 공간을 다 열심히 채울 거니까 걱정 마! 민정이 넌
              감동받아서 울면 되는거야ㅋㅎㅎ 다시 한번 졸업 우리가 제일 축하하고
              사랑하고 우정해💕
            </span>
          </InputContainer>
          <InputContainer>
            <h3>From. 심나영</h3>
            <span>
              민정아 졸업축하해!!! 처음 만난게 엊그제 같은데 벌써 졸업을
              하다니ㅜㅜ 첨 만났을때의 너의 상냥함은 졸업할 때까지 변함없이
              한결같구나,,, 만약 너가 동방신기 멤버였다면 넌 상냥민정이였을거야
              학교 다니면서 열정 가득가득한 모습 보면서 나도 배운 점이 많았고
              항상 나한테 나영아 과제 다 했냐며 챙겨주는 모습도 잊지
              못할거야ㅠㅠ 난 항상 과제가 있었어..? 라고 대답했지..^^🤍 민정아
              졸업 너무너무 축하하고 앞으로 걷는 길들도 모두 꽃길이길 바랄게🌸
              졸업해도 우리 다같이 평생 보자 싸랑해~~~😍
            </span>
          </InputContainer>
          <InputContainer>
            <h3>From. 이준성</h3>
            <span>
              우리 가장 먼저 졸업하시는 최민정에게 우선 민정아 졸업축하해👩‍🎓 난
              이제 3학년 시작인데, 벌써 취직까지해서 어엿하게 자리도 잡은 너의
              모습을 보면 아빠도 아닌데 괜히 뿌듯하고 정말 대견해. 항상 열심히
              너의 길을 닦아오는 값진 결과물이라고 생각한단다. 나도 너처럼
              졸업을 하고 빨리 취직을 하고 싶은 마음 반, 아직 난 준비가 안된거
              같고 사회에 나가기 싫은 마음 반이란다. 나는 너처럼 당당한 사회
              초년생이 될라면 멀었다는거지ㅋㅋㅋㅋ, 아직 난 보호가 필요하다
              이말이야~ 항상 모임, 여행 등등 다양한 상황에서 빠지지 않고 와줘서
              정말정말 고맙고, 너가 있어서 학회, 학교생활이 정말 재밌고
              든든했어. 올해부터는 학교에서 너를 못보는건 아쉽지만, 우린 언제든
              만나면 만날 수 있으니깐 그리고 언제봐도 안어색할 수 있다는 걸
              아니깐 걱정이 안된다. 너랑 함께 했던 대학생활 떠올리면 정말
              잊지못할 추억들이 많아서 좋다. 매번 밝게 웃는 모습으로 놀 수
              있어서 좋았고, 그 밝은 모습을 어디서든 잃어버리지 않고 꼭 간직하길
              바래. 우리 평생가는 사이 맞지? like 깐부?ㅋㅋㅋㅋㅋㅋㅋ 민정아
              졸업 진심으로 축하한다!💌
            </span>
          </InputContainer>
          <InputContainer>
            <h3>From. 최슬찬</h3>
            <span>
              민정 졸업 진심으로 축하해ㅎㅎ 새내기였던 기억이 아직도 새록한데
              벌써 졸업이라니.. 시간 참 빠르다는 걸 새삼 또 느껴. 예전에 쓰던
              핸드폰 사진첩을 봤는데, 월요일마다 괴롭힌 건 아닌가 싶을 정도로
              우리 1학년 때 진짜 많이 만났더라. 내가 뭐하자 주도하는 성격이
              아닌데 그런 철없는 용기가 생겼을 정도면 너네가 재밌고 편했나봐.
              1학년때 학점은 망쳤지만 너네를 만난건 대학와서 제일 잘한 일인 것
              같아. 표현을 못해서 그렇지 나한테 있어 제일 소중한 친구들이라는 거
              잊지말아줘. 벌써부터 직장 다니는거 보면 뭐랄까 기특? 대견? 부럽?
              뭐 암튼ㅋㅋ 성실한 성격 알기에 어딜 가든 성공할거야. 너의 창창한
              앞날이 기대가 되는구나 정말 ㅎㅎ 아 졸업식은 꼭 가고 싶었는데
              시국도 시국이고 몸도 제정상이 아니라 못 가게 됐네. 그래도 애들이
              착하게도 준비 정말 열심히 준비한거니까 너가 좋아했으면 좋겠다.
              다시 한번 졸업 축하하고 우리 자주 자주 보자 ~~!!!
            </span>
          </InputContainer>
          <InputContainer>
            <h3>From. 이주협</h3>
            <span>
              흐음 우선 졸업 축하해!!!! 해피 졸업 오예 애블바디 댄스 ~~ 우리가
              2018년 20살 3월에 우연히 술자리에서 만난게 어제 같은데 벌써
              졸업이라니 ㅠㅠ 시간 너무 빠른거아니야???ㅜㅜ 그떄는 우리 다
              젊어서 잘 놀고 잘 마시고 했는데 ㅎㅎ 지금도 물론 그렇지만!!!! 나는
              솔직히 너가 졸업도 제일 빨리하고 결혼도 제일 빨리하고 취업도 제일
              빨리할거 같다고 생각했어 ㅎㅎ 내가 사람 보는 눈이 좀 있다는걸 다시
              한번 느끼네 킼 그래도 우리 벌써 본지 4년!!! 그것도 친하게 지낸지가
              벌써 4년이네 항상 옆에서 알고있는거 계산적이지 않고 잘 알려줘서
              너무 고마웠어!!! 너무 많아서 다 말하기 힘들지만 특히 나 시간표짤때
              엄청 길게 써서 보내준건 감동이였다 ~~ 이제 졸업하면 사회로 진짜
              나가야 되자나 ㅠㅠ 그래도 너는 잘해낼거 같아 항상 내가 금방
              따라갈게^^ 아 그리고 애들이 진짜 나빼고 이거한다고 다들
              고생많이했어 ㅎㅎ 애들한테 한번씩 잘했다고 칭찬해줘^^ 그리고
              졸업했으니까 이제 어른이니까 맛있는 밥 기대할겡ㅎㅎ 나도 곧
              따라간다!!
            </span>
          </InputContainer>
        </InputListBlock>
      </Template>
      <p className="warning">👩‍🎓2022.02.16🌷</p>
    </>
  );
}

export default GuestBook;
