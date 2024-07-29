// src/components/Experience/ExperienceList.tsx
import React from 'react';
import ExperienceItem from './ExperienceItem';
import styled from 'styled-components';
import experienceLogo from '../../images/p.png';
import { useTranslation } from 'react-i18next';

// Mock data for experiences
const experiences = [
  {
    logo: '/path/to/microsoft-logo.png',
    title: 'Software Engineer',
    company: 'Microsoft',
    duration: 'October 2012 – Present (3 years 11 months)',
    description: 'Identity - Office Division\nInsights and Connected Experiences - Office Division',
  },
  {
    logo: '/path/to/oplog-logo.png',
    title: 'R&D Engineer',
    company: 'OPLOG Operasyonel Lojistik',
    duration: 'April 2012 – July 2012 (4 months)',
    description: 'Technical Infrastructure Development & Integration',
  },
  {
    logo: '/path/to/oplog-logo.png',
    title: 'Backend Developer',
    company: 'Yemeksepeti',
    duration: 'April 2010 – July 2012',
    description: 'Java and JDBC operations for effective food delivery services',
  },
  // Add more experiences as needed
];

const ExperienceListContainer = styled.div`
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative; 
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 10px; /* Adjust right position as needed */
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px; /* Adjust width as needed */
  height: 50px; /* Adjust height as needed */
  border-radius: 50%; /* Makes the logo image round */
  margin-right: 10px; /* Add margin between ExperiencesText and LogoImage */
`;

const ExperiencesText = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px;
  `;

const ExperienceList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ExperienceListContainer>
      <LogoContainer>
        <LogoImage src={experienceLogo} alt="Logo" />
        <ExperiencesText>{t('experience.experience')}</ExperiencesText>
      </LogoContainer>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          logo={exp.logo}
          title={exp.title}
          company={exp.company}
          duration={exp.duration}
          description={exp.description}
        />
      ))}
    </ExperienceListContainer>
  );
};

export default ExperienceList;
