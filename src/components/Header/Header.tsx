import {
  HeaderContainer,
  LogoContainer,
  Menucontainer,
  MenuItem,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>A e V</LogoContainer>
      <Menucontainer>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Lista de presentes</MenuItem>
        <MenuItem>Locais</MenuItem>
      </Menucontainer>
    </HeaderContainer>
  );
};
