// src/components/Experience/ExperienceItem.tsx
import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  border-bottom: 1px solid #e1e4e8;
  align-items: center;
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
   text-align: center;
`;

const JobTitle = styled.h3`
  margin: 0;
`;

const CompanyName = styled.h4`
  margin: 5px 0;
  color: gray;
`;

const JobDuration = styled.p`
  margin: 5px 0;
  color: gray;
`;

const JobDescription = styled.p`
  margin: 0;
`;

type ExperienceItemProps = {
  logo: string;
  title: string;
  company: string;
  duration: string;
  description: string;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({title, company, duration, description }) => {
  return (
    <ExperienceContainer>
      <ExperienceDetails>
        <JobTitle>{title}</JobTitle>
        <CompanyName>{company}</CompanyName>
        <JobDuration>{duration}</JobDuration>
        <JobDescription>{description}</JobDescription>
      </ExperienceDetails>
    </ExperienceContainer>
  );
};

export default ExperienceItem;
