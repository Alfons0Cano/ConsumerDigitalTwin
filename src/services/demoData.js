// Demo data service for providing realistic test data
import { faker } from '@faker-js/faker';

// Generate random metrics with realistic trends
export const getDemoMetrics = () => ({
  activeUsers: Math.floor(Math.random() * 5000) + 1000,
  conversionRate: (Math.random() * 20 + 70).toFixed(1),
  satisfaction: (Math.random() * 1 + 4).toFixed(1),
  activeCampaigns: Math.floor(Math.random() * 20) + 5
});

// Generate time series data for charts
export const getTimeSeriesData = (days = 30) => {
  const data = [];
  let value = 1000;
  
  for (let i = 0; i < days; i++) {
    value += Math.random() * 200 - 100; // Random walk
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.max(0, Math.floor(value))
    });
  }
  
  return data;
};

// Generate sentiment analysis data
export const getSentimentData = () => ({
  positive: Math.floor(Math.random() * 30) + 60,
  negative: Math.floor(Math.random() * 20) + 5,
  neutral: Math.floor(Math.random() * 20) + 5,
  topics: [
    {
      name: 'Atención al Cliente',
      positive: Math.floor(Math.random() * 30) + 60,
      negative: Math.floor(Math.random() * 20) + 5
    },
    {
      name: 'Calidad del Producto',
      positive: Math.floor(Math.random() * 30) + 60,
      negative: Math.floor(Math.random() * 20) + 5
    },
    {
      name: 'Precio',
      positive: Math.floor(Math.random() * 30) + 60,
      negative: Math.floor(Math.random() * 20) + 5
    }
  ],
  mentions: Array(5).fill(null).map(() => ({
    author: faker.internet.userName(),
    content: faker.lorem.sentence(),
    sentiment: faker.helpers.arrayElement(['positive', 'negative', 'neutral']),
    source: faker.helpers.arrayElement(['Twitter', 'Facebook', 'Instagram']),
    time: faker.date.recent()
  }))
});

// Generate audience simulation data
export const getAudienceSimulationData = (size = 1000) => ({
  reached: Math.floor(size * (Math.random() * 0.3 + 0.7)),
  conversion: (Math.random() * 5 + 1).toFixed(1),
  retention: (Math.random() * 20 + 60).toFixed(1),
  behavior: getTimeSeriesData(7)
});

// Generate market segmentation data
export const getMarketSegmentationData = () => ({
  segments: [
    {
      name: 'Early Adopters',
      size: Math.floor(Math.random() * 20) + 10,
      growth: (Math.random() * 10 + 5).toFixed(1)
    },
    {
      name: 'Mainstream',
      size: Math.floor(Math.random() * 30) + 40,
      growth: (Math.random() * 5 + 2).toFixed(1)
    },
    {
      name: 'Late Majority',
      size: Math.floor(Math.random() * 20) + 20,
      growth: (Math.random() * 3 + 1).toFixed(1)
    }
  ]
});

// Generate A/B testing data
export const getABTestingData = (config) => {
  const baseConversion = Math.random() * 2 + 2; // 2-4% base conversion
  const testConversion = baseConversion + (Math.random() * 2 - 0.5); // Random improvement or decline
  const users = Math.floor(config.sampleSize / 2); // Split sample size between variants

  return {
    name: config.testName,
    progress: Math.floor(Math.random() * 30 + 40), // 40-70% progress
    variants: {
      control: {
        conversion: baseConversion.toFixed(1),
        users: users
      },
      test: {
        conversion: testConversion.toFixed(1),
        users: users,
        winning: testConversion > baseConversion
      }
    },
    confidence: Math.floor(Math.random() * 10 + 90), // 90-100% confidence
    conversionData: Array(7).fill(null).map((_, i) => ({
      date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 100 + 50) // Random daily conversions
    }))
  };
};

// Generate trend prediction data
export const getTrendPredictionData = (period = '30d', category = 'all') => {
  const categories = ['tech', 'eco', 'health', 'ecommerce'];
  const trends = [
    {
      id: 1,
      name: 'Sostenibilidad',
      growth: Math.floor(Math.random() * 30 + 70),
      confidence: Math.floor(Math.random() * 10 + 85),
      category: 'eco',
      data: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 100 + 50)
      }))
    },
    {
      id: 2,
      name: 'Comercio Social',
      growth: Math.floor(Math.random() * 30 + 70),
      confidence: Math.floor(Math.random() * 10 + 85),
      category: 'ecommerce',
      data: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 100 + 50)
      }))
    },
    {
      id: 3,
      name: 'Realidad Aumentada',
      growth: Math.floor(Math.random() * 30 + 70),
      confidence: Math.floor(Math.random() * 10 + 85),
      category: 'tech',
      data: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 100 + 50)
      }))
    },
    {
      id: 4,
      name: 'Bienestar Mental',
      growth: Math.floor(Math.random() * 30 + 70),
      confidence: Math.floor(Math.random() * 10 + 85),
      category: 'health',
      data: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 100 + 50)
      }))
    }
  ];

  const insights = [
    {
      title: 'Crecimiento Rápido',
      text: `La tendencia de ${trends[0].name.toLowerCase()} muestra un crecimiento acelerado del ${trends[0].growth}% en los últimos ${period === '30d' ? '30' : period === '90d' ? '90' : '7'} días.`
    },
    {
      title: 'Alta Confianza',
      text: `El análisis predice con un ${trends[0].confidence}% de confianza que esta tendencia continuará durante los próximos 6 meses.`
    },
    {
      title: 'Oportunidad de Mercado',
      text: `Se recomienda desarrollar productos/servicios alineados con ${trends[0].name.toLowerCase()} para capitalizar esta tendencia.`
    }
  ];

  return {
    trends: category === 'all' ? trends : trends.filter(t => t.category === category),
    insights
  };
};

// Generate pricing impact analysis data
export const getPricingImpactData = (currentPrice, competitorPrices, margin) => {
  const basePrice = parseFloat(currentPrice) || 100;
  const competitors = competitorPrices ? competitorPrices.split(',').map(p => parseFloat(p.trim())) : [90, 110, 95];
  const avgCompetitorPrice = competitors.reduce((a, b) => a + b, 0) / competitors.length;
  const marginPercent = parseFloat(margin) || 30;

  const scenarios = [
    {
      id: 1,
      scenario: 'Optimista',
      impact: Math.floor(Math.random() * 10 + 10), // 10-20% increase
      revenue: Math.floor(basePrice * 1000 * (1 + (Math.random() * 0.2 + 0.1))), // 10-30% revenue increase
      confidence: Math.floor(Math.random() * 10 + 80) // 80-90% confidence
    },
    {
      id: 2,
      scenario: 'Moderado',
      impact: Math.floor(Math.random() * 5 + 5), // 5-10% increase
      revenue: Math.floor(basePrice * 1000 * (1 + (Math.random() * 0.1 + 0.05))), // 5-15% revenue increase
      confidence: Math.floor(Math.random() * 10 + 85) // 85-95% confidence
    },
    {
      id: 3,
      scenario: 'Conservador',
      impact: Math.floor(Math.random() * 3 + 1), // 1-4% increase
      revenue: Math.floor(basePrice * 1000 * (1 + (Math.random() * 0.05 + 0.02))), // 2-7% revenue increase
      confidence: Math.floor(Math.random() * 10 + 90) // 90-100% confidence
    }
  ];

  const recommendations = [
    {
      title: 'Precio Óptimo Sugerido',
      value: `€${(avgCompetitorPrice * 0.95).toFixed(2)}`,
      description: 'Basado en el análisis de precios de competidores y elasticidad de demanda'
    },
    {
      title: 'Incremento Gradual',
      value: '5% por fase',
      description: 'Implementar cambios de precio en fases para minimizar el impacto en la base de clientes'
    },
    {
      title: 'Momento Óptimo',
      value: 'Q4 2024',
      description: 'Iniciar cambios durante temporada alta para maximizar el impacto positivo'
    }
  ];

  return {
    scenarios,
    recommendations,
    marketAnalysis: {
      pricePosition: basePrice < avgCompetitorPrice ? 'below' : 'above',
      priceDifference: ((basePrice - avgCompetitorPrice) / avgCompetitorPrice * 100).toFixed(1),
      marginAnalysis: `El margen actual de ${marginPercent}% es ${marginPercent > 35 ? 'alto' : marginPercent < 25 ? 'bajo' : 'óptimo'} para el sector`
    }
  };
}; 