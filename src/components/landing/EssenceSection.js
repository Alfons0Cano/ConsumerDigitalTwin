import React from 'react';
import styled from 'styled-components';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import { theme } from '../../theme';

const EssenceSection = () => {
  return (
    <Section>
      <SectionTitle>Nuestra Esencia</SectionTitle>
      <ContentContainer>
        <EssenceCard>
          <IconContainer>
            <FaBullseye size={40} />
          </IconContainer>
          <CardTitle>Misión</CardTitle>
          <CardDescription>
            Ser el referente de confianza en la simulación digital aplicada al comportamiento del consumidor, 
            transformando pruebas digitales en logros reales para las empresas mediante tecnología de vanguardia 
            y análisis estratégico.
          </CardDescription>
        </EssenceCard>

        <EssenceCard>
          <IconContainer>
            <FaEye size={40} />
          </IconContainer>
          <CardTitle>Visión</CardTitle>
          <CardDescription>
            Liderar la transformación digital en la interacción entre empresas y consumidores a nivel global, 
            siendo el punto de referencia para organizaciones que buscan innovar y adaptarse rápidamente a las 
            dinámicas del mercado.
          </CardDescription>
        </EssenceCard>

        <EssenceCard>
          <IconContainer>
            <FaHeart size={40} />
          </IconContainer>
          <CardTitle>Valores</CardTitle>
          <ValuesList>
            <ValueItem>Innovación</ValueItem>
            <ValueItem>Precisión</ValueItem>
            <ValueItem>Transparencia</ValueItem>
            <ValueItem>Colaboración</ValueItem>
            <ValueItem>Orientación al Cliente</ValueItem>
            <ValueItem>Reducción de Riesgos</ValueItem>
          </ValuesList>
        </EssenceCard>
      </ContentContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 50px;
  background-color: ${theme.white};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: ${theme.primary};
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const EssenceCard = styled.div`
  background-color: ${theme.background};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  color: ${theme.primary};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.primary};
  margin-bottom: 15px;
  text-align: center;
`;

const CardDescription = styled.p`
  color: ${theme.textLight};
  line-height: 1.6;
  text-align: center;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ValueItem = styled.li`
  color: ${theme.textLight};
  padding: 8px;
  text-align: center;
  background-color: ${theme.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export default EssenceSection; 