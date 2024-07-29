// src/components/Awards/Awards.tsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AwardsContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AwardsHeader = styled.h2`
  margin-bottom: 10px;
`;

const AwardSentence = styled.p`
  margin-bottom: 5px;
`;

const Awards: React.FC = () => {
  
  const awards = [
    'Received Best Employee of the Year award in 2022.',
    'Recognized with the Top Performer Award for exceptional contributions.',
    'Awarded the Innovation Award for groundbreaking ideas.'
  ];
  const { t } = useTranslation();

  return (
    <AwardsContainer>
      <AwardsHeader>{t('awards.awards')}</AwardsHeader>
      {awards.map((award, index) => (
        <AwardSentence key={index}>{award}</AwardSentence>
      ))}
    </AwardsContainer>
  );
};

export default Awards;