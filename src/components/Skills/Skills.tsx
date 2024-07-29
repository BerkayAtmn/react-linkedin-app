// src/components/Skills/Skills.tsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 60px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

const SkillsHeader = styled.h2`
  margin-right: 50px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  margin: 5px;
  padding: 10px 15px;
  background-color: #f3f3f3;
  border-radius: 20px;
  border: 1px solid #ddd;
`;

const Skills: React.FC = () => {
  const skills = [
    'C#', '.NET', 'Java', 'Android Development', 'Visual Studio', 'ASP.NET', 'C++',
    'Entity Framework', 'WCF', 'LINQ', 'Microsoft SQL Server', 'SQL', 'WPF', 'OOP', 'MySQL'
  ];
  const { t } = useTranslation();

  return (
    <SkillsContainer>
      <SkillsHeader>{t('skills.skills')}</SkillsHeader>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
