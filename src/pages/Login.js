import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const theme = {
  primary: '#2E4756',
  secondary: '#77AABD',
  accent: '#4A7A8C',
  text: '#2D3748',
  textLight: '#4A5568',
  background: '#F7FAFC',
  white: '#FFFFFF',
  error: '#E53E3E'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Credenciales inválidas. Usa demo@example.com / demo123');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoContainer>
          <LogoImage src="/Logo.png" alt="CONSUMER DIGITAL TWIN AI" />
        </LogoContainer>
        <Title>Iniciar Sesión</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Contraseña</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </FormGroup>
          <LoginButton type="submit">Iniciar Sesión</LoginButton>
        </Form>
        <BackLink onClick={() => navigate('/')}>← Volver al inicio</BackLink>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.background};
  padding: 20px;
`;

const LoginBox = styled.div`
  background: ${theme.white};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`;

const Title = styled.h1`
  color: ${theme.primary};
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${theme.text};
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #CBD5E0;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 1px ${theme.primary};
  }
`;

const LoginButton = styled.button`
  background-color: ${theme.primary};
  color: ${theme.white};
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${theme.accent};
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.error};
  background-color: #FED7D7;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: ${theme.primary};
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;