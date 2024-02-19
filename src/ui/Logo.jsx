import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { darkMode } = useDarkMode();
  const logo = darkMode ? "/logo-light.png" : "/logo-dark.png";
  return (
    <StyledLogo>
      <Img src={logo} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
