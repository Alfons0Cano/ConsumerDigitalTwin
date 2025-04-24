import React from 'react';
import styled from 'styled-components';
import { FaRocket, FaChartLine, FaUsers, FaChartBar, FaMoneyBillWave, FaShieldAlt, FaShoppingCart, FaComments, FaChartPie } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Features = () => {
  const features = [
    {
      icon: <FaRocket size={40} />,
      title: 'Simulación de Audiencia',
      description: 'Predice el comportamiento que tendrá una campaña concreta en un perfil de usuario específico. Visualiza y descubre qué tácticas son más efectivas para identificar la campaña que mejor se adapte al público objetivo.',
      details: [
        'Creación de perfiles de audiencia detallados',
        'Análisis predictivo de comportamiento',
        'Recomendaciones de mejora en tiempo real',
        'Visualización de métricas clave'
      ]
    },
    {
      icon: <FaChartLine size={40} />,
      title: 'Optimización de Plataformas Publicitarias',
      description: 'Analiza y mejora el rendimiento de la campaña en múltiples plataformas, asegurando que el mensaje se adapte a las características y preferencias del público objetivo en cada medio.',
      details: [
        'Análisis multi-plataforma',
        'Recomendaciones de optimización',
        'Ajuste automático de presupuestos',
        'Métricas de rendimiento por canal'
      ]
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Segmentación de Mercado',
      description: 'Segmenta a los consumidores en tiempo real, prueba diferentes mensajes y formatos publicitarios, y analiza el impacto en cada grupo de audiencia.',
      details: [
        'Creación de segmentos personalizados',
        'Pruebas A/B multivariables',
        'Análisis de impacto por segmento',
        'Optimización de mensajes'
      ]
    },
    {
      icon: <FaChartBar size={40} />,
      title: 'Predicción de Tendencias',
      description: 'Visualiza las tendencias emergentes en el mercado, basadas tanto en datos históricos como en proyecciones de comportamiento futuro.',
      details: [
        'Análisis de datos históricos',
        'Proyecciones de tendencias',
        'Identificación de patrones',
        'Alertas de cambios significativos'
      ]
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: 'Modelado de Impacto de Precios',
      description: 'Evalúa cómo diferentes estrategias de precios afectan tanto la demanda como la percepción del consumidor.',
      details: [
        'Simulación de estrategias de precios',
        'Análisis de elasticidad de demanda',
        'Optimización de precios',
        'Proyecciones de ingresos'
      ]
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Evaluación de Riesgos de Inversión',
      description: 'Simula diferentes escenarios de inversión y evalúa los riesgos financieros y operativos asociados.',
      details: [
        'Análisis de escenarios',
        'Evaluación de riesgos',
        'Proyecciones financieras',
        'Recomendaciones de inversión'
      ]
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: 'Integración con E-commerce',
      description: 'Conecta en tiempo real con datos clave para mejorar modelos de predicción y ajustar estrategias de marketing y ventas.',
      details: [
        'Conexión con plataformas de e-commerce',
        'Análisis de ventas en tiempo real',
        'Optimización de estrategias',
        'Sincronización de inventario'
      ]
    },
    {
      icon: <FaComments size={40} />,
      title: 'Análisis de Sentimiento',
      description: 'Monitoriza menciones de una marca en redes sociales y evalúa la percepción del consumidor mediante análisis de sentimiento basado en IA.',
      details: [
        'Monitorización en tiempo real',
        'Análisis de sentimiento',
        'Alertas de crisis',
        'Evaluación de campañas'
      ]
    },
    {
      icon: <FaChartPie size={40} />,
      title: 'Tablero de Control Interactivo',
      description: 'Visualiza datos en tiempo real que permite analizar información clave de manera intuitiva mediante representaciones gráficas avanzadas.',
      details: [
        'Visualización en tiempo real',
        'Métricas personalizables',
        'Exportación de informes',
        'Análisis interactivo'
      ]
    }
  ];

  return (
    <FeaturesContainer>
      <Navbar />
      <Header>
        <Title>Funcionalidades de DigitalTwin</Title>
        <Subtitle>Descubre todas las herramientas que te ayudarán a optimizar tus campañas de marketing</Subtitle>
      </Header>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <FeatureDetails>
              {feature.details.map((detail, idx) => (
                <DetailItem key={idx}>{detail}</DetailItem>
              ))}
            </FeatureDetails>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.div`
  padding: 80px 50px;
  padding-top: 150px;
  background-color: #F7FAFC;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2E4756;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4A5568;
  max-width: 800px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  color: #77AABD;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #2D3748;
`;

const FeatureDescription = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: #4A5568;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: "•";
    color: #77AABD;
    position: absolute;
    left: 0;
  }
`;

export default Features; 