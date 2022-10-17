import styled from "styled-components";

interface IPropsTextTimer {
  uppercase?: boolean;
  rotate?: boolean;
}

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  position: absolute;
  z-index: -3;
  width: 99%;
`;
export const ContainerImgHome = styled.div``;

export const Img = styled.img`
  width: 1000px;
  height: auto;
  border-radius: 7px;
`;

export const TextImgHome = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  font-family: "Hellstand", sans-serif;
  font-size: 100px;
  p {
    margin: 0;
    color: #fff;
  }
  span {
    font-size: 30px;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 20px;
    background: linear-gradient(
      to right,
      rgba(128, 128, 128, 0.1),
      rgba(220, 220, 220, 1)
    );
  }
`;

export const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextContainerTimer = styled.span<IPropsTextTimer>`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: normal;
  margin-bottom: 40px;
  text-transform: none;
  color: rgb(33, 33, 33);
  font-family: "Helvetica 55 Roman", sans-serif;
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

export const TimerMaincontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ConterDownContainer = styled.div<IPropsTextTimer>`
  padding: 0px 24px;
  transform: translateY(-50%);
  text-align: center;
  font-family: "Helvetica 55 Roman", sans-serif;
  font-size: 26px;
  max-height: 56px;
  max-width: 84px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(255, 255, 255);
  border-right: 2px solid #fff;
  background: rgb(33, 33, 33);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${(props) => (props.rotate ? "1" : "0.8")};
  transition: all 1s;
`;

export const ContainerConter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWelcomeContainer = styled.div`
  margin-top: 50px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 98%;
  min-height: 78px;
  flex-direction: column;
`;

export const TextWelcomeMain = styled.span`
  font-size: 48px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  font-family: "Hellstand", sans-serif;
  text-transform: none;
  line-height: normal;
  padding: 20px 15px;
`;

export const TextWelcomeSub = styled.span`
  padding: 20px 15px;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  font-family: "Helvetica 55 Roman";
  font-style: normal;
  color: rgb(33, 33, 33);
  text-transform: none;
  max-width: 1110px;
  margin: 0px auto;
`;

export const WelcomeSvg = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 236px;
`;

export const TextInfo = styled.span`
  width: 1080px;
  letter-spacing: normal;
  color: #212121;
  text-align: left;
  overflow-wrap: break-word;
  font-size: 14px;
  line-height: 30px;
`;
