import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const theme = {
  primary: '#2E4756',
  secondary: '#77AABD',
  accent: '#4A7A8C',
  text: '#2D3748',
  textLight: '#4A5568',
  background: '#F7FAFC',
  white: '#FFFFFF'
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContainer>
          <LogoImage src="/LogoWithText.png" alt="CONSUMER DIGITAL TWIN AI" />
        </LogoContainer>
        <NavItems>
          <NavItem onClick={() => navigate('/login')}>Iniciar Sesión</NavItem>
          <NavButton onClick={() => navigate('/login')}>Prueba Gratis</NavButton>
        </NavItems>
      </NavbarContent>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  height: 40px;
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  color: ${theme.text};
  &:hover {
    color: ${theme.primary};
  }
`;

const NavButton = styled.button`
  background-color: ${theme.primary};
  color: ${theme.white};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: ${theme.accent};
  }
`;

export default Navbar; 