import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaChartPie,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaChartBar,
  FaSignOutAlt,
  FaFlask,
  FaBullhorn,
  FaShareAlt,
  FaHeart,
  FaCog
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { theme } from '../theme';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { path: '/dashboard', icon: FaChartLine, label: 'Dashboard' },
    { path: '/audience-simulation', icon: FaUsers, label: 'Simulación de Audiencia' },
    { path: '/ab-testing', icon: FaFlask, label: 'Pruebas A/B' },
    { path: '/trend-prediction', icon: FaChartBar, label: 'Predicción de Tendencias' },
    { path: '/pricing-impact', icon: FaBullhorn, label: 'Impacto de Precios' },
    { path: '/ad-platform', icon: FaShieldAlt, label: 'Optimización de Plataformas' },
    { path: '/investment-risk', icon: FaChartPie, label: 'Análisis de Riesgo' },
    { path: '/market-segmentation', icon: FaShareAlt, label: 'Segmentación de Mercado' },
    { path: '/social-media', icon: FaHeart, label: 'Redes Sociales' },
    { path: '/sentiment-analysis', icon: FaCog, label: 'Análisis de Sentimientos' }
  ];

  return (
    <LayoutContainer>
      <Sidebar isOpen={sidebarOpen}>
        <SidebarHeader>
          <LogoContainer>
            <LogoImage src="/Logo.png" alt="CONSUMER DIGITAL TWIN AI" />
            <AppTitle>CONSUMER DIGITAL TWIN AI</AppTitle>
          </LogoContainer>
          <CloseButton onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>

        <SidebarNav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <SidebarLink 
                key={item.path} 
                to={item.path}
                active={isActive}
              >
                <Icon />
                <span>{item.label}</span>
              </SidebarLink>
            );
          })}
        </SidebarNav>

        <UserSection>
          <UserInfo>
            <UserName>{user?.name || 'Usuario'}</UserName>
            <UserEmail>{user?.email || ''}</UserEmail>
          </UserInfo>
          <LogoutButton onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Cerrar Sesión</span>
          </LogoutButton>
        </UserSection>
      </Sidebar>

      <MainContent isSidebarOpen={sidebarOpen}>
        <TopBar>
          <MenuButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </MenuButton>
        </TopBar>

        <PageContent>
          {children}
        </PageContent>
      </MainContent>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 280px;
  background: ${theme.primary};
  color: ${theme.white};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
  filter: brightness(0) invert(1);
`;

const AppTitle = styled.h1`
  color: ${theme.white};
  font-size: 1rem;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.white};
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    color: ${theme.secondary};
  }
`;

const SidebarNav = styled.nav`
  padding: 20px 0;
  flex: 1;
  overflow-y: auto;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: ${theme.white};
  text-decoration: none;
  gap: 12px;
  transition: all 0.2s;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  span {
    font-size: 0.9rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: ${props => props.isSidebarOpen ? '280px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  min-height: 100vh;
  background: ${theme.background};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: ${theme.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.primary};
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${theme.accent};
  }
`;

const PageContent = styled.div`
  padding: 30px;
  height: calc(100vh - 70px);
  overflow-y: auto;
`;

const UserSection = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UserInfo = styled.div`
  margin-bottom: 15px;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
`;

const UserEmail = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: ${theme.white};
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  span {
    font-size: 0.9rem;
  }
`;

export default DashboardLayout;