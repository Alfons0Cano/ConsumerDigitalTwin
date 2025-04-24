// Demo data service for providing realistic test data
import { faker } from '@faker-js/faker';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaLinkedin, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaFacebookF, FaYoutube } from 'react-icons/fa';

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
export const getMarketSegmentationData = (segment = 'all', dateRange = '30d') => {
  const segments = [
    {
      id: 1,
      name: 'Profesionales Jóvenes',
      size: Math.floor(Math.random() * 20 + 25), // 25-45%
      growth: Math.floor(Math.random() * 10 + 8), // 8-18%
      metrics: {
        engagement: Math.floor(Math.random() * 20 + 70), // 70-90%
        retention: Math.floor(Math.random() * 15 + 60), // 60-75%
        conversion: (Math.random() * 2 + 3).toFixed(1) // 3-5%
      },
      demographics: {
        age: '25-34',
        income: '30k-50k',
        education: 'Universidad',
        location: 'Urban',
        occupation: 'Profesional'
      },
      behavior: {
        purchaseFrequency: 'Mensual',
        preferredChannel: 'Móvil',
        averageOrder: '€50-100',
        loyalty: 'Media'
      },
      trends: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 20 + 70) // 70-90%
      }))
    },
    {
      id: 2,
      name: 'Familias Suburbanas',
      size: Math.floor(Math.random() * 15 + 20), // 20-35%
      growth: Math.floor(Math.random() * 8 + 5), // 5-13%
      metrics: {
        engagement: Math.floor(Math.random() * 15 + 75), // 75-90%
        retention: Math.floor(Math.random() * 20 + 65), // 65-85%
        conversion: (Math.random() * 1.5 + 3).toFixed(1) // 3-4.5%
      },
      demographics: {
        age: '35-44',
        income: '50k-70k',
        education: 'Universidad',
        location: 'Suburbano',
        occupation: 'Profesional'
      },
      behavior: {
        purchaseFrequency: 'Semanal',
        preferredChannel: 'Email',
        averageOrder: '€100-200',
        loyalty: 'Alta'
      },
      trends: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 15 + 75) // 75-90%
      }))
    },
    {
      id: 3,
      name: 'Ejecutivos Senior',
      size: Math.floor(Math.random() * 10 + 15), // 15-25%
      growth: Math.floor(Math.random() * 12 + 10), // 10-22%
      metrics: {
        engagement: Math.floor(Math.random() * 10 + 60), // 60-70%
        retention: Math.floor(Math.random() * 15 + 75), // 75-90%
        conversion: (Math.random() * 2 + 4).toFixed(1) // 4-6%
      },
      demographics: {
        age: '45-54',
        income: '70k+',
        education: 'Postgrado',
        location: 'Urban',
        occupation: 'Ejecutivo'
      },
      behavior: {
        purchaseFrequency: 'Trimestral',
        preferredChannel: 'Desktop',
        averageOrder: '€200+',
        loyalty: 'Muy Alta'
      },
      trends: Array(30).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 10 + 60) // 60-70%
      }))
    }
  ];

  const insights = [
    {
      id: 1,
      title: 'Comportamiento de Compra',
      description: 'Los profesionales jóvenes muestran preferencia por compras móviles y responden bien a ofertas flash',
      segment: 'Profesionales Jóvenes',
      impact: 'alto',
      metrics: {
        mobileUsage: '85%',
        responseRate: '32%',
        averageTime: '2.5 min'
      }
    },
    {
      id: 2,
      title: 'Canales Preferidos',
      description: 'Las familias suburbanas responden mejor a email marketing y contenido educativo',
      segment: 'Familias Suburbanas',
      impact: 'medio',
      metrics: {
        emailOpenRate: '45%',
        clickRate: '18%',
        conversionRate: '4.2%'
      }
    },
    {
      id: 3,
      title: 'Sensibilidad al Precio',
      description: 'Ejecutivos senior priorizan calidad sobre precio y valoran el servicio personalizado',
      segment: 'Ejecutivos Senior',
      impact: 'alto',
      metrics: {
        averageOrder: '€350',
        repeatPurchase: '78%',
        satisfaction: '92%'
      }
    }
  ];

  const summary = {
    totalSegments: segments.length,
    totalMarketSize: segments.reduce((sum, seg) => sum + seg.size, 0),
    averageGrowth: (segments.reduce((sum, seg) => sum + seg.growth, 0) / segments.length).toFixed(1),
    topPerforming: segments.reduce((max, seg) => seg.metrics.conversion > max.metrics.conversion ? seg : max).name,
    keyTrends: [
      'Aumento en compras móviles',
      'Mayor engagement en redes sociales',
      'Preferencia por contenido personalizado'
    ]
  };

  return {
    segments: segment === 'all' ? segments : segments.filter(s => s.id === parseInt(segment)),
    insights,
    summary
  };
};

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

// Generate ad platform optimization data
export const getAdPlatformOptimizationData = (platform = 'all', dateRange = '30d', budget = 5000) => {
  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: FaFacebook, color: '#1877F2' },
    { id: 'google', name: 'Google Ads', icon: FaGoogle, color: '#4285F4' },
    { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: '#E4405F' },
    { id: 'twitter', name: 'Twitter', icon: FaTwitter, color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' }
  ];

  const metrics = platforms.map(platform => ({
    id: platform.id,
    platform: platform.id,
    ctr: (Math.random() * 2 + 2).toFixed(1), // 2-4%
    cpc: (Math.random() * 0.4 + 0.3).toFixed(2), // €0.30-0.70
    conversion: (Math.random() * 2 + 2).toFixed(1), // 2-4%
    roi: Math.floor(Math.random() * 100 + 150), // 150-250%
    spend: Math.floor(budget * (Math.random() * 0.3 + 0.1)), // 10-40% of budget
    impressions: Math.floor(Math.random() * 50000 + 10000), // 10k-60k
    clicks: Math.floor(Math.random() * 2000 + 500), // 500-2500
    conversions: Math.floor(Math.random() * 100 + 50) // 50-150
  }));

  // Generate performance trends with realistic data
  const performanceTrends = platforms.map(platform => {
    const days = dateRange === '7d' ? 7 : dateRange === '90d' ? 90 : 30;
    const baseValue = Math.random() * 100 + 50; // Base value between 50-150
    const trend = Array(days).fill(null).map((_, i) => {
      const date = new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000);
      const value = baseValue + (Math.random() * 20 - 10); // Random fluctuation
      return {
        date: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.max(0, Math.floor(value))
      };
    });
    return {
      platform: platform.id,
      data: trend
    };
  });

  const recommendations = [
    {
      platform: 'google',
      title: 'Optimizar Palabras Clave',
      description: 'Identificadas 15 nuevas palabras clave con alto potencial y bajo CPC',
      impact: 'Reducción estimada del 20% en CPC',
      difficulty: 'Media',
      priority: 'Alta'
    },
    {
      platform: 'facebook',
      title: 'Ajustar Segmentación',
      description: 'Refinar segmentación por edad y comportamiento para mejorar CTR',
      impact: 'Incremento estimado del 15% en CTR',
      difficulty: 'Baja',
      priority: 'Media'
    },
    {
      platform: 'instagram',
      title: 'Contenido Visual',
      description: 'Aumentar uso de Reels para mejorar engagement y reducir costos',
      impact: 'Incremento estimado del 25% en engagement',
      difficulty: 'Alta',
      priority: 'Alta'
    },
    {
      platform: 'twitter',
      title: 'Optimizar Timing',
      description: 'Ajustar horarios de publicación según análisis de engagement',
      impact: 'Incremento estimado del 30% en alcance',
      difficulty: 'Baja',
      priority: 'Media'
    },
    {
      platform: 'linkedin',
      title: 'Contenido B2B',
      description: 'Desarrollar contenido específico para audiencia profesional',
      impact: 'Incremento estimado del 40% en conversiones',
      difficulty: 'Media',
      priority: 'Alta'
    }
  ];

  const budgetAllocation = {
    current: platforms.map(p => ({
      platform: p.id,
      percentage: Math.floor(Math.random() * 30 + 10) // 10-40%
    })),
    recommended: platforms.map(p => ({
      platform: p.id,
      percentage: Math.floor(Math.random() * 30 + 10) // 10-40%
    }))
  };

  return {
    platforms,
    metrics: platform === 'all' ? metrics : metrics.filter(m => m.platform === platform),
    recommendations: platform === 'all' ? recommendations : recommendations.filter(r => r.platform === platform),
    performanceTrends: platform === 'all' ? performanceTrends : performanceTrends.filter(t => t.platform === platform),
    budgetAllocation,
    summary: {
      totalSpend: metrics.reduce((sum, m) => sum + m.spend, 0),
      totalImpressions: metrics.reduce((sum, m) => sum + m.impressions, 0),
      totalClicks: metrics.reduce((sum, m) => sum + m.clicks, 0),
      totalConversions: metrics.reduce((sum, m) => sum + m.conversions, 0),
      averageCTR: (metrics.reduce((sum, m) => sum + parseFloat(m.ctr), 0) / metrics.length).toFixed(1),
      averageCPC: (metrics.reduce((sum, m) => sum + parseFloat(m.cpc), 0) / metrics.length).toFixed(2),
      averageROI: Math.floor(metrics.reduce((sum, m) => sum + m.roi, 0) / metrics.length)
    }
  };
};

// Generate investment risk analysis data
export const getInvestmentRiskData = (investmentAmount, marketSegment, timeframe) => {
  const baseAmount = parseFloat(investmentAmount) || 50000;
  const months = parseInt(timeframe) || 12;

  const riskFactors = [
    {
      id: 1,
      name: 'Mercado',
      level: 'alto',
      score: Math.floor(Math.random() * 20 + 75), // 75-95%
      trend: 'increasing',
      details: {
        volatility: (Math.random() * 10 + 20).toFixed(1), // 20-30%
        marketSize: Math.floor(Math.random() * 1000000 + 5000000), // 5M-6M
        growthRate: (Math.random() * 5 + 5).toFixed(1) // 5-10%
      }
    },
    {
      id: 2,
      name: 'Competencia',
      level: 'medio',
      score: Math.floor(Math.random() * 30 + 50), // 50-80%
      trend: 'stable',
      details: {
        competitors: Math.floor(Math.random() * 20 + 10), // 10-30
        marketShare: (Math.random() * 10 + 5).toFixed(1), // 5-15%
        entryBarriers: Math.floor(Math.random() * 30 + 40) // 40-70%
      }
    },
    {
      id: 3,
      name: 'Tecnológico',
      level: 'bajo',
      score: Math.floor(Math.random() * 20 + 30), // 30-50%
      trend: 'decreasing',
      details: {
        innovation: Math.floor(Math.random() * 40 + 60), // 60-100%
        adoption: (Math.random() * 20 + 30).toFixed(1), // 30-50%
        obsolescence: Math.floor(Math.random() * 20 + 10) // 10-30%
      }
    },
    {
      id: 4,
      name: 'Regulatorio',
      level: 'medio',
      score: Math.floor(Math.random() * 30 + 40), // 40-70%
      trend: 'stable',
      details: {
        compliance: Math.floor(Math.random() * 30 + 60), // 60-90%
        changes: Math.floor(Math.random() * 20 + 10), // 10-30%
        restrictions: Math.floor(Math.random() * 20 + 20) // 20-40%
      }
    }
  ];

  const recommendations = [
    {
      id: 1,
      type: 'warning',
      title: 'Alta Volatilidad del Mercado',
      description: 'Considerar diversificación en diferentes segmentos para mitigar riesgos',
      icon: FaExclamationTriangle,
      priority: 'alta',
      impact: 'Reducción estimada del 25% en exposición al riesgo',
      timeframe: '3-6 meses'
    },
    {
      id: 2,
      type: 'success',
      title: 'Oportunidad de Crecimiento',
      description: 'Mercado emergente con potencial de expansión significativa',
      icon: FaCheckCircle,
      priority: 'media',
      impact: 'Incremento estimado del 15% en ROI',
      timeframe: '6-12 meses'
    },
    {
      id: 3,
      type: 'info',
      title: 'Cambios Regulatorios',
      description: 'Nuevas normativas previstas para Q3 2024 que podrían afectar al sector',
      icon: FaInfoCircle,
      priority: 'baja',
      impact: 'Impacto moderado en operaciones',
      timeframe: '12-24 meses'
    }
  ];

  const marketAnalysis = {
    segment: marketSegment || 'b2b',
    size: Math.floor(baseAmount * (Math.random() * 5 + 5)), // 5-10x investment
    growth: (Math.random() * 10 + 5).toFixed(1), // 5-15%
    competition: Math.floor(Math.random() * 50 + 50), // 50-100%
    barriers: Math.floor(Math.random() * 30 + 40), // 40-70%
    trends: Array(months).fill(null).map((_, i) => ({
      month: i + 1,
      value: baseAmount * (1 + (Math.random() * 0.2 - 0.1)) // ±10% fluctuation
    }))
  };

  const riskAssessment = {
    overall: Math.floor(Math.random() * 20 + 60), // 60-80%
    breakdown: {
      market: Math.floor(Math.random() * 20 + 70), // 70-90%
      financial: Math.floor(Math.random() * 20 + 60), // 60-80%
      operational: Math.floor(Math.random() * 20 + 50), // 50-70%
      strategic: Math.floor(Math.random() * 20 + 40) // 40-60%
    },
    mitigation: {
      strategies: [
        'Diversificación de inversiones',
        'Análisis continuo de mercado',
        'Monitoreo de competidores',
        'Adaptación a cambios regulatorios'
      ],
      effectiveness: Math.floor(Math.random() * 20 + 70) // 70-90%
    }
  };

  return {
    riskFactors,
    recommendations,
    marketAnalysis,
    riskAssessment,
    summary: {
      totalRisk: Math.floor(Math.random() * 20 + 60), // 60-80%
      potentialReturn: (Math.random() * 20 + 10).toFixed(1), // 10-30%
      confidence: Math.floor(Math.random() * 10 + 85), // 85-95%
      timeframe: `${months} meses`
    }
  };
};

// Generate social media integration data
export const getSocialMediaIntegrationData = (platform = 'all', dateRange = '7d') => {
  const platforms = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FaFacebookF,
      color: '#1877F2',
      connected: true,
      metrics: {
        followers: `${(Math.random() * 50 + 30).toFixed(1)}K`,
        engagement: `${(Math.random() * 2 + 3).toFixed(1)}%`,
        reach: `${(Math.random() * 100 + 100).toFixed(1)}K`,
        growth: `+${(Math.random() * 3 + 4).toFixed(1)}%`
      },
      trends: Array(7).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 1000 + 500)
      }))
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: FaTwitter,
      color: '#1DA1F2',
      connected: true,
      metrics: {
        followers: `${(Math.random() * 30 + 20).toFixed(1)}K`,
        engagement: `${(Math.random() * 2 + 2).toFixed(1)}%`,
        reach: `${(Math.random() * 80 + 60).toFixed(1)}K`,
        growth: `+${(Math.random() * 2 + 3).toFixed(1)}%`
      },
      trends: Array(7).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 800 + 400)
      }))
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaInstagram,
      color: '#E4405F',
      connected: true,
      metrics: {
        followers: `${(Math.random() * 60 + 40).toFixed(1)}K`,
        engagement: `${(Math.random() * 3 + 4).toFixed(1)}%`,
        reach: `${(Math.random() * 120 + 100).toFixed(1)}K`,
        growth: `+${(Math.random() * 4 + 5).toFixed(1)}%`
      },
      trends: Array(7).fill(null).map((_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        value: Math.floor(Math.random() * 1200 + 600)
      }))
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: FaLinkedin,
      color: '#0A66C2',
      connected: false,
      metrics: null,
      trends: null
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: FaYoutube,
      color: '#FF0000',
      connected: false,
      metrics: null,
      trends: null
    }
  ];

  const insights = [
    {
      platform: 'instagram',
      type: 'trend',
      title: 'Tendencia Detectada',
      description: 'Los posts con productos sostenibles tienen un 45% más de engagement',
      metrics: {
        engagement: '4.5%',
        reach: '156.8K',
        growth: '+6.8%'
      }
    },
    {
      platform: 'facebook',
      type: 'opportunity',
      title: 'Oportunidad de Crecimiento',
      description: 'La audiencia muestra alto interés en contenido educativo',
      metrics: {
        engagement: '3.8%',
        reach: '128.5K',
        growth: '+5.2%'
      }
    },
    {
      platform: 'twitter',
      type: 'alert',
      title: 'Alerta de Engagement',
      description: 'Caída del 15% en interacciones durante horario nocturno',
      metrics: {
        engagement: '2.9%',
        reach: '95.3K',
        growth: '+3.7%'
      }
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Campaña Sostenibilidad',
      platforms: ['instagram', 'facebook'],
      status: 'active',
      performance: Math.floor(Math.random() * 20 + 75), // 75-95%
      metrics: {
        reach: '45.2K',
        engagement: '3.8%',
        conversions: '1.2%'
      }
    },
    {
      id: 2,
      name: 'Lanzamiento Producto',
      platforms: ['twitter', 'facebook', 'instagram'],
      status: 'scheduled',
      performance: null,
      metrics: {
        estimatedReach: '85.3K',
        targetEngagement: '4.2%',
        budget: '€5,000'
      }
    },
    {
      id: 3,
      name: 'Webinar Innovación',
      platforms: ['linkedin', 'twitter'],
      status: 'completed',
      performance: Math.floor(Math.random() * 20 + 80), // 80-100%
      metrics: {
        reach: '32.1K',
        engagement: '5.8%',
        registrations: '1.5K'
      }
    }
  ];

  const summary = {
    totalFollowers: platforms.reduce((sum, p) => sum + (p.metrics ? parseFloat(p.metrics.followers) : 0), 0).toFixed(1) + 'K',
    averageEngagement: (platforms.reduce((sum, p) => sum + (p.metrics ? parseFloat(p.metrics.engagement) : 0), 0) / platforms.filter(p => p.metrics).length).toFixed(1) + '%',
    totalReach: platforms.reduce((sum, p) => sum + (p.metrics ? parseFloat(p.metrics.reach) : 0), 0).toFixed(1) + 'K',
    activeCampaigns: campaigns.filter(c => c.status === 'active').length
  };

  return {
    platforms: platform === 'all' ? platforms : platforms.filter(p => p.id === platform),
    insights,
    campaigns,
    summary
  };
}; 