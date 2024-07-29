
// src/components/Experience/ExperienceList.tsx
import React from 'react';
import EducationItem from './EducationItem';
import styled from 'styled-components';
import eduLogo from '../../images/uni.png';
import { useTranslation } from 'react-i18next';

const studies = [
  {
    school: 'Bilkent University',
    degree: 'Bachelor of Science in Computer Engineering',
    duration: 'September 2016 - June 2020',
    description: 'Relevant courses: Data Structures, Algorithms, Operating Systems, Machine Learning.',
  },
  {
    school: 'Stanford University',
    degree: 'Master of Science in Computer Science',
    duration: 'September 2020 - June 2022',
    description: 'Specialization in Artificial Intelligence and Machine Learning.',
  }
];

const EducationListContainer = styled.div`
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

const EducationText = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0spx;
  padding: 10px;
  `;

const EducationList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <EducationListContainer>
      <LogoContainer>
        <LogoImage src={eduLogo} alt="Logo" />
        <EducationText>{t('education.education')}</EducationText>
      </LogoContainer>
      {studies.map((exp, index) => (
        <EducationItem
          key={index}
          school={exp.school}
          degree={exp.degree}
          duration={exp.duration}
          description={exp.description}
        />
      ))}
    </EducationListContainer>
  );
};

export default EducationList;
