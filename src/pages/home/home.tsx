import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import img from "../../img/couple.png";
import { WelcomeIcon } from "../../img/welcomeIcon";

import {
  ContainerConter,
  ContainerImgHome,
  ConterDownContainer,
  Img,
  ImgContainer,
  TextContainer,
  TextContainerTimer,
  TextImgHome,
  TextInfo,
  TextWelcomeContainer,
  TextWelcomeMain,
  TextWelcomeSub,
  TimerContainer,
  TimerMaincontainer,
  WelcomeSvg,
} from "./styles";
function calculateTimeLeft() {
  const difference = +new Date(`2023-11-25`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  const [rotateTime, setRotateTime] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setRotateTime(!rotateTime);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return (
      <ContainerConter>
        <ConterDownContainer rotate={rotateTime}>
          {!timeLeft[interval] ? "0" : timeLeft[interval]}{" "}
        </ConterDownContainer>
        <TextContainerTimer uppercase={true}>{interval}</TextContainerTimer>
      </ContainerConter>
    );
  });
  return (
    <>
      <Header />
      <ContainerImgHome>
        <ImgContainer>
          <Img src={img} />
        </ImgContainer>
        <TextImgHome>
          <p>Aniele e Vinicius</p> <span>25/11/2023</span>
        </TextImgHome>
      </ContainerImgHome>
      <TimerContainer>
        <TextContainerTimer>
          Contagem regressiva para o grande dia
        </TextContainerTimer>
        <TimerMaincontainer>{timerComponents}</TimerMaincontainer>
      </TimerContainer>
      <TextWelcomeContainer>
        <TextWelcomeMain>Sejam bem-vindos ao nosso site!</TextWelcomeMain>
        <TextWelcomeSub>
          A melhor forma de compartilhar esse momento com voc??s ?? vivendo juntos
          esse sonho!
        </TextWelcomeSub>
        <WelcomeSvg>
          <WelcomeIcon />
        </WelcomeSvg>
      </TextWelcomeContainer>
      <TextContainer>
        <TextInfo>
          Aqui vamos compartilhar com voc??s, queridos amigos e familiares,
          nossos melhores momentos juntos, nossa hist??ria de amor e todos os
          detalhes da jornada mais incr??vel da nossa vida: o in??cio da nossa
          fam??lia. O cora????o acelera e a ansiedade ?? grande pra dizermos o nosso
          "sim" ao lado das pessoas mais importantes das nossas vidas!
        </TextInfo>
      </TextContainer>
    </>
  );
};
