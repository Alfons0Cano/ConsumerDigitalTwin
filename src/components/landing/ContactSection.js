import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form data:', formData);
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <Title>Contáctanos</Title>
        <Subtitle>
          ¿Listo para transformar tu estrategia de negocio? Ponte en contacto con nosotros
        </Subtitle>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Información de Contacto</InfoTitle>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoText>Barcelona, España</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <InfoText>info@consumerdigitaltwin.ai</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoText>+34 963 852 741</InfoText>
            </InfoItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nombre</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="company">Empresa</Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensaje</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 80px 0;
  background-color: ${theme.background};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.primary};
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.text};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${theme.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.primary};
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: ${theme.text};
`;

const ContactForm = styled.form`
  background-color: ${theme.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${theme.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${theme.border};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${theme.border};
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.primary};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  display: block;
  min-width: 200px;

  &:hover {
    background-color: ${theme.primaryDark};
  }
`;

export default ContactSection; 