import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const VideoSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <Title>Descubre Nuestra Plataforma</Title>
        <Subtitle>
          Ve cómo nuestra tecnología transforma la forma de entender el comportamiento del consumidor
        </Subtitle>
        <VideoContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yzFfBxM7CJI"
            title="Consumer Digital Twin AI Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
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
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.primary};
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.text};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default VideoSection; 