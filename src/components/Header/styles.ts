import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 150px;
  background: #fff;
  z-index: 99999px;
  position: fixed;
  width: 100%;
  top: 10px;
`;

export const LogoContainer = styled.div`
  text-align: center;
  text-decoration: none;
  font-family: "Hellstand";
  color: rgb(33, 33, 33);
  font-size: 32px;
  min-width: 150px;
`;

export const Menucontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
`;

export const MenuItem = styled.a`
  cursor: pointer;
  font-family: "Helvetica 55 Roman";
  font-size: 12px;
  text-transform: uppercase;
  color: rgb(33, 33, 33);
`;
