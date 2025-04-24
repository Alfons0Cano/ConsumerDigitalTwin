import React from 'react';
import styled from 'styled-components';
import { FaRocket, FaChartLine, FaGlobe, FaRobot } from 'react-icons/fa';
import { theme } from '../../theme';

const RoadmapSection = () => {
  return (
    <Section>
      <SectionTitle>Nuestra Hoja de Ruta</SectionTitle>
      <TimelineContainer>
        <Timeline>
          <TimelineItem>
            <TimelineIcon>
              <FaRocket size={24} />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>Fase 1: Lanzamiento Inicial</TimelineDate>
              <TimelineTitle>Plataforma Base</TimelineTitle>
              <TimelineDescription>
                Desarrollo e implementación de la plataforma core con funcionalidades básicas 
                de simulación y análisis de comportamiento del consumidor.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon>
              <FaChartLine size={24} />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>Fase 2: Expansión</TimelineDate>
              <TimelineTitle>Análisis Avanzado</TimelineTitle>
              <TimelineDescription>
                Integración de herramientas de análisis predictivo y machine learning para 
                mejorar la precisión de las simulaciones.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon>
              <FaGlobe size={24} />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>Fase 3: Globalización</TimelineDate>
              <TimelineTitle>Expansión Internacional</TimelineTitle>
              <TimelineDescription>
                Adaptación de la plataforma para mercados internacionales y desarrollo de 
                capacidades multilingües.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon>
              <FaRobot size={24} />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>Fase 4: Innovación</TimelineDate>
              <TimelineTitle>IA Avanzada</TimelineTitle>
              <TimelineDescription>
                Implementación de algoritmos de IA más sofisticados y capacidades de 
                aprendizaje automático para simulaciones más precisas.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineContainer>
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

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const Timeline = styled.div`
  position: relative;
  padding: 20px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${theme.secondary};
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.white};
  z-index: 1;
  margin: 0 20px;
`;

const TimelineContent = styled.div`
  background-color: ${theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const TimelineDate = styled.div`
  color: ${theme.accent};
  font-weight: 600;
  margin-bottom: 10px;
`;

const TimelineTitle = styled.h3`
  color: ${theme.primary};
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const TimelineDescription = styled.p`
  color: ${theme.textLight};
  line-height: 1.6;
`;

export default RoadmapSection; 