import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { FaCheck, FaTimes } from 'react-icons/fa';

const CompetitionSection = () => {
  const competitors = [
    {
      name: 'RTB House',
      targetAudience: 'Grandes empresas y marcas globales con alto presupuesto',
      strengths: ['Deep learning', 'personalización', 'retargeting en tiempo real'],
      weaknesses: ['Dependencia de cookies', 'coste elevado', 'complejidad técnica']
    },
    {
      name: 'Google Mkt Platform',
      targetAudience: 'Empresas medianas y grandes, agencias de marketing',
      strengths: ['Integración con Google', 'escalabilidad', 'precisión en segmentación'],
      weaknesses: ['Curva de aprendizaje alta', 'coste de versiones premium']
    },
    {
      name: 'IBM Watson Adv.',
      targetAudience: 'Empresas tecnológicas y retail con necesidad de análisis avanzado',
      strengths: ['IA robusta', 'análisis emocional', 'integración multiplataforma'],
      weaknesses: ['Costoso', 'requiere equipo técnico cualificado']
    },
    {
      name: 'Brandwatch',
      targetAudience: 'Equipos de marketing y reputación',
      strengths: ['Monitorización en tiempo real', 'sentimiento', 'informes visuales'],
      weaknesses: ['Coste alto', 'limitado a redes sociales']
    },
    {
      name: 'Digital Twins AI',
      targetAudience: 'Empresas medianas y grandes interesadas en simular campañas antes de lanzarlas',
      strengths: ['Simulación predictiva', 'interfaz intuitiva', 'integración multicanal', 'coste competitivo'],
      weaknesses: ['Proyecto en fase inicial', 'requiere validación técnica y comercial']
    }
  ];

  return (
    <Section>
      <SectionTitle>Análisis Competitivo</SectionTitle>
      <Description>
        Descubre cómo Consumer Digital Twin AI se compara con otras soluciones del mercado
      </Description>

      <ComparisonTable>
        <TableHeader>
          <HeaderCell>Competencia</HeaderCell>
          <HeaderCell>Público objetivo</HeaderCell>
          <HeaderCell>Puntos fuertes</HeaderCell>
          <HeaderCell>Puntos débiles</HeaderCell>
        </TableHeader>

        <TableBody>
          {competitors.map((competitor, index) => (
            <TableRow key={index} isHighlighted={competitor.name === 'Digital Twins AI'}>
              <CompanyCell>
                <CompanyName>{competitor.name}</CompanyName>
              </CompanyCell>
              <Cell>{competitor.targetAudience}</Cell>
              <Cell>
                <List>
                  {competitor.strengths.map((strength, i) => (
                    <ListItem key={i}>
                      <FaCheck color={theme.success} />
                      {strength}
                    </ListItem>
                  ))}
                </List>
              </Cell>
              <Cell>
                <List>
                  {competitor.weaknesses.map((weakness, i) => (
                    <ListItem key={i}>
                      <FaTimes color={theme.error} />
                      {weakness}
                    </ListItem>
                  ))}
                </List>
              </Cell>
            </TableRow>
          ))}
        </TableBody>
      </ComparisonTable>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 50px;
  background-color: ${theme.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${theme.primary};
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.textLight};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ComparisonTable = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: ${theme.white};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  background: ${theme.primary};
  color: white;
  font-weight: 600;
`;

const HeaderCell = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  border-bottom: 1px solid ${theme.border};
  background: ${props => props.isHighlighted ? `${theme.primary}10` : 'white'};
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.isHighlighted ? `${theme.primary}15` : `${theme.background}`};
  }
`;

const Cell = styled.div`
  padding: 1.5rem;
  font-size: 0.9rem;
  color: ${theme.text};
`;

const CompanyCell = styled(Cell)`
  border-right: 1px solid ${theme.border};
`;

const CompanyName = styled.div`
  font-weight: 600;
  color: ${theme.primary};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    flex-shrink: 0;
  }
`;

export default CompetitionSection; 